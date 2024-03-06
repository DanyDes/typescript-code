//he never type represents the type of values that never occur, helps to stop the process
//when your function is and endpoint where is not returning a specific type
const fail = (message: string): never => {
  throw new Error("message");
}

//the other use case is when you have defined a specific set of options but none of them is reached
type Shape = "circle" | "square" | "triangle";
const getArea = (shape: Shape) => {
  switch (shape) {
      case "circle":
          // Assume we calculate area for circle
          return Math.PI * Math.pow(2, 2);
      case "square":
          // Assume we calculate area for square
          return 4 * 4;
  }
  fail("This line shouldn't be reached");
}
