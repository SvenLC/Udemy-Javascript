function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amout) {
    console.log(multiplier);
    return amout * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmout = createTaxCalculator(0.19);
const incomeTaxAmout = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmout(100));
console.log(calculateVatAmout(200));
