// Question 9: 

const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 0.15;
    } else if (amount >= 500) {
        return amount * 0.10;
    } else if (amount >= 100) {
        return amount * 0.05;
    } else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    const bonus = calculateBonus(amount);
    const totalBalance = callback(amount, bonus);

    console.log(`Mobile Number: ${number}`);
    console.log(`Recharge Amount: Rs. ${amount}`);
    console.log(`Bonus Received: Rs. ${bonus}`);
    console.log(`Total Balance: Rs. ${totalBalance}`);
};

recharge("9800000000", 1000, calculateTotalBalance);
