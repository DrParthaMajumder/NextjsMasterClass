/*
  Example 4: Creating object structure using 'interface'
  Demonstrates:
  - Interface definition: interface InterfaceName { ... }
  - Reusable object contracts
  - Property type requirements
  - Interface vs type differences (interfaces can be extended, implemented)
  - Better for object shapes that might be extended or implemented by classes
  - Declaration merging capability
*/

interface test_employee {
  id: number;
  name: string;
  active: boolean;
}

const test_employee: test_employee = {
  id: 1,
  name: "John",
  active: true,
};

console.log(test_employee);
// Output: { id: 1, name: 'John', active: true }
