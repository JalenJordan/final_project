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

router.get("/cat/:category", function(req, res){
     productsController.findByCategory(req, res);
     console.log(req.params.category);
});

router.get("/subcat/:subcategory", function(req, res){
     productsController.findBySubCategory(req, res);
     console.log(req.params.subcategory);
});

router.get("/brands/:brand", function(req, res){
     productsController.findByBrand(req, res);
     console.log(req.params.brand);
});

module.exports = router;



router.delete('/:id', function (req, res){
     productsController.deleteById(req, res);
});