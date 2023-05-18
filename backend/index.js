import express from "express";
import morgan from "morgan";
import allRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: "https://mern-todo-app-client.onrender.com",
    // origin: "http://localhost:5173",
    credentials: true,
    preflightContinue: false
}))
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/api", allRoutes);

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("App connected to MongoDB");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const startServer = () => {
    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);

        } else {
            console.log(`Server started on port ${PORT}`);
            connectToMongoDB();
        }
    })
};

startServer();