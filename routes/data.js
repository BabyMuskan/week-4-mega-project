const express = require("express");
const User = require("../models/User"); // Check karain model path sahi ho
const router = express.Router();

// Route path SIRF "/" hona chahiye
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const skip = (page - 1) * limit;

    const searchQuery = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } }
          ]
        }
      : {};

    const totalRecords = await User.countDocuments(searchQuery);
    const totalPages = Math.ceil(totalRecords / limit);

    const items = await User.find(searchQuery)
      .select("-password")
      .skip(skip)
      .limit(limit);

    res.json({
      status: "success",
      currentPage: page,
      totalPages,
      totalRecords,
      items
    });
  } catch (error) {
    console.error("Data Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;