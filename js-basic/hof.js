// var bird = {
//     x: 10,
//     y: 20,
//     color: "Blue",
//     eggs: ['one', 'two', 'three'],
//     fly: function() {
//         console.log("Bird is flyinf", this.x, this.y);
//     },
// };
// // for (let i = 0; i < bird.eggs.length; i++) {
// //     console.log(bird.eggs[i]);
// // }
// bird.eggs.forEach(function(value) {
//     console.log(value);
// });

// console.log(bird.fly());

//declaring object
// var apple = {
//     taste: "swett",
//     color: "red",
// }


//another way to declearing object
// function Fruit(taste, color) {
//     this.taste = taste;
//     this.color = color;

// };

// let mango = new Fruit("sweet", "yello");
// let orange = new Fruit("sour", "orange");


// console.log(mango);



//class keyord:(class declaration)

// class FruitClass {
//     constructor(taste, color) {
//         this.color = color;
//         this.taste = taste;
//     }
// }

//class expression

// let FruitCLASS = class {
//     constructor(taste, color) {
//         this.color = color;
//         this.taste = taste;
//     }
// }


// let kiwi = new FruitClass("janin na", "black")
// let babana = new FruitCLASS("Not everyone like it", "yellow")

let obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

let obj2 = Object.create(obj1);