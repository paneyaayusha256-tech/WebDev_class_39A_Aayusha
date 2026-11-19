let purchaseAmount = 100;

if (purchaseAmount >= 100) {
    console.log("Final Price = " + (purchaseAmount - purchaseAmount * 0.20));
}
else if (purchaseAmount >= 50) {
    console.log("Final Price = " + (purchaseAmount - purchaseAmount * 0.10));
}
else {
    console.log("Final Price = " + purchaseAmount);
}