/**
 * GENERICS IN TYPESCRIPT
 * -----------------------
 * Generics allow you to create reusable code that works with any data type
 * while still keeping TypeScript's strong type safety.
 *
 * Benefits:
 * - Reusable functions/classes
 * - No need to use `any`
 * - Type-safe and flexible
 *
 * Below are 3 simple examples of generics.
 */

// T is just a placeholder for a type, You can think of it like a variable, but for types.
// Examples of types: number, string, boolean, object, array
// T can become any of these.
// The function accepts an argument named value which has type T.
// The function returns a value of type T.

function identity1<T>(value: T): T {
  return value;
}

console.log(identity1<number>(10)); // Output: 10
console.log(identity1<string>("Hi")); // Output: "Hi"
