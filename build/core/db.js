import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}
const initializeDB = async () => {
    await mongoose.connect(uri);
    const connection = mongoose.connection;
    connection.on("connected", () => {
        console.log("MongoDB connected successfully!");
    });
    connection.on("error", (err) => {
        console.error("Mongoose connection error: " + err);
    });
    connection.on("disconnected", () => {
        console.log("Mongoose disconnected");
    });
};
export default initializeDB;
