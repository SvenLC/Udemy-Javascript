const button = document.querySelector('button');

// button.onclick = function() {};

const buttonClickHandler = event => {
  //   event.target.disable = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const bondFn = buttonClickHandler.bind(this);

// button.addEventListener('click', bondFn);

// buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

// setTimeout(() => {
//   button.removeEventListener('click', bondFn);
// }, 2000);

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', event => {
  console.log('CLIKED DIV');
  console.log(event);
});

button.addEventListener('mouseenter', event => {
  event.stopPropagation();

  console.log('CLICKED BUTTON');
  console.log(event);
});
