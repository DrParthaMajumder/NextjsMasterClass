/*
  Example 2: Access modifiers (public and private)
  Demonstrates:
  - Public properties: accessible from anywhere
  - Private properties: only accessible within class
  - Encapsulation principle in OOP
  - Data protection and controlled access
  - Public methods for private property access
  - Getter methods for controlled data exposure
  - Class design best practices
*/

class BankAccount {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Partha", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
