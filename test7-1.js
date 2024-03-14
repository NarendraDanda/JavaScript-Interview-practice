

// function question1(){
//     const arr1 = [1,2,3,4];
//     const arr2 = arr1;// shallow copy
//     //const arr2 = [...arr1]; // deep copy by using spread operator
//     arr2.push(10);
//     console.log('Array 2 is ' + arr2);
//     console.log('Array 1 is '+ arr1);
// }
// question1();

function question2(){
    const user1 = {
        name:'Narendra',
        location:{
            city: 'Visakhapatnam',
            state: 'ANdhraPradesh'
        }
    }

    const user2 = {...user1};
    //const user2 = Object.assign({},user1); // deep copy alternate method
    user2.name = 'Narendra Kumar'
    user2.location.city = 'Hyderabad'//
    console.log(user2);
    console.log(user1);
}

question2();

