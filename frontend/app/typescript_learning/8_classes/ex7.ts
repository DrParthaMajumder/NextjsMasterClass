// Example 7: Using static properties and static methods
class MathUtil {
  static PI = 3.14;

  static square(n: number) {
    return n * n;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(6));
