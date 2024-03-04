import { Product } from "./product.model";

//export means that other can use it in any part of the project
export const products: Product[] = [];
export const createProduct = (data: Product) => {
  products.push(data);
}
export const calcStock = (): number => {
  let total = 0;
  products.forEach(p => {
    total+=p.stock
  })
  return total;
}

//you can rename the function pressing f2 in VScode and automatically update in all called files
