//console.log is determenstic function, always returns 'undefined'
// console.log is pure function
let output = console.log('Hello World');
console.log('Output is ' + output);

//Question2 : is it pure function
function areaOfRectangle(length,breadth){
    console.log("Area is ", length*breadth); // side effect
    return length*breadth;
}
areaOfRectangle(2,3);
// ans: it is not pure function as console.log making it undeterminstic

const words = ['spray','destruction'];
const result = words.filter(word => word.length>6);
console.log(result);
// words.filter is pure function as it determinstic and gives same output always

// why pure functions are essential?
// 1. Determinstic, 2. Memorisation