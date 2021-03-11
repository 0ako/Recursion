// https://medium.com/@daniel.oliver.king/getting-started-with-recursion-f89f57c5b60e
// Any recursive function need to have two parts:
// 1. A base case, in which the function can return the result immediately
// 2. A recursive case, in which the function must call itself to break the problem down to a simpler level

// A recursive factorial function:
function factorial(n) {
    if (n == 0 || n == 1) return 1; // base case
    return n * factorial (n-1); // recursive case
}
console.log("factorial of: " + factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120 // products: 5, 20, 60, 120, 120

// How to structure recursive call:
// 1. Break the problem down into a problem that is one step simpler
// 2. Believe that my function will work to solve the simpler problem
// 3. Since I know I can solve the simpler problem, how would I solve the more complex problem? 

// Function to return reversed copy of a string
let string = "";
function reverse(string) {
    if (string.length < 2) return string
    return reverse(string.slice(1)) + string[0];
}
console.log("reverse: " + reverse("hello"));

function sumTo (n) {
    if(n < 2) return 1 // base case
    return n + sumTo (n-1); // recursive case
}
console.log("sumTo: " + sumTo(3)) // 3 + 2 + 1 = 6 // sums: 3, 5, 6