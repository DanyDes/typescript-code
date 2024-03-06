

//preferably are defined with uppercase
//used to define a option set, like grouping const variables in PHP
//like the universe of available options
export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES; //you need to call the enum to asign one of the properties
}

const firstUser: User  = {
  username: 'dnhuayhu@badoo.con',
  role: ROLES.ADMIN
}
