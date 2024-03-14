// function add(x){
//     console.log(arguments);
//     return function(y){

//     }
// }
// add(10)(20)
// add(10,20)


function add(x){
    if(arguments.length > 1){
        let sum = 0;
        for(let i =0; i<arguments.length; i++){
            sum = sum+ arguments[i];
        }
        return sum;
    }else{
        return function(y){
            return x+y;
        }
    }
}

console.log('With closure ' + add(10)(20));
console.log('Without closure ' + add(10,20));