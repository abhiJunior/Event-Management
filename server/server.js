import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import ConnectToDB from "./config/dbConfig.js";

import profileRoutes from "./routes/profiles.js";
import eventRoutes from "./routes/events.js";

dotenv.config();


const app = express();
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

app.use("/api/profiles", profileRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;


app.listen(5000,async()=>{
    await ConnectToDB()
    console.log(`server is running at http://localhost:${PORT}`)
})