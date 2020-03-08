function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.lof(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'cheap';
  if (productPrice > 20) {
    priceCategory = 'fair';
  }
  //   return `${string[0]}${productName}${string[1]}${priceCategory}${strings[2]}`;
  return { name: productName, price: productPrice };
}

const prodName = 'Javascript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);
