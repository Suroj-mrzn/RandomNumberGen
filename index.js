const myButton  = document.getElementById('myButton');
const mylabel   = document.getElementById('mylabel');
const min = 1;
const max = 1000;
let randomNumber;

myButton.onclick = function() {
    randomNumber= Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomNumber;
}
