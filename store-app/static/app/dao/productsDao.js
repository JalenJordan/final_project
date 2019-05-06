const Product = require("../model/product");
const SubCategory = require("../model/subcategory");
const Category = require("../model/category");
const Brand = require("../model/brand");
const daoCommon = require("./common/daoCommon");

class ProductsDao{
     constructor(){
          this.common = new daoCommon();
     }
     ShowCPU(){
          let sqlRequest = "SELECT * FROM Product WHERE category = 1 AND brand =" + 1;
          return this.common.findAll(sqlRequest).then(rows =>{
               let product = [];
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price,
                         row.brand,
                         row.category,
                         row.subcategory,
                         row.discription
                    ));
               };
               return product;
          });
     }
     ShowCPU2(){
          let sqlRequest = "SELECT * FROM Product WHERE category = 1 AND brand =" + 12;
          return this.common.findAll(sqlRequest).then(rows =>{
               let product = [];
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price,
                         row.brand,
                         row.category,
                         row.subcategory,
                         row.discription
                    ));
               };
               return product;
          });
     }

     Similar(){
          let sqlRequest = "SELECT * FROM Product WHERE name LIKE 'RYZEN%'";
          return this.common.findAll(sqlRequest).then(rows =>{
               let product = [];
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price,
                         row.brand_name,
                         row.category_name,
                         row.discription,
                         row.category_name,
                         row.brand_name
                    ));    
               };
               return product;
          });
     }

     ShowAll(){
          let sqlRequest = "SELECT p.*,c.name as category_name, b.name as brand_name FROM Product p INNER JOIN Category c ON p.category = c.id INNER JOIN Brand b ON p.brand = b.id";
          return this.common.findAll(sqlRequest)
          .then(rows =>{
               let product = [];
               console.log(rows)
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price,
                         row.brand_name,
                         row.category_name,
                         row.discription,
                         row.category_name,
                         row.brand_name
                    ));
               };
               return product;
          });
     }
     
     findAll(){
          let sqlRequest = "SELECT p.*,c.name as category_name, b.name as brand_name FROM Product p INNER JOIN Category c ON p.category = c.id INNER JOIN Brand b ON p.brand = b.id";
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                       row.id,
                       row.name,
                       row.img,
                       row.price,
                       row.brand_name,
                       row.category_name,
                       row.subcategory,
                       row.discription,
                       row.brand_name,
                       row.category_name
                    ));
               };
               return product;
          });
     }

     findAllProducts(){
          let sqlRequest = "SELECT p.*,c.name as category_name, b.name as brand_name FROM Product p INNER JOIN Category c ON p.category = c.id INNER JOIN Brand b ON p.brand = b.id";
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.price,
                         row.brand,
                         row.category,
                         row.subcategory,
                         row.discription,
                         row.category_name,
                         row.brand_name
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

     findByCategory(category){
          let sqlRequest = "SELECT * FROM Product WHERE category = " + category;
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.brand,
                         row.price,
                         row.category,
                         row.subcategory,
                         row.discription
                    ));
               };
               return product;
          })
     }

     findBySubCategory(subcategory){
          let sqlRequest = "SELECT * FROM Product WHERE subcategory = " + subcategory;
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.brand,
                         row.price,
                         row.category,
                         row.subcategory,
                         row.discription
                    ));
               };
               return product;
          })
     }

     findByBrand(brand){
          let sqlRequest = "SELECT * FROM Product WHERE brand = " + brand;
          return this.common.findAll(sqlRequest).then(rows => {
               let product = [];
               console.log(rows);
               for(const row of rows){
                    product.push(new Product(
                         row.id,
                         row.name,
                         row.img,
                         row.brand,
                         row.price,
                         row.category,
                         row.subcategory,
                         row.discription
                    ));
               };
               return product;
          })
     }
}

module.exports = ProductsDao;