var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
const moment = require("moment");
/* GET all trips */
router.get("/", (req, res) => {
    Trip.find().then((data) => {
        res.json({ result: true, trips: data });
    });
});

/* GET trips by departure, arrival and date.*/
router.post("/", (req, res) => {
    Trip.find({
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: { $gte: req.body.date },
    }).then((Data) => {
        if (Data.length > 0) {
            res.json({ Data });
        } else {
            res.json({ error: "Trip not found" });
        }
    });
});

module.exports = router;
