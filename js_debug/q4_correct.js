// 4. 
// const calculateBill = (price, quantity, discount) => { 
//     let subtotal = price * quantity; 
//     let discountAmount = subtotal * (discount / 100); 
//     let finalAmount = subtotal - discountAmount; 
//     if (quantity <= 0) { 
//         console.log("Invalid quantity"); 
//         return; 
//     } 
//     if (discount < 0 || discount > 100) { 
//         console.log("Invalid discount"); 
//         return; 
//     } 
//     console.log("Subtotal: " + subtotal); 
//     console.log("Discount: " + discountAmount); 
//     console.log("Final Amount: " + finalAmount); 
//     return finalAmount; 
// } 
// let bill1 = calculateBill(500, 3, 10); 
// let bill2 = calculateBill(1000, 2, 20; 
// console.log("Total payable: " + bill1); 
// console.log("Total payable: " + bill2); 




const calculateBill = (price, quantity, discount) => {
  let subtotal = price * quantity;
  let discountAmount = subtotal * (discount / 100);
  let finalAmount = subtotal - discountAmount;
  if (quantity <= 0) {
    console.log("Invalid quantity");
    return;
  }
  if (discount < 0 || discount > 100) {
    console.log("Invalid discount");
    return;
  }
  console.log("Subtotal: " + subtotal);
  console.log("Discount: " + discountAmount);
  console.log("Final Amount: " + finalAmount);
  return finalAmount;
}
let bill1 = calculateBill(500, 3, 10);
let bill2 = calculateBill(1000, 2, 20);
console.log("Total payable: " + bill1);
console.log("Total payable: " + bill2);