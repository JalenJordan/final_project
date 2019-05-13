const express = require("express");
const router = express.Router();

//controller here
const ProductsController = require("../../controller/productsController");
const productsController = new ProductsController();


router.get("/CPU", function (req,res){
     productsController.ShowCPU(res);
});

router.get("/CPU2", function(req,res){
     productsController.ShowCPU2(res);
});

router.get("/GPU", function(req, res){
     productsController.ShowGPU(res);
});

router.get("/GPU2", function(req, res){
     productsController.ShowGPU2(res);
});

router.get("/GPU3", function(req, res){
     productsController.ShowGPU3(res);
});

router.get("/MOBO", function(req,res){
     productsController.ShowMOBO(res);
});

router.get("/CASES", function(req, res){
     productsController.ShowCases(res);
});

router.get("/name", function(req, res){
     productsController.findByName(res);
})

router.get("/", function (req,res){
     productsController.findAll(res);
});

router.get("/items", function (req,res){
     productsController.findAllProducts(res);
});

router.get("/sim", function (req, res){
     productsController.Similar(res);
     console.log(req.params.name);
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