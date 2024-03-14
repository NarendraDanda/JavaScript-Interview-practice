var rate = 1;
function getRate(){
   // var rate = 5;
    if(rate === undefined){
        var rate = 6;
        return rate;
    }else{
        return 10;
    }
}

console.log("Rate is ", getRate());

// here local scope and global scope conflict takes place, 
//local scope get priority