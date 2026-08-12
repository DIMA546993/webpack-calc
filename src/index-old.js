// const print = require("./test.js");
// const {print, setAlert, pi} = require('./test.js');
import {print, pi, setAlert} from "./test.js";
import './style.css';
import Image from './random.jpg';

function addElement() {
    document.body.innerHTML += `
    <header>
        <h1>Hello world</h1>
        <img src="${Image}">
    </header>
    `;
}

addElement();

const sum = 1 + 3;
console.log(sum);

console.log("HELLO");

print('test data');

// setAlert(pi);