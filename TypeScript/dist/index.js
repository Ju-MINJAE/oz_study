"use strict";
// 문자 string
const a = '';
const b = '';
const c = ``; // 템플릿 리터럴
let myName = 'MinJae';
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
// 숫자 number
let n = 100;
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotNumber = NaN;
// 불리언 boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log('Hello we are open');
}
if (!isCompleted) {
    console.log('job not complete');
}
let isAvailable = isOpen && !isCompleted;
// null
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login('MINJAE');
logout();
// any
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
