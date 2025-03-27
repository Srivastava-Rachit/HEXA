import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import adminRouter from "./routes/adminRoute.js";
import ytcontentrouter from "./routes/ytcontentRoute.js";
import ytgamerouter from "./routes/ytgamesRoute.js";

// APP CONFIG
const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// Connect to your database
connectDB();

// Determine __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the frontend build folder
app.use(
  express.static(path.join(__dirname, "build"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "text/javascript");
      }
    },
  })
);

// Serve image uploads folder
app.use("/images", express.static(path.join(__dirname, "uploads")));

// API ENDPOINTS
app.use("/api/admin", adminRouter);
app.use("/api/ytcontent", ytcontentrouter);
app.use("/api/games", ytgamerouter);

app.get("/api", (req, res) => {
  res.send("API WORKING");
});

// Fallback to serve index.html for any other routes (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
