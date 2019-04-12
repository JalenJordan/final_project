const ProductsDao = require("../dao/productsDao");
const ControllerCommon = require("./common/controllerCommon");
const Products = require("../model/products");

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

     findByName(req, res){
          let name = req.params.name;
          this.productsDao.findByName(name)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     findByType(req, res){
          let type = req.params.type;
          this.productsDao.findByType(type)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     };

     
}

module.exports = ProductsController;