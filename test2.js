function varTest(){
    var x =1;
    {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

 varTest(); // var is global scope
function letTest(){
    let x =1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
letTest(); /**let having local scope, of that function level only */