import express from "express";

import { Database } from "./lib/database.js";
import eventroutes from "./event/routes/event/route.js";
import cors from 'cors'
import dotenv from 'dotenv'
import { clerkMiddleware } from '@clerk/express'
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors({
  origin: ["http://localhost:8081", "exp://127.0.0.1:8081"], // your Expo or web frontend URLs
  credentials: true, // allow cookies / auth headers if needed
}));
app.use(clerkMiddleware())
Database()

app.use('/api/event',eventroutes)
app.listen(3000,()=>{
    console.log('node is running on 3000')
})