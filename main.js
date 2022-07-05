let list = [];

for (let i = 1; i <= 50000; i++) {
  list.push(i);
}

console.log(list);
let primeNum = primeSieve(list);

primeNum.forEach((num) => checkPrime(num));
console.log(primeNum.length);

console.log(primeNum);

function primeSieve(array) {
  let newArray = [];
  let firstPrime = 2;

  for (num of array) {
    if (num === 1) continue;
    if (num === 2) newArray.push(num);
    if (num % firstPrime === 0) continue;
    newArray.push(num);
  }

  let cache = newArray;
  let tempMemory = cache;
  newArray = [];

  for (let i = 0; i < cache.length; i++) {
    for (num of tempMemory) {
      if (num === tempMemory[i]) {
        newArray.push(num);
        continue;
      }

      if (tempMemory[i] / 2 > tempMemory[tempMemory.length - 1])
        return tempMemory;
      if (num % tempMemory[i] === 0) continue;

      newArray.push(num);
    }
    tempMemory = newArray;
    newArray = [];
  }
  return tempMemory;
}

function checkPrime(num) {
  const number = num;
  let isPrime = true;

  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  } else {
    console.log("The number is not a natural number.");
  }
}
