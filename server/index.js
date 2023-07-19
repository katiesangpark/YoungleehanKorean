import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB ERROR => ", err));

// middlewares
app.use(cors());

app.get("/api", function (req, res) {
    //입력바람
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Node server is running on port ${port}`);
});
