import mongoose from "mongoose";

const packageModel= new mongoose.Schema({
    name:String,
    price:String,
    shortdes:String,
    longdes:String,
    image:String,
});

export const Package = mongoose.models.packages || mongoose.model("packages",packageModel);