const { createReview } = require("../controllers/reviewController");

const router = require("express").Router();

router.post("/:tourId", createReview);

module.exports = router;
