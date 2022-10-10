const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  kennel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kennel",
  },
  bookedBy: {
    type: String,
    ref: "User",
  },
  bookedById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  pet: {
    type: String,
    required: true,
  },
  petNumber: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  BookingFrom: {
    type: String,
    required: true,
  },
  BookingTill: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);