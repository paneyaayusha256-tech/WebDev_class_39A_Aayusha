// Question 7: 

const validateWithdrawal = (amount, balance) => {
    return amount > 0 && amount % 500 === 0 && amount + 25 <= balance;
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        const fee = 25;
        const remainingBalance = balance - amount - fee;

        console.log("Withdrawal Successful!");
        console.log(`Transaction Fee: Rs. ${fee}`);
        console.log(`Remaining Balance: Rs. ${remainingBalance}`);
    } else {
        console.log("Withdrawal Failed!");
        console.log("Check your balance and make sure the amount is a positive multiple of 500.");
        console.log(`Balance Unchanged: Rs. ${balance}`);
    }
};

console.log("Account Balance: Rs. 10000");
console.log("Withdrawal Amount: Rs. 3000");
withdrawMoney(3000, 10000, validateWithdrawal);
