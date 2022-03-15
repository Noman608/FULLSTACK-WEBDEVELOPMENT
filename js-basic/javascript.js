function area(a, b) {
    if (typeof b === 'undefined') {
        return Math.PI * a * a;
    }
    return a * b;
}

console.log(area(12));