let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/products.db");

let init = function(){

     db.run("CREATE TABLE if not exists Product(" + 
          "id INTEGER PRIMARY KEY," +
          "name TEXT," +
          "img TEXT," +
          "price INTEGER" +
          ")"
     );

     db.run("CREATE TABLE if not exists Category(" +
          "id INTEGER PRIMARY KEY," +
          "name TEXT"+
          ")"
     );


     db.run("CREATE TABLE if not exists Brand(" +
          "id INTEGER PRIMARY KEY," +
          "name TEXT" +
          ")"
     );

     db.run("CREATE TABLE if not exists SubCategory("+
          "id INTEGER PRIMARY KEY," +
          "name TEXT" +
          ")"
     );


};

module.exports = {
     init: init,
     db: db
};