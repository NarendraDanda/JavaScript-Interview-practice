// Deep copy(copy by value) and Shallow copy(copy by refrence)



let x = 10;
console.log('Value of X is ' + x);
let y = x;// Deep copy
y = 20;
console.log('Value 0f y is' + y)

// in primitive types deep copy can be possible
// primitive types: Number, String, Boolean


let arr1 = [1,2 ,3, 4];
console.log(arr1);

arr2 = arr1;// shallow copy, here both refered to same memory location
arr2.push(5);
console.log(arr1);
console.log(arr2);
