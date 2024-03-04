//this in case you need to define string type
enum hexaColors {
    green = "#00693e",
    blue = "#113392",
    red = "#b30f15",
    yellow = "#ebdd60",
}

enum Colors {
  green,
  blue,
  red,
  yellow
}
let colorVehicle: Colors = Colors.green;

//in case you need to define numbers
enum Directions {
  Up = 1,
  Down,
  Left,
  Right,
}

let dirName: string = Directions[1]; // "UP"
let dirValue: Directions = Directions.Up; // 1
