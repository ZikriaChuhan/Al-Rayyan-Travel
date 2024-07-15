import { writeFile } from "fs/promises";
import { connectionStr } from "@/lib/db";
import { Package } from "@/lib/model/package";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(connectionStr);
        data = await Package.find();
        return NextResponse.json({ result: data, success: true })
    } catch (error) {
        data = { success: false }
        console.log(error);
    }

}

export async function POST(req) {
    // const payload = await request.json();
    // await mongoose.connect(connectionStr);
    // let package1 = new Package(payload);
    // const result = await package1.save();
    // return NextResponse.json({result})
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const price = formData.get('price');
        const shortdes = formData.get('shortdes');
        const longdes = formData.get('longdes');
        const image = formData.get('image');

        if (!image) {
            return NextResponse.json({ message: "no image found", success: false });
        }

        const byteData = await image.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const imageName = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${image.name}`;
        const path = `./public/uploads/${imageName}`;
        await writeFile(path, buffer);
        const imagePath = `/uploads/${imageName}`;

        await mongoose.connect(connectionStr);

        const newPackage = new Package({
            name,
            price,
            shortdes,
            longdes,
            image: imagePath
        });

        const result = await newPackage.save();

        return NextResponse.json({ result, success: true, message: "file uploaded and data saved" });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred", success: false });
    }
}

