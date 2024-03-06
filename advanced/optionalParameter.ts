// nullish-coalescing
//in js ?? can avoid the next extrange behavior
//0 === false
//'' === false
//false === false

export const createProduct = (id: string | number, stock?: number, isNew?: boolean) => {
  return {
    id,
    stock: stock ?? 0,
    isNew: isNew ?? false
  }
}


let prod1 = createProduct(1, 10, true);
let prod2 = createProduct(2);
console.log(prod1);
console.log(prod2);
