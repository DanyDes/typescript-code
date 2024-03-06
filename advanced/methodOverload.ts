
// we need to overload a method
// if you receive a string the output has to be a string array
// if you receive a string array the output has to be a string

//here you define the overload
export function parseString(arg: string): string[];
export function parseString(arg: string[]): string;

//then implement the overload as a method
export function parseString(arg:unknown): unknown {
  if(Array.isArray(arg)){
    return arg.join('');
  } else if(typeof arg === 'string'){
    return arg.split('')
  }
}

//some takeaways
// when defining the overload, define the :unknown or :any at the end, not at the beginning
// define an overload only for required parameters, if you have some optionals probably you don't need the overload, define well.
// evaluate if both methods are returning the same type of value, it could only need a union type, not an overload.
