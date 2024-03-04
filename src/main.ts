import { createProduct, calcStock, products } from "./products/product.service";

createProduct({
  title: 'Prod1',
  createdAt: new Date(),
  stock: 4
})

console.log(products);

let total = calcStock();

console.log(`Total stock ${total}`);


