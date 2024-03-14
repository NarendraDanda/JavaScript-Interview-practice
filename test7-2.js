

//deep copy only possible by using methods
//for object inside object

function question2(){
    const user1 = {
        name:'Narendra',
        location:{
            city: 'Visakhapatnam',
            state: 'AndhraPradesh'
        }
    }

    const user2 = JSON.parse(JSON.stringify(user1)); // deep copy alternate method
    user2.name = 'Narendra Kumar'
    user2.location.city = 'Hyderabad'
    console.log(user2);
    console.log(user1);
}
question2();
//JSON.stringify : converts object to string
//JSON.parse: converts string to object