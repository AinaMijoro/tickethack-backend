var express = require("express");
var router = express.Router();
const Booking = require("../models/bookings");

/* GET trips by departure, arrival and date.*/
router.post("/", (req, res) => {
    Booking.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date }).then((data) => {
});
});

module.exports = router;
