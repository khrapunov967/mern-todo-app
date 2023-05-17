import express from "express";
import morgan from "morgan";
import allRoutes from "./routes/index.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api", allRoutes);
app.use(morgan("tiny"));

const startServer = () => {
    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);

        } else {
            console.log(`Server started on port ${PORT}`)
        }
    })
};

startServer();