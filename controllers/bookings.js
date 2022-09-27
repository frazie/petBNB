const Booking = require("../models/Booking");

module.exports = {
  
  
    getBooking: async (req, res) => {
      try {
        const Booking = await Booking.findById(req.params.id);
        // const comments = await Comment.find({ post: req.params.id }).sort({ createdAt: "asc" }).lean();
        res.render("booking.ejs", { 
          kennel: kennel, 
          user: bookedBy, 
          
        });
      } catch (err) {
        console.log(err);
      }
    },
    createBooking: async (req, res) => {
      try {
        await Booking.create({
          kennel: req.params.id,
          bookedBy: req.user.userName,
          bookedById: req.user.id,
          pet: req.body.pet,
          petNumber: req.body.petNumber,
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