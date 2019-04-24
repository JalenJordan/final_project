const express = require("express");
const router = express.Router();

//controller here
const ProductsController = require("../../controller/productsController");
const productsController = new ProductsController();


router.get("/", function (req,res){
     productsController.findAll(res);
});

router.get("/items", function (req,res){
     productsController.findAllProducts(res);
});

router.get("/subcat", function(req,res){
     productsController.findAllSubCategories(res);
});

router.get("/brands", function(req,res){
     productsController.findAllBrands(res);
});

router.get("/cat", function(req,res){
     productsController.findAllCategories(res);
});

module.exports = router;



router.delete('/:id', function (req, res){
     productsController.deleteById(req, res);
});