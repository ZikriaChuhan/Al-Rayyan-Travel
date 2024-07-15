import { connectionStr } from "@/lib/db";
import { Package } from "@/lib/model/package";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { viewpackage } = params;
  try {
    await mongoose.connect(connectionStr);
    const packageData = await Package.findById(viewpackage);
    if (!packageData) {
      return NextResponse.json({ success: false, message: "Package not found" });
    }
    return NextResponse.json({ success: true, result: packageData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "An error occurred" });
  }
}
