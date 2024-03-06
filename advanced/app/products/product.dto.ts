import { Product } from "./product.model"
import { products } from "./product.service"
// a DTO lets you skip some properties in order to make easy edit and create an element
//type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

//with omit you can fill all fields expect what you say
export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

//with pick you can select few fields or properties
type example1 = Pick<Product, 'id'>

// when you use partial you can send just fiew fields, use case to update an item
// puts all properties optional
export interface UpdateProductDTO extends Partial<CreateProductDTO> {
  //you can modify only the things that are present in the other DTO, good control behavior
}

//with Required you can make required all fields while updating an item
// puts all fields as obligatory
type example2 = Required<Product>

export interface FindProductDTO extends Readonly<Partial<Omit<CreateProductDTO, 'tags'>>> {
  // because when finding a product we don't sent all value properties, only some of them
  // we dont modify the received paremeters, so we protect it against changes <readonly>


  //we assign specific behavior after omiting it
  //readonly at the beginning will not let you reasing to [] for example
  //readonlyArray will not let you mutate the array
  readonly tags: ReadonlyArray<string>;
}
