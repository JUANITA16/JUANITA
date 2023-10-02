import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:1008@cluster0.knlv1pn.mongodb.net/");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error)
    }
}