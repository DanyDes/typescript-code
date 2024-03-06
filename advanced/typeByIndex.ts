interface Pen {
  id: number;
  color: string;
}

const findPen = (id: Pen['id']) => {
  //here you can work with the id and if you change de id to type string your code will not suffer changes
}
