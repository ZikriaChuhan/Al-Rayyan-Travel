import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { connectionStr } from '@/lib/db';
import { User } from '@/lib/model/usermodel';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    // Connect to MongoDB
                    if (mongoose.connection.readyState !== 1) {
                        await mongoose.connect(connectionStr, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                        });
                    }

                    // Find user by email
                    const user = await User.findOne({ email: credentials.email });
                    if (!user) {
                        return null;
                    }

                    // Check if password is correct
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) {
                        return null;
                    }

                    // Return the user object
                    return {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                    };
                } catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        }
    }
};

const handler = (req, res) => NextAuth(req, res, authOptions);

// Export named HTTP methods
export { handler as GET, handler as POST };
