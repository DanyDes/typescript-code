import { Base } from "../base.model";
import { Category } from "../categories/category.model";


export type Sizes = 'S' | 'M' | 'L' | 'XL';
//an interface is like defining a type, completely similar but
// an interface is extendable, a type not
export interface Product extends Base {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}



