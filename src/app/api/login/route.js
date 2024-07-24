import { connectionStr } from "@/lib/db";
import {User} from "@/lib/model/usermodel"; 
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export async function POST(req) {
    try {
     
        const body = await req.json();
        const { email, password } = body;

      
        if (!email || !password) {
            return NextResponse.json({ msg: "Invalid fields" }, { status: 400 });
        }

        
        await connectionStr();

      
        const isUserPresent = await User.findOne({ email });
        if (!isUserPresent) {
            return NextResponse.json({ msg: "User is not available" }, { status: 404 }); 
        }

        
        const isPasswordMatch = await bcrypt.compare(password, isUserPresent.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ msg: "Invalid Credentials" }, { status: 401 }); 
        }

        
        const privateKey = process.env.JWT_SECRET || crypto.randomUUID();
        const name = isUserPresent.name;
        const token = jwt.sign({ email, name }, privateKey, { expiresIn: '8h' }); 

       
        const response = NextResponse.json({ msg: "User successfully logged in", success: true }, { status: 200 });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 3600, 
            path: '/',
        });

        return response;
    } catch (err) {
        console.error('Error during login:', err);
        return NextResponse.json({ error: 'Internal Server Error', success: false }, { status: 500 });
    }
}
