const express = require("express");
const router = express.Router();
const { addFAQ, getAllFAQs } = require("../controllers/faqController");

router.post("/faqs", addFAQ);
router.get("/faqs", getAllFAQs);

module.exports = router; 
