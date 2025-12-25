/*
  any:
  Use when you don't know what the value will be.
  TypeScript will NOT check anything.
*/
let data: any = 10;
data = "hello"; // ✓ allowed
console.log(typeof data);
data = true; // ✓ allowed
console.log(typeof data);

let mydata: any = 100;
mydata = 53;
console.log("mydata:", mydata);
mydata = "hi";
console.log("mydata:", mydata);
