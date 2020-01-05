// const numbers = [1, 2, 3];
// console.log(numbers);

// // moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelector('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobies = ['Cooking', 'Sports'];
// const personnalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1]
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personnalData[1]);

// const hobbies = ['Sports', 'Coocking'];

// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResulsts = testResults.slice(2);
// const storedResulsts = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// const manuel = personnData.find((person, index, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel);

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, index, prices) => {
//   const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);
