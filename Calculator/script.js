let One = document.querySelector(".one");
let Two = document.querySelector(".two");
let Three = document.querySelector(".three");
let Four = document.querySelector(".four");
let Five = document.querySelector(".five");
let Six = document.querySelector(".six");
let Seven = document.querySelector(".seven");
let Eight = document.querySelector(".eight");
let Nine = document.querySelector(".nine");
let Zero = document.querySelector(".zero");
let Plus = document.querySelector(".plus");
let Minus = document.querySelector(".minus");
let Equal = document.querySelector(".equal");
let Point = document.querySelector(".point");
let Divide = document.querySelector(".divide");
let Multiply = document.querySelector(".multiply");
const clearbtn = document.querySelector(".clear");
const All_cancel = document.querySelector(".allcancel");

const valueInput = document.querySelector(".valueinput");

// Use insert() function to insert the number in textview.  

One.addEventListener('click', function() {
    // appendToInput('1');
    valueInput.value += "1";
});

Two.addEventListener('click', function() {
    // appendToInput('2');
    valueInput.value += "2";
    // console.log(valueInput.value);
});

Three.addEventListener('click', function() {
    // appendToInput('3');
    valueInput.value += "3";
});

Four.addEventListener('click', function() {
    // appendToInput('4');
    valueInput.value += 4;
});

Five.addEventListener('click', function() {
    // appendToInput('5');
    valueInput.value += "5";
});

Six.addEventListener('click', function() {
    // appendToInput('6');
    valueInput.value += "6";
});

Seven.addEventListener('click', function() {
    // appendToInput('7');
    valueInput.value += "7";
});

Eight.addEventListener('click', function() {
    // appendToInput('8');
    valueInput.value += "8";
});

Nine.addEventListener('click', function() {
    // appendToInput('9');
    valueInput.value += "9";
});

Zero.addEventListener('click', function() {
    // appendToInput('0');
    valueInput.value += "0";

});
// ... Repeat for the other number buttons

Plus.addEventListener('click', function() {
    valueInput.value += "+";
});

Minus.addEventListener('click', function() {
    // appendToInput('-');
    valueInput.value += "-";
});

Multiply.addEventListener('click', function() {
    // appendToInput('*');
    valueInput.value += "*";
});

Divide.addEventListener('click', function() {
    // appendToInput('/');
    valueInput.value += "/";
});

Point.addEventListener('click', function() {
    // appendToInput('.');
    valueInput.value += ".";
});

Equal.addEventListener('click', function() {
    // calculateResult();
    valueInput.value = eval(valueInput.value);
});

clearbtn.addEventListener('click', function() {
    // clearLastInput();
    valueInput.value = valueInput.value.toString().slice(0,-1);
});

All_cancel.addEventListener('click', function() {
    valueInput.value = " ";
});