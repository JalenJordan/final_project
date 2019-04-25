let sqlite3 = require("sqlite3").verbose();
let DB_PATH = "./db/products.db";

const db = new sqlite3.Database(DB_PATH,
     function(err){
          if(err){
               console.log(err);
               return
          }
          console.log("Connected to " + DB_PATH + "database");

          db.exec("PRAGMA foreign_keys = ON;",
          function(err){
               if(err){
                    console.error("Pragma statement did");
               } else{
                    console.log("Foreign Key Enforcement is on.");
               }
          });
     }
);

let init = function(){

     db.run("CREATE TABLE if not exists Product(" + 
          "id INTEGER PRIMARY KEY UNIQUE," +
          "name TEXT NOT NULL," +
          "img TEXT NOT NULL," +
          "price TEXT NOT NULL," +
          "brand INTEGER NOT NULL," +
          "category INTEGER NOT NULL," + 
          "subcategory INTEGER NOT NULL,"+
          "FOREIGN KEY('subcategory') REFERENCES Category('id')," +
          "FOREIGN KEY('brand') REFERENCES Brand('id')" +
          ")"
     );

     db.run("CREATE TABLE if not exists Category(" +
          "id INTEGER PRIMARY KEY UNIQUE," +
          "name TEXT UNIQUE NOT NULL"+
          ")"
     );


     db.run("CREATE TABLE if not exists Brand(" +
          "id INTEGER PRIMARY KEY UNIQUE," +
          "name TEXT UNIQUE NOT NULL" +
          ")"
     );

     db.run("CREATE TABLE if not exists SubCategory("+
          "id INTEGER PRIMARY KEY UNIQUE," +
          "name TEXT UNIQUE NOT NULL" +
          ")"
     );
};

module.exports = {
     init: init,
     db: db
};