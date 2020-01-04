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

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResulsts = testResults.slice(2);
const storedResulsts = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
