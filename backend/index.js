import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoDB.config.js";
import expensesRoute from "./routes/expenses.routes.js";
import userRouter from "./routes/authentication.routes.js";
import fs from 'fs';
import path from "path";

config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow cookies to be sent
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // FIXED: Added { extended: true } for express.urlencoded

const __dirname = path.resolve();
// Routes
app.use("/api/expenses", expensesRoute);
app.use("/api/users", userRouter);


const frontendBuildPath = path.join(__dirname, "../frontend/dist");

if (fs.existsSync(frontendBuildPath)) {
  app.use(express.static(frontendBuildPath));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(frontendBuildPath, "index.html"));
  });
} else {
  console.warn("⚠️ Frontend build not found. Skipping static file serving.");
}

app.listen(PORT, () => {
  console.log(`server Listing on http://localhost:${PORT}`);
});