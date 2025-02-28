require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve images publicly

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5 MB
});

let profileImages = [];

// Upload Images
app.post("/upload", upload.array("images"), (req, res) => {
  if (!req.files) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  const filePaths = req.files.map((file) => `/uploads/${file.filename}`);
  profileImages.push(...filePaths);
  res.json({ success: true, images: filePaths });
});

// Get Images
app.get("/images", (req, res) => {
  res.json({ images: profileImages });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
