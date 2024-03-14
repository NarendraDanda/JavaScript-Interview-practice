
//promise chaining


const promise1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Welcome to uncommonGeeks')
        //reject('Welcome to uncommon Geeks')

    },1000);
})

const promise2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('Welcome to uncommonGeeks')
        //reject('Welcome to uncommon Geeks')

    },0);
})


promise1.then(data1 =>{
    console.log('Promise1 success ' + data1);
    promise2.then(data2 =>{
        console.log('Promise2 success ' + data2);
    }).catch(err => {
        console.log('promise 1 Error is ' + err);
    })

}).catch(err => {
    console.log('promise2 Error is ' + err);
})

