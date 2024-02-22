// function nesting

function one(){
    console.log('Hello World! - outer function');
    function two(){
        console.log('Hello world - inner function');
    }
    return two;
}
one();
const output = one();
output();// here output acts as refrence to the inner function two(); 

function three(){
    const count = 10;
    function four(){
        console.log('Value of count is ' + count);
    }
    return four;
}

const output1  = three();
output1()