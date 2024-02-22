/* hoisting with example */
/* variable redeclaration doesn't show error */

function test(){
    // var x;
    // var x;
    var x=40; 
    var x;
    var x=10;
    console.log('X is ' + x);
};

test();

