/*
  Example 2: Generic function that prints all items in an array
  Demonstrates:
  - Generic array type: T[] (array of type T)
  - Generic function with array parameter
  - forEach method with generic types
  - Type-safe array iteration
  - Void return type (no return value)
  - Reusable array processing functions
*/

function printAll<T>(items: T[]): void {
  items.forEach((item) => console.log(item));
}

printAll<number>([1, 2, 3]); // 1, 2, 3
printAll<string>(["a", "b", "c"]); // a, b, c
