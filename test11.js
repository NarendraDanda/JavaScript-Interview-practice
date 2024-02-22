// self invoking functions

(function testA(a){
    return (function testB(b) {
        console.log(a);
    })(1);
    
})//(0);


//importatnt*****
// function test(){
//     for(let i = 0; i<3; i++){ //for(var i =0; i<3 ; i++)
//         setTimeout(function log(){
//             console.log(i);
//         },1000);
//     }
// }
// test();

function test(){
    for(var i = 0; i<3; i++){
        function test2(j){
            setTimeout(function log(){
                console.log(j);
            },1000);
        }
       test2(i)
    }
}
test();