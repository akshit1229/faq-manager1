const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faqRoutes = require("./routes/faqRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", faqRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}) 

.catch(err => console.error("MongoDB connection error:", err));
