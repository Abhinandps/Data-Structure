
// Math Algorithms

/*

1. Fibonacci Sequence
=====================
function Fibonacci(n){
    const fib = [0,1]
    for (let i=2; i<n; i++){
        fib[i] =  fib[i-1] + fib [i-2]
    }
    return fib
}

console.log(Fibonacci(5)) [ 0, 1, 1, 2, 3 ]


2. Factorial of a number
=========================
function Factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

console.log(Factorial(5)) 120

. Recursion
============

function Factorial(n) {
    if (n < 1) return 1
    return n * Factorial(n - 1);
}

console.log(Factorial(7))

3. Prime or not
================

function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log(isPrime(107))

4.PowerOfTwo

*/

 




