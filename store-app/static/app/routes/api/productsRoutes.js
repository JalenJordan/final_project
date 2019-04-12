const express = require("express");
const router = express.Router();

//controller here
const ProductsController = require("../../controller/productsController");
const productsController = new ProductsController();


router.get("/", function (req, res){
     productsController.findAll(res);
});

router.get("/name/:name", function(req, res){
     productsController.findByName(req, res);
})

router.get("/type/:type", function(req, res){
     productsController.findByType(req, res);
})

module.exports = router;



router.delete('/:id', function (req, res){
     rentalController.deleteById(req, res);
});