const ProductsDao = require("../dao/productsDao");
const ControllerCommon = require("./common/controllerCommon");
const Product = require("../model/product");
const Category = require("../model/category");
const SubCategory = require("../model/subcategory");
const Brand = require("../model/brand");

class ProductsController{

     constructor(){
          this.productsDao = new ProductsDao();
          this.common = new ControllerCommon();
     }

     findAll(res){
          this.productsDao.findAll()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findAllProducts(res){
          this.productsDao.findAllProducts()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findAllSubCategories(res){
          this.productsDao.findAllSubCategories()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findAllBrands(res){
          this.productsDao.findAllBrands()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findAllCategories(res){
          this.productsDao.findAllCategories()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findByCategory(req, res){
          let category = req.params.category;
          this.productsDao.findByCategory(category)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findBySubCategory(req, res){
          let subcategory = req.params.subcategory;
          this.productsDao.findBySubCategory(subcategory)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findByBrand(req, res){
          let brand = req.params.brand;
          this.productsDao.findByBrand(brand)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
}

module.exports = ProductsController;