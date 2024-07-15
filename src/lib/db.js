import mongoose from "mongoose";

const {MONGO_URL}=process.env;

export const connectionStr = MONGO_URL;

export async function connecting() {
    if (mongoose.connection.readyState >= 1) return;

    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Error connecting to MongoDB');
    }
}
