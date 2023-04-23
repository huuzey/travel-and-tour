const {
  createBooking,
  getsingleBooking,
  getAllBooking,
} = require("../controllers/bookingrcontroller");

const router = require("express").Router();

router.post("/create", createBooking);
router.get("/:id", getsingleBooking);
router.get("/get/getallbooking", getAllBooking);

module.exports = router;
