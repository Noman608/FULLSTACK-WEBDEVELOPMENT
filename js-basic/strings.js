let obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

let obj2 = Object.create(obj1);

obj2.a = "Abdullah";
obj2.b = "Al";
obj2.c = "Noman";

let obj3 = Object.create(obj2);