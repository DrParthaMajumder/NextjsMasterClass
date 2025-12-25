// never: a type that should never happen

function fail(message: string): never {
  throw new Error(message); // function never returns
}

function infiniteLoop(): never {
  while (true) {}
}

// Example with exhaustive checks:
type myShape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: myShape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.size * shape.size;
    default:
      // shape is never here if all cases are handled
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
