let x = (function() {

    let a = 20;
    let b = 30;
    return a + b;
})();
console.log(x);

let s;

if (true) {
    s = 10
}
console.log(s);


///

(function(l, p, r, s) {
    l("3^4 =  ", p(3, 4));
    l("4^3 = ", p(4, 3));
    l("root(2) = ", r(2));
    l("sin(10)", s(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);