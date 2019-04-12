let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/products.db");

let init = function(){

     db.run("CREATE TABLE if not exists products(" + 
     "id INTEGER," +
     "type TEXT," +
     "name TEXT," +
     "price INTEGER," +
     "brand TEXT" +
     ")");
};

module.exports = {
     init: init,
     db: db
};