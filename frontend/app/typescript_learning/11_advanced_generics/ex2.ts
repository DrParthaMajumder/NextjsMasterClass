// ex2.ts – Generic interface with default type parameter

interface ApiResponse<T = string> {
  data: T;
  success: boolean;
}

// Using default type (string)
const res1: ApiResponse = {
  data: "OK",
  success: true,
};

// Specifying T as number
const res2: ApiResponse<number> = {
  data: 200,
  success: true,
};

console.log(res1);
console.log(res2);
