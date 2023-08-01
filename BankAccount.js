class BankException extends Error {
  constructor(message) {
    super(message);
    this.name = "BankException";
  }
}

class BankAccount {
  constructor(id, balance) {
    this._id = id;
    this._balance = balance;
  }

  // Getter for account ID
  get id() {
    return this._id;
  }

  // Setter for account ID
  set id(newId) {
    this._id = newId;
  }

  // Getter for account balance
  get balance() {
    return this._balance;
  }

  // Setter for account balance
  set balance(newBalance) {
    if (newBalance < 0) {
      throw new BankException("Balance cannot be less than 0.");
    }
    this._balance = newBalance;
  }

  // Method to deposit funds into the account
  deposit(amount) {
    if (amount <= 0) {
      throw new BankException("Deposit amount must be greater than 0.");
    }
    this._balance += amount;
  }

  // Method to withdraw funds from the account
  withdraw(amount) {
    if (amount <= 0) {
      throw new BankException("Withdraw amount must be greater than 0.");
    }
    if (amount > this._balance) {
      throw new BankException("Insufficient balance.");
    }
    this._balance -= amount;
  }
}

// Example usage:
const account = new BankAccount("123456", 1000);

console.log("Account ID:", account.id); // Output: 123456
console.log("Account Balance:", account.balance); // Output: 1000

account.deposit(500);
console.log("After deposit:", account.balance); // Output: 1500

account.withdraw(300);
console.log("After withdrawal:", account.balance); // Output: 1200

try {
  account.balance = -100; // This will throw an exception
} catch (e) {
  console.error(e.message); // Output: Balance cannot be less than 0.
}
