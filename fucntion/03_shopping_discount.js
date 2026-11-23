// Question 3:

const calculateDiscount = (amount) => {
    if (amount >= 5000) {
        return 20;
    } else if (amount >= 3000) {
        return 15;
    } else if (amount >= 1000) {
        return 10;
    } else {
        return 0;
    }
};

const calculateFinalPrice = (amount, discount) => {
    return amount - (amount * discount / 100);
};

const checkout = (customerName, amount, callback) => {
    const discount = calculateDiscount(amount);
    const finalPrice = callback(amount, discount);

    console.log(`Customer: ${customerName}`);
    console.log(`Original Price: Rs. ${amount}`);
    console.log(`Discount: ${discount}%`);
    console.log(`Final Price: Rs. ${finalPrice}`);
};

checkout("Nikesh", 6000, calculateFinalPrice);
