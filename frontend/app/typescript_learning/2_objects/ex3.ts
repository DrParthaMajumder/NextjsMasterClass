/*
  Example 3: Creating object structure using 'type'
  Demonstrates:
  - Type alias definition: type TypeName = { ... }
  - Reusable object templates
  - Property type requirements
  - Type safety for object creation
  - Type vs interface differences (type can be extended with unions, intersections)
  - Better for simple object shapes or when you need unions/intersections
*/

type Product = {
  id: number;
  title: string;
  price: number;
};

const item: Product = {
  id: 101,
  title: "Laptop",
  price: 55000,
};

console.log(item);
// Output: { id: 101, title: 'Laptop', price: 55000 }
