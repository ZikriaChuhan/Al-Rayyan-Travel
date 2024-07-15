import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { connectionStr } from '@/lib/db';
import { User } from '@/lib/model/usermodel';

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        const data = await User.find();
        return NextResponse.json({ result: data, success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false });
    }
}

export const POST = async (request) => {
    try {
        const { name, email, password } = await request.json();

        await mongoose.connect(connectionStr);

        

        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return new NextResponse('User is registered', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse(error, { status: 500 });
    }
};
