import { connectionStr } from "@/lib/db";
import {User} from "@/lib/model/usermodel"; // Ensure the import is consistent with the export from the model file
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export async function POST(req) {
    try {
        // Parse the request body
        const body = await req.json();
        const { email, password } = body;

        // Validate email and password
        if (!email || !password) {
            return NextResponse.json({ msg: "Invalid fields" }, { status: 400 });
        }

        // Establish database connection
        await connectionStr();

        // Check if user exists
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return NextResponse.json({ msg: "User is not available" }, { status: 404 }); // Changed status to 404 (Not Found)
        }

        // Check if password matches
        const isPasswordMatch = await bcrypt.compare(password, isUserPresent.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ msg: "Invalid Credentials" }, { status: 401 }); // Changed status to 401 (Unauthorized)
        }

        // Generate JWT token
        const privateKey = process.env.JWT_SECRET || crypto.randomUUID(); // Use environment variable for secret key if available
        const name = isUserPresent.name;
        const token = jwt.sign({ email, name }, privateKey, { expiresIn: '8h' }); // Token expires in 1 hour

        // Set cookie in response
        const response = NextResponse.json({ msg: "User successfully logged in", success: true }, { status: 200 });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure flag in production
            maxAge: 3600, // Cookie expires in 1 hour
            path: '/',
        });

        return response;
    } catch (err) {
        console.error('Error during login:', err);
        return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 });
    }
}
