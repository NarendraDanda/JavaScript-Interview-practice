let count = 0;
function add(){
    count =  count + 1;
    console.log(count);
}
add();
add();
add();

function test(){
    let count = 0;
    function add(){
        count = count + 1;
        return count;
    }
    return add;
}
const output = test();

// console.log(output());
// console.log(output());
// console.log(output());