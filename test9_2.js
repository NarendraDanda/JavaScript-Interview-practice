function test(theObject){
    theObject.make = 'Toyota';
}

const car_details = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
};

console.log('car_details.make 1 ', car_details.make);
test(car_details);
console.log('car_details.make 2 ', car_details.make);
