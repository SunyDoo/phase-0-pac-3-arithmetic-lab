number = 10;

function add5() {
    return (number + 5);
}

console.log(add5());

function subtract5() {
    return (number - 5);
}

console.log(subtract5());

function multiply() {
    return (number * 5);
}

console.log(multiply());

function divide() {
    return (number / 5);
}

console.log(divide());

function add(a,b) {
    return (a + b);
}

console.log(add(10, 5));

function subtract(a,b) {
    return (a - b);
}

console.log(subtract(10, 5));

function multiply(a,b) {
    return (a * b);
}

console.log(multiply(10, 5));

function divide(a,b) {
    return (a / b);
}

console.log(divide(10, 5));


function increment(n) {
    return (n += 1);
}

console.log(increment(5));

function decrement(n) {
    return (n -= 1);
}

console.log(decrement(5));


function makeInt(n) {
    
    return parseInt(n, 10);
}
console.log(makeInt("2"));

console.log(makeInt("10.2"));

console.log(makeInt("nonsense"));


function preserveDecimal(n) {
    
    return parseFloat(n);
}
console.log(preserveDecimal("2.22"));

console.log(preserveDecimal("nonsense"));