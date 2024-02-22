// console.log(square)
// console.log(square(5))
// function square(n) {
//     return n*n;
// }

console.log(square)
console.log(square(5))
const square = function(n) {
    return n*n;
}
// output:- RefrenceError: cannot access 'square' before intialization.
// it is anonymous function assigned to const square, here const square not intialized,
// const square hoisted, 
// anonymous function not hoisted here, const hoisted