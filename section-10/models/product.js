const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if (this.id) {
      return db.execute(
        'UPDATE products SET title=$1, price=$2, "imageUrl"=$3, description=$4 WHERE id=$5',
        [this.title, this.price, this.imageUrl, this.description, this.id]
      );
    }
    return db.execute(
      'INSERT INTO products (title, price, "imageUrl", description) VALUES ($1, $2, $3, $4)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM products WHERE id=$1', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id=$1', [id]);
  }
};