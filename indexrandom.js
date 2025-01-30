//RANDOM NUMBER GENERATOR

 

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const max = 6;
const min = 1;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
randomNum1 = Math.floor(Math.random() * max) + min;
randomNum2 = Math.floor(Math.random() * max) + min;
randomNum3 = Math.floor(Math.random() * max) + min;
 label1.textContent = randomNum1;
 label2.textContent = randomNum2;
 label3.textContent = randomNum3;
}


//FUNCTIONS

function add(a, b, c, d,e) {
    return a+b+c+d+e;
}

 let answer = add(1, 2, 3, 4, 5);
console.log(answer);

function hbd(username, age) {
    console.log('')

}





