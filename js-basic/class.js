class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isauduit() {
        return this.age >= 18;
    }
}



let p = new Person("Noman", 22);
let p1 = new Person("Noman", 7);

console.log(p.__proto__ == Person.prototype);
console.log(p.__proto__.__proto__ == Object.prototype);


class student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}

let s2 = new student("Noman", 26, 13);
let s3 = new student("Abdullah", 20, 12);
let s1 = new student()

console.log(s1.__proto__ = student.prototype);
console.log(s1.__proto__.__proto__ = Person.prototype);
console.log(s1.__proto__.__proto__.__proto__ = Object.prototype);