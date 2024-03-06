let userName: string = "Bruce Wayne";
let age: number = 34;
let likesSport: boolean = true;
let numbers_array: number[] = [1,2,3,4,5,6,7,8,9];
let mixed_array: (number | string | boolean | Object )[] = ['this is a string', 343, false];
let datetime: Date = new Date(); //here we can write it with uppercase the first letter


//it can store any type of values
let box: any = 23123123;
//in case you want to treat the variable with the string type you can
box = (box as string).charAt(4);
// or
box = (<string>box).valueOf


//union types
let objectId: string | number;
objectId = 2234234;
objectId = `asbskjoikbosijlks`;

function proccessId(id: string|number) {
  if(typeof id === 'string'){
    console.log(id.toLowerCase());
  } else {
    console.log(id*2);
  }
}
proccessId("md5Id");
proccessId(789);

//Alias type
//you can simplify the union types with, the preference pascal case
type UserIdTypes = string | number | boolean
let userId: UserIdTypes;
function proccessIds(userId: UserIdTypes){}

//literal type
type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSizes: Sizes;
shirtSizes = 'M';


//null and undefined
// ? the symbol indicates the optional chaining
function sayHello(name: string | null){
  let hello = name?.toLowerCase || 'this is a string in case is returned null while lower casing'
  console.log(hello)
}


//optional parameters
const someAction = (param1: string, param2?: string) => {
  return {
    param1, param2
  }
}

//function without return
const someFunction = ():void => {
  //here some code
}


//function with object parameter
const login = (data:{user: string, password: string, opt?: number}) => {
  console.log(data.user, data.password, data.opt);
}
login({user: 'dnhuayhus@gmail.com', password: 'safepassword'})


//define the type as an object
type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: string;
}

let productsArray: Product[] = [];
const addProduct = (product:Product) => {
  productsArray.push(product);
}
const addProductDestructured = ({title, createdAt, stock, size}:Product) => {
  //here you can access straight forward any property
}

