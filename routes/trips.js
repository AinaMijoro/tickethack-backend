var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");

/* GET all trips */
router.get("/", (req,res) => {
    Trip.find().then((data) => {
    res.json({ result: true, trips: data});
})
})

/* GET trips by departure, arrival and date.*/
router.post("/", (req, res) => {
    Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date }).then((data) => {
        if (data !== null) {
            const filterData = { date: { $gte: new Date(req.body.date) } };
            res.json({ result: true, trips: data.departure});
        } else {
            res.json({result: false, message: "No trips found."});
        }
    });
});

module.exports = router;
