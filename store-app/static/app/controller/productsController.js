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

     ShowGPU(res){
          this.productsDao.ShowGPU()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
     ShowGPU2(res){
          this.productsDao.ShowGPU2()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
     ShowGPU3(res){
          this.productsDao.ShowGPU3()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
     
     ShowCPU(res){
          this.productsDao.ShowCPU()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
     ShowCPU2(res){
          this.productsDao.ShowCPU2()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     ShowMOBO(res){
          this.productsDao.ShowMOBO()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     ShowCases(res){
          this.productsDao.ShowCases()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };
     
     Similar(res){
          this.productsDao.Similar()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findAll(res){
          this.productsDao.findAll()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findAllProducts(res){
          this.productsDao.findAllProducts()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

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

     findByName(res){
          this.productsDao.findByName()
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