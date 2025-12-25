// Example 3: Basic tuple for a 2D point
// A tuple is a fixed-size, fixed-order array with fixed types for each position

/*
  Point2D represents a 2D coordinate in space.
  The first element is the x-coordinate and the second is the y-coordinate.
*/
type Point2D = [number, number];

const pointA: Point2D = [10, 20];

// Destructuring a tuple
const [xx, yy] = pointA;

console.log("Point A:", pointA);
console.log("x:", xx);
console.log("y:", yy);
