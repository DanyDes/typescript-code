import { faker } from "@faker-js/faker";
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "./product.dto";
import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO):Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);

  return newProduct;
}

export const updateProduct = (id: string, changes: UpdateProductDTO): Product => {
  //imagine this happens in a database
  // but we will do it with js
  const index  = products.findIndex(item => item.id === id);
  const previousData = products[index];
  products[index] = {
    ...previousData,
    ...changes
  }

  return products[index];
}

export const findProducts = (dto: FindProductDTO):Product[] => {
  // add your code here
  return []
}


