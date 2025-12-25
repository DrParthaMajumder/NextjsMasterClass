// TOPIC 4: Typed arrays
// number[] means an array that only stores numbers
let scores: number[] = [10, 20, 30]; //Shorthand Syntax
let scores1: Array<number> = [10, 20, 30]; //Generic Syntax
let scores2: [number, number, number] = [10, 20, 30]; //Tuple Syntax

console.log("scores:", scores);
console.log(typeof scores);
console.log("scores1:", scores1);
console.log(typeof scores1);
