// function currying
// currying is a process in which function with multiple arguments 
// can be transform into sequence of nesting functions, it returns 
// a new function that expects the next argument inline.

function add(x){
    return function(y){
        return x + y
    }
}

// const output = add(10)
// console.log(output(20));

const output = add(10)(20);
console.log(output);

//important ****

const f = x => x + x;
const g = y => y*y;
console.log(f(g(10)));

