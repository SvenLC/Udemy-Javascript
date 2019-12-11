const task3Element = document.getElementById('task-3');

function alertSomething() {
  alert('Something !');
}

function alertName(name) {
  alert(name);
}

function concatString(string1, string2, string3) {
  return string1 + string2 + string3;
}

alertSomething();
alertName('toto');
alert(concatString('toto', 'tata', 'titi'));

task3Element.addEventListener('click', alertSomething);
