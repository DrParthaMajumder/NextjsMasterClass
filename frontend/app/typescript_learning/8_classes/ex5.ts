// Example 5: Class implementing an interface
interface Drivable {
  start_test(): void;
  stop_test(): void;
}

class Bikes implements Drivable {
  start_test() {
    console.log("Bike started");
  }

  stop_test() {
    console.log("Bike stopped");
  }
}

const b_test = new Bikes();
b_test.start_test();
