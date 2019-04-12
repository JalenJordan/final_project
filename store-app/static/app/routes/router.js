const express = require("express");
const router = express.Router();

router.use("/store", require("./api/productsRoutes"));
// router.use("/account", require("./api/rentalRoutes"));

//add more api routes here

module.exports = router;