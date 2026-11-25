function countDown(n) {
  console.log(n);
  return countDown(n - 1);
}
countDown(5);


// has RangeError:  Maximum call stack size exceeded