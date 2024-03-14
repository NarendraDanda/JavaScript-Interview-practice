

console.log('Before promise starts');
const promise1 = Promise.resolve('Welcome to uncommon geeks');


console.log('After promise starts');

promise1.then(data => {
    console.log('Promise success, ' + data)
}).catch(err => {
    console.log('promise failure '+ err)
})

console.log('after promise ends');

// promise1.then: give value after success of promise.

//promise executing after all the as it is asynchronous task,
// it moved to web api section or heap memory, where they have to 
// until processing is done.

