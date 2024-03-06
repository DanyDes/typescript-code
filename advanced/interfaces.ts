export type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// }

//an interface is like defining a type, completely similar but
// an interface is extendable, a type not

/* here is the key difference between an interface and a class
 * interfaces can be implemented immediately properties and methods, classes need to be instanciated
 */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Product 1',
  createdAt: new Date(),
  stock: 7
})

