// Question 1:

const calculateBill = (units) => {
    let energyCharge;

    if (units <= 20) {
        energyCharge = units * 5;
    } else if (units <= 50) {
        energyCharge = (20 * 5) + ((units - 20) * 7);
    } else {
        energyCharge = (20 * 5) + (30 * 7) + ((units - 50) * 10);
    }

    return energyCharge + 50;
};

const displayBill = (name, units, callback) => {
    const totalBill = callback(units);

    console.log(`Customer: ${name}`);
    console.log(`Units Consumed: ${units}`);
    console.log(`Total Electricity Bill: Rs. ${totalBill}`);
};

displayBill("Ram", 65, calculateBill);
