/*
  Nested loops with 2D array
  Print all students and their scores
*/

const test_scores: number[][] = [
  [80, 90, 75], // student 1
  [60, 70, 85], // student 2
  [95, 88, 92], // student 3
];

for (let student = 0; student < test_scores.length; student++) {
  console.log(`Student ${student + 1}:`);

  for (let test = 0; test < test_scores[student].length; test++) {
    console.log(`  Test ${test + 1}: ${test_scores[student][test]}`);
  }

  console.log("--------------");
}
