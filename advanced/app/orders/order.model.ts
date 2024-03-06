import { Base } from "../base.model";
import { Product } from "../products/product.model";
import { User } from "../users/user.model";

export interface Order extends Base{
  products: Product[];
  user: User;
}
