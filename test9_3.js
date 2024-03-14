var num1 = 20,
    num2 = 5,
    nme = 'Chamakh';
function getScore(){
    var num1 = 2;
        num2 = 3;
    function add(){
        return nme + ' scored ' + (num1 + num2);
    }
    return add();
}

//console.log(getScore());

function addSquares(a,b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}

a = addSquares(2,3);
b = addSquares(3,4);
c = addSquares(4,5);
//console.log(a,b,c);

function A(x){
    function B(y){
        function C(z){
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
//A(1);