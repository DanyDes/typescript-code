import { ROLES, User } from "./enum"
let user: User = {
  role: ROLES.CUSTOMER,
  username: 'dany_des'
}
const checkRoles = (...roles: string[]): boolean => {
  if(roles.includes(user.role)){
    return true;
  }
  return false;
}

let rta = checkRoles(ROLES.CUSTOMER, ROLES.SELLER);
console.log(rta);
