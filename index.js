import express from "express";
import { config } from "dotenv";

const app = express();

config({
    path: ".env"
});

app.get("/", (req, res) => {
    res.send("Chain Swanging");
});

app.listen(process.env.PORT, () => {
    console.log("Server Running On", process.env.PORT);
});