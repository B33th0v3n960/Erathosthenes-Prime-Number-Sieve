let list = [];

showPrime(1000000);
console.log(list);
// list.forEach((num) => console.log(num));
console.log(list.length);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) {
    if (checkPrime(number)) list.push(number);
  }
}

function checkPrime(num) {
  for (let factor = 2; factor < num; factor++) {
    if (factor > num / 2) break;
    if (num % factor === 0) {
      return false;
    }
  }
  return true;
}
