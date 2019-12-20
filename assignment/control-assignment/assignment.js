const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const arrayNumber = [1, 5, 6, 8, 4, 1, 3, 5, 2, 9];

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert(`${randomNumber} and ${randomNumber2} are greater than 7`);
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert(`${randomNumber} or ${randomNumber2} are not greater than 0.2`)
}

for (let i = 0; i < arrayNumber.length; i++) {
  console.log(arrayNumber[i]);
}

for (let number of arrayNumber) {
  console.log(number);
}

for (let i = arrayNumber.length - 1; i > 0; i--) {
  console.log(arrayNumber[i]);
}
