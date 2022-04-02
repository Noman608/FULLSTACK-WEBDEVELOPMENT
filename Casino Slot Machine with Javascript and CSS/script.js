let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let inpSpeed = document.getElementById('inpSpeed');

let values = ["😀", "😇", "🥱", "🤗", "🤩", "😯", "😡"];

// function getRandomValue() {
//   return values[Math.floor(Math.random() * 7)];
// }
// setInterval(() => {
//   value1.innerText = getRandomValue();
//   value2.innerText = getRandomValue();
//   value3.innerText = getRandomValue();
// }, 100);

// inpSpeed.onchange = function (ev) {
 
//   document.documentElement.style.setProperty('--speed', ev.target.value)
// };



function getRandomvalue() {
    return values [Math.floor(Math.random() * 7)]
setInterval(()=>{
                        
    value1.innerText = getRandomValue()
    value2.innerText = getRandomValue()
    value3.innerText = getRandomvalue()
}, 100)
inpSpeed.onchange = function (ev) {
    // document. documentElement = this is ":root" of css
    document.documentElement.style.setProperty('--speed', ev.target.value)