
console.log('Before promise starts');
const promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Welcome to uncommonGeeks')
        //reject('Welcome to uncommon Geeks')

    },1000);
})

console.log('After promise starts');
promise.then(data =>{
    console.log('Promise success ' + data);
}).catch(err => {
    console.log('Error is ' + err);
})

console.log('after promise ends');