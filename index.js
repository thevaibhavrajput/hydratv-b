import app from './src/app.js';
import Bun from 'bun';

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ CORS configuration (very important)
const allowedOrigins = [
  "https://hydratvv.vercel.app", // your frontend on Vercel
  "http://localhost:5173"        // for local testing
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Other middleware
app.use(express.json());

Bun.serve({
  port: 3030,
  fetch: app.fetch,
});
