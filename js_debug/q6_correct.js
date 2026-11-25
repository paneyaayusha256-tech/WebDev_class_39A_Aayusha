// 6.  
function countDown(n) {
  if (n <= 0) {
    console.log("done!");
    return;
  }
  console.log(n);
  return countDown(n - 1);
}
countDown(5);
