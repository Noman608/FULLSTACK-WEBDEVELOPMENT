let str = ""; //3levels from null   
let num = 233; //3levels from null
let bool = true; //3levels from null
let arr = [246, 436, 6, 346]; //3levels from null
let obj = { //2levels from null
    a: 10,
    b: 'asdasd',
}
let fun = function() { console.log("hyuergf"); } //3levels from null

console.log("========Proto Chain======");
console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(fun.__proto__.__proto__ == obj.__proto__);

console.log("========Prototype======");
console.log(obj.__proto__ == Object.prototype);
console.log(str.__proto__ == String.prototype);
console.log(bool.__proto__ == Boolean.prototype);



console.log(str.charAt);