//Declaring Buttons
const whatButton = document.querySelector('#whatButton');
const whoButton = document.querySelector('#whoButton');
const whenButton = document.querySelector('#whenButton');
const whereButton = document.querySelector('#whereButton');
const howButton = document.querySelector('#howButton')
const whyButton = document.querySelector('#whyButton');

//Initializing Buttons
whatButton.onclick = whatFunc;
whoButton.onclick = whoFunc;
whereButton.onclick = whereFunc;
whenButton.onclick = whenFunc;
whyButton.onclick = whyFunc;
howButton.onclick = howFunc;


//Initializing Varaibles
let whatElement = document.getElementById('what');
let whenElement = document.getElementById('when');
let whereElement = document.getElementById('where');
let whoElement = document.getElementById('who');
let whyElement = document.getElementById('why');
let howElement = document.getElementById('how');


//Functions
function whatFunc() {
    whatElement.style.display = 'block';
    whoElement.style.display = 'none'; 
    whenElement.style.display = 'none'; 
    whereElement.style.display = 'none'; 
    whyElement.style.display = 'none'; 
    howElement.style.display = 'none'; 
}
function whoFunc() {
    whatElement.style.display = 'none';
    whoElement.style.display = 'block'; 
    whenElement.style.display = 'none'; 
    whereElement.style.display = 'none'; 
    whyElement.style.display = 'none'; 
    howElement.style.display = 'none';
}
function whereFunc() {
    whatElement.style.display = 'none';
    whoElement.style.display = 'none'; 
    whenElement.style.display = 'none'; 
    whereElement.style.display = 'block'; 
    whyElement.style.display = 'none'; 
    howElement.style.display = 'none';
}
function whenFunc() {
    whatElement.style.display = 'none';
    whoElement.style.display = 'none'; 
    whenElement.style.display = 'block'; 
    whereElement.style.display = 'none'; 
    whyElement.style.display = 'none'; 
    howElement.style.display = 'none';
}
function whyFunc() {
    whatElement.style.display = 'none';
    whoElement.style.display = 'none'; 
    whenElement.style.display = 'none'; 
    whereElement.style.display = 'none'; 
    whyElement.style.display = 'block'; 
    howElement.style.display = 'none';
}
function howFunc() {
    whatElement.style.display = 'none';
    whoElement.style.display = 'none'; 
    whenElement.style.display = 'none'; 
    whereElement.style.display = 'none'; 
    whyElement.style.display = 'none'; 
    howElement.style.display = 'block';
}