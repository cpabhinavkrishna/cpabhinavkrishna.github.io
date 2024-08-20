"use strict";
let input = document.getElementById("input");
let button = document.getElementById("input");
let audio = new Audio("sound/button.mp3");
let copied = new Audio("sound/copied.mp3");
let error = new Audio("sound/error.mp3");

const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "12357890";
const symbol = "!@#$%&*_-";
const length=20;
const allChars = lowerCase+upperCase+number+symbol;
function createPassword(){
let password="";
    // password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password += upperCase[Math.floor(Math.random()*upperCase.length)];
    // password += number[Math.floor(Math.random()*number.length)];
    // password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length<length) {
            password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    console.log(password);
    input.value=password
    
} 

function copyText(){
    if(input.value==="")error.play();
    else{
    copied.play();
    navigator.clipboard.writeText(input.value);
    input.value="";
    }
    
}