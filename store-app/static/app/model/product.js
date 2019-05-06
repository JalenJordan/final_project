class Product{
     constructor(id, name, img, price, brand, category, subcategory, discription, category_name, brand_name){
          this.id = id;
          this.name = name;
          this.img = img;
          this.price = price;
          this.brand = brand;
          this.category = category;
          this.subcategory = subcategory;
          this.discription = discription;
          this.category_name = category_name;
          this.brand_name = brand_name;
     }
}

module.exports = Product;