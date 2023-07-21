let num = 38;

var addDigits = function (num) {
  while (num > 9) {
    let sum = 0;
    while (num != 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};

console.log(addDigits(num));
