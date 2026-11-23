// Question 6:

const calculateDelivery = (distance) => {
    if (distance <= 0) {
        return 0;
    } else if (distance <= 2) {
        return 30;
    }

    return 30 + (Math.ceil(distance - 2) * 15);
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
    const deliveryCharge = callback(distance, orderAmount);

    console.log(`Customer: ${customer}`);
    console.log(`Order Amount: Rs. ${orderAmount}`);
    console.log(`Distance: ${distance} km`);
    console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};

const getFinalDeliveryCharge = (distance, orderAmount) => {
    if (checkFreeDelivery(orderAmount)) {
        return 0;
    }
    return calculateDelivery(distance);
};

processOrder("Shyam", 5, 800, getFinalDeliveryCharge);
