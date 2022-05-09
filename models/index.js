// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { tableName } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
// Come back to check the through/as/fk parts
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_products',
  foreignKey: 'tag_id' 
})
// Tags belongToMany Products (through ProductTag)
// Come back to check the through/as/fk parts 
Tag.belongsToMany(Product, {
  through: ProductTag, 
  as: 'tagged_products',
  foreignKey: 'product_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
