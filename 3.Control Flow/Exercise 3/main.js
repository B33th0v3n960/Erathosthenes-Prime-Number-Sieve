//fizzBuzz

//divisible by 3 => fizz
//divisible by 5 => Buzz
//divisible by 3 & 5 => fizzBuzzz
//not divisible by either => return input
//Not a number => return 'not a number'

let output = fizzBuzz(3);

function fizzBuzz(input) {
  let divisibleBy3 = input % 3 === 0;
  let divisibleBy5 = input % 5 === 0;
  let divisible = divisibleBy3 || divisibleBy5;
  let fizzBuzz = divisibleBy3 && divisibleBy5;
  if (fizzBuzz) return "fizzBuzz";
  else if (divisibleBy3) return "fizz";
  else if (divisibleBy5) return "buzz";
  else if (!divisible) return input;
  return "Not a Number";
}

console.log(output);
