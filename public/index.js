document.getElementById("MyElement").classList.add('MyClass');

function onNavOne() {
  document.getElementById("NavOne").classList.add('w3-active');
  document.getElementById("NavTwo").classList.remove('w3-active');
  document.getElementById("NavThree").classList.remove('w3-active');
}

function onNavTwo() {
  document.getElementById("NavOne").classList.remove('w3-active');
  document.getElementById("NavTwo").classList.add('w3-active');
  document.getElementById("NavThree").classList.remove('w3-active');
}

function onNavThree() {
  document.getElementById("NavOne").classList.remove('w3-active');
  document.getElementById("NavTwo").classList.remove('w3-active');
  document.getElementById("NavThree").classList.add('w3-active');
}