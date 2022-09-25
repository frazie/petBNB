const Booking = require("../models/Booking");

module.exports = {
  
    createBooking: async (req, res) => {
      try {
        await Booking.create({
          kennel: req.params.id,
          bookedBy: req.user.userName,
          bookedById: req.user.id,
          pet: req.body.pet,
          comment: req.body.comment,
          BookingFrom: req.body.BookingFrom,
          BookingTill: req.body.BookingTill,
        });
        console.log("New booking has been created");
        res.redirect("/post/"+req.params.id);
      } catch (err) {
        console.log(err);
      }
    },
    deleteBooking: async (req, res) => {
      try {
        await Booking.deleteOne({
          _id: req.params.bookingid
        })
        console.log("Booking has been deleted");
        res.redirect("/post/"+req.params.postid)
  
      } catch (err) {
        console.log(err);
      }
    }
    
  };