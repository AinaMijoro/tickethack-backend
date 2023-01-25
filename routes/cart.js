var express = require("express");
var router = express.Router();
const Cart = require("../models/cart");

/* GET trips by departure, arrival and date.*/
router.post("/", (req, res) => {
    Cart.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date }).then((data) => {
        if(data !== null){
            res.json({result: true, cart: data});
        } else {
            res.json({result: false, message: "No trips found."});
        }
    });
});

module.exports = router;
