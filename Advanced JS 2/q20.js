function createCounter() {
    let count = 0;

    return {
        increment() {
            count += 1;
            console.log(`Current count: ${count}`);
            return count;
        },
        decrement() {
            count -= 1;
            console.log(`Current count: ${count}`);
            return count;
        },
    };
}

/*
How closures are used:
- The variable `count` exists in the lexical scope of createCounter.
- Returned methods (increment, decrement, display) form closures that capture `count`.
- External code cannot access `count` directly; it can only interact via the methods.

Multiple counters:
- Each call to createCounter creates a new lexical environment with its own `count`.
- Example below demonstrates independent counters.
*/

// Demo for createCounter
const counterA = createCounter();
counterA.increment(); // Current count: 1
counterA.increment(); // Current count: 2

const counterB = createCounter();
counterB.increment(); // Current count: 1 (independent from counterA)
counterA.decrement(); // Current count: 1


// -------- Question 2: createBankAccount --------
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    const transactionHistory = []; 

    function record(type, amount, success) {
        const entry = {
            type,
            amount,
            success,
            date: new Date().toISOString(),
            balanceAfter: success ? balance : balance
        };
        transactionHistory.push(entry);
    }

    return {
        deposit(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                console.log('Deposit amount must be a positive number');
                record('deposit', amount, false);
                return;
            }
            balance += amount;
            console.log(`Deposited: ${amount}`);
            record('deposit', amount, true);
        },
        withdraw(amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                console.log('Withdrawal amount must be a positive number');
                record('withdraw', amount, false);
                return;
            }
            if (amount > balance) {
                console.log('Insufficient balance');
                record('withdraw', amount, false);
                return;
            }
            balance -= amount;
            console.log(`Withdrawn: ${amount}`);
            record('withdraw', amount, true);
        },
        getBalance() {
            console.log(`Balance: ${balance}`);
            return balance;
        },
        getTransactionHistory() {
            return transactionHistory.slice();
        }
    };
}

/*
How closure ensures privacy:
- `balance` and `transactionHistory` are variables inside createBankAccount's scope.
- Only the returned methods can access/modify them; external code cannot read balance directly.
- Attempting to read account.balance yields undefined (no direct property).

Transaction history:
- Because transactionHistory is closed over by the returned methods, it persists and records actions.
- getTransactionHistory exposes a copy so external code can't mutate the internal array directly.
*/

// Demo for createBankAccount
const account = createBankAccount();
account.deposit(500);        // Deposited: 500
account.withdraw(200);       // Withdrawn: 200
account.withdraw(400);       // Insufficient balance
console.log('account.balance:', account.balance); // undefined (no direct access)
account.getBalance();        // Balance: 300
console.log('Transactions:', account.getTransactionHistory());
// Example of multiple independent accounts
const a1 = createBankAccount(100);
const a2 = createBankAccount(1000);
a1.withdraw(50); // affects only a1
a2.deposit(500); // affects only a2
a1.getBalance(); // Balance: 50
a2.getBalance(); // Balance: 1500