const express = require("express");
const { getFAQs, addFAQ } = require("../controller/faqController");
const router = express.Router();
router.get("/", getFAQs);
router.post("/", addFAQ);

module.exports = router;
