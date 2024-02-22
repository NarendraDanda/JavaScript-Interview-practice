
// lexical function example

function ini() {
    var name = 'Uncommon Geeks';
    function dispalyName(){
        console.log(name);
    }
    dispalyName();
};
ini();

//clousre example

function myFunction() {
    var name = 'Uncommon Geeks';
    function dispalyName(){
        console.log(name);
    }
   return dispalyName;
}
var myfunc = myFunction();
myfunc();

function makeAdder(x=5){
    return function(y){
        return x+y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));
console.log(add10(2));
