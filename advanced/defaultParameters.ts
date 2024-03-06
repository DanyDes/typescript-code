
export const createProduct = (id: string | number, stock: number = 0, isNew: boolean = true) => {
  return {
    id,
    stock,
    isNew
  }
}


let prod1 = createProduct(1, 10, true);
let prod2 = createProduct(2);
console.log(prod1);
console.log(prod2);
