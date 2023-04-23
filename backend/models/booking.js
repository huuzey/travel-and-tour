const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    userId: { type: String },
    userEmail: { type: String },

    tourName: { type: String },
    fullName: { type: String, required: true },
    guestSize: { type: Number, required: true },
    phone: { type: Number, required: true },
    bookAt: { type: Date, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("booking", bookingSchema);
