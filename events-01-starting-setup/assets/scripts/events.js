const buttons = document.querySelectorAll('button');

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

buttons.forEach(btn => btn.addEventListener('mouseenter', buttonClickHandler));

// setTimeout(() => {
//   button.removeEventListener('click', bondFn);
// }, 2000);

window.addEventListener('scroll', event => {
  console.log(event);
});
