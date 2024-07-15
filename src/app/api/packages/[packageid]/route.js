import { connectionStr } from "@/lib/db";
import { Package } from "@/lib/model/package";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(req, content) {
    try {
      const packageId = content.params.packageid;
      const filter = { _id: packageId };
      const payload = await req.json();
  
      await mongoose.connect(connectionStr);
      const result = await Package.findOneAndUpdate(filter, payload, { new: true });
  
      return NextResponse.json({ result, success: true });
    } catch (error) {
      console.error('Error updating package:', error);
      return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
  }


export async function GET(req, content) {
    try {
      const packageId = content.params.packageid;
      await mongoose.connect(connectionStr);
      const result = await Package.findById(packageId);
  
      if (!result) {
        return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
      }
  
      return NextResponse.json({ result, success: true });
    } catch (error) {
      console.error('Error fetching package:', error);
      return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
  }


  export async function DELETE(req, content) {
    try {
      const packageId = content.params.packageid;
      const filter = { _id: packageId };
      await mongoose.connect(connectionStr);
      const result = await Package.findByIdAndDelete(filter);
  
      if (!result) {
        return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
      }
  
      return NextResponse.json({ result, success: true });
    } catch (error) {
      console.error('Error fetching package:', error);
      return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
  }