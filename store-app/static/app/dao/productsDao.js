const Product = require("../model/product");
const SubCategory = require("../model/subcategory");
const Category = require("../model/category");
const Brand = require("../model/brand");
const daoCommon = require("./common/daoCommon");

class ProductsDao{
     constructor(){
          this.common = new daoCommon();
     }

     findAll(){
          let sqlRequest = "SELECT * FROM Product";
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                       row.id,
                       row.name,
                       row.img,
                       row.price
                    ));
               };
               return product;
          });
     }

     findAllProducts(){
          let sqlRequest = "SELECT * FROM Product";
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price
                    ));
               };
               return product;
          });
     }

     findAllCategories(){
          let sqlRequest = "SELECT * FROM Category";
          return this.common.findAll(sqlRequest).then(rows => {
               let category = [];
               console.log(rows);
               for(const row of rows){
                    category.push(new Category(
                         row.id,
                         row.name
                    ));
               };
               return category;
          });
     }
     
     findAllSubCategories(){
          let sqlRequest = "SELECT * FROM SubCategory";
          return this.common.findAll(sqlRequest).then(rows => {
               let subcategory = [];
               console.log(rows);
               for(const row of rows){
                    subcategory.push(new SubCategory(
                         row.id,
                         row.name
                    ));
               };
               return subcategory;
          })
     }

     findAllBrands(){
          let sqlRequest = "SELECT * FROM Brand";
          return this.common.findAll(sqlRequest).then(rows => {
               let brand = [];
               console.log(rows);
               for(const row of rows){
                    brand.push(new Brand(
                         row.id,
                         row.name
                    ));
               };
               return brand;
          })
     }
}

module.exports = ProductsDao;