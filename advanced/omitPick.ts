//utility type
// you can omit certain properties of a interface
type example1 = Omit<Product, 'createdAt'>;
//useful to define DTO


//utility type
//to pick certain properties of an interface
type example2 = Pick<Product, 'size'>
