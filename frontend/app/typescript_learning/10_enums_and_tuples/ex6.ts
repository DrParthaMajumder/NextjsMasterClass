// Example 6: Array of tuples

/*
  test_Point is a tuple representing a 2D coordinate.
  The first value is the x-coordinate and the second is the y-coordinate.
*/
type test_Point = [number, number];

/*
  path is an array of test_Point tuples describing a series of points
  that could represent a path or trajectory in 2D space.
*/
const path: test_Point[] = [
  [0, 0],
  [10, 5],
  [20, 15],
];

for (const [px, py] of path) {
  console.log(`Point at x=${px}, y=${py}`);
}
