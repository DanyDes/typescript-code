import { faker } from '@faker-js/faker'
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";


//to create items
for( let i=0; i<50; i++){
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.rgb(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.number.int({min: 10, max: 100}),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    categoryId: faker.string.uuid(),
    tags: faker.helpers.arrayElements(['a', 'b', 'c', 'd', 'e', 'f'], 5)
  })
}

console.log(products)


// to update the values of a product
const firstProduct = products[0];
updateProduct(firstProduct.id,{
  title: 'This title was edited',
  stock: 89
})


// to find an item
let result = findProducts({
  stock: 10,
  color: '',
  tags: ['d']
})
