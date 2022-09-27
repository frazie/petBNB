const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookings");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//booking Routes - simplified for now
router.get("/:bookingid", ensureAuth, bookingsController.getBooking)
router.post("/createBooking/:id", bookingsController.createBooking);
router.delete("/deleteBooking/:postid/:bookingid",bookingsController.deleteBooking)

module.exports = router;
