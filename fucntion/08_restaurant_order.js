// question 8:
const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

const calculateServiceCharge = (total) => {
    return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    const price = getFoodPrice(foodName);

    if (price === 0 || quantity <= 0) {
        return null;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = callback(
        foodName,
        quantity,
        (price, quantity) => price * quantity
    );

    if (foodAmount === null) {
        console.log("Invalid food item or quantity!");
        return;
    }

    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    console.log("Customer: " + customerName);
    console.log("Food: " + foodName);
    console.log("Quantity: " + quantity);
    console.log("Food Amount: Rs. " + foodAmount);
    console.log("Service Charge: Rs. " + serviceCharge);
    console.log("Final Amount: Rs. " + finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
