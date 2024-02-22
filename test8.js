
//welcome() -- gives refrence error as function not hoisted here
const welcome = function(){
    console.log('Welcome to js');
}
welcome();


// self invokong function 
(function (){
    console.log('Welcome to Hello world!');
})()

// passing function as argument

function add(num1, num2){
    return num1 + num2;
}

function test(f,a,b){
    const sum = f(a,b)
    return sum;
}

const output = test(add, 10,20);
console.log('output is ' + output);