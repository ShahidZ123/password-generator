const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let password = "";
let passwordLength = 10;
let checkCount = 1;

handleSlider()
//set strength circle to grey

//set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna hai

}



function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow
    // indicator.style.boxShadow = "10px 20px 30px lightblue"
}

function getRandomInteger(min, max) {
     Math.floor(Math.random() * (max-min)) + min;
}


function generateRandomNumber() {
    return getRandomInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol() {
    const num = getRandomInteger(0,symbols.length);
    return symbols.charAt(num);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) >=8) {
        setIndicator("#0f0")
    } else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ){
        setIndicator("ff0");
    } else {
        setIndicator("#f00");
    }
}