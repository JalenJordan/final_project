const Products = require("../model/products");
const daoCommon = require("./common/daoCommon");

class ProductsDao{
     constructor(){
          this.common = new daoCommon();
     }

     findAll(){
          let sqlRequest = "SELECT * FROM Products ORDER BY id ASC";
          return this.common.findAll(sqlRequest).then(rows => {
               let products = [];
               console.log(rows);
               for (const row of rows){
                    products.push(new Products(
                         row.id,
                         row.type,
                         row.name,
                         row.price,
                         row.brand
                    ));
               };
               return products;
          });
     }

     findByName(name){
          let sqlRequest = "SELECT * FROM Products WHERE name ='"  +  name + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let products = [];
               console.log(rows);
               for(const row of rows){
                    products.push(new Products(
                         row.id,
                         row.type,
                         row.name,
                         row.price,
                         row.brand
                    ));
               }
               return products;
          });
     }

     findByType(type){
          let sqlRequest = "SELECT * FROM Products WHERE type ='" + type + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let products = [];
               console.log(rows);
               for(const row of rows){
                    products.push(new Products(
                         row.id,
                         row.type,
                         row.name,
                         row.price,
                         row.brand
                    ));
               }
               return products;
          });
     }

     findByBrand(brand){
          let sqlRequest = "SELECT * FROM Products WHERE brand ='" + brand + "' ";
          return this.common.findAll()
     }
}

module.exports = ProductsDao;