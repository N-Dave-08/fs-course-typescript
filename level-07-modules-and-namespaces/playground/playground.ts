import Calculator from "./calculator";
import { add } from "./math";
import { upper } from "./string";

console.log(add(2, 2));

console.log(upper("Hello"));

const calc = new Calculator();

console.log(calc.add(2, 2));
