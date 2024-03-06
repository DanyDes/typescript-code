import { Base } from "../base.model";

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export interface User extends Base{
  username: string;
  role: ROLES; //you need to call the enum to asign one of the properties
}
