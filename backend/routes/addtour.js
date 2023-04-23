const express = require("express");
const {
  createTour,
  getTour,
  deleteTour,
  updateTour,
  singleTour,
  gettoursearch,
  getfeatured,
  estimate,
} = require("../controllers/tourController");
const { verifyadmin, verifyuser } = require("../utils/verifytoken");

const router = express.Router();

router.post("/addtour", createTour);
router.get("/gettour", getTour);
router.delete("/:id", verifyuser, deleteTour);
router.put("/tour/:id", updateTour);
router.get("/byid/:id", singleTour);
router.get("/search/getbysearch", gettoursearch);
router.get("/featured/getfeatured", getfeatured);
router.get("/featured/estimate", estimate);

module.exports = router;
