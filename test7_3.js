
// JSON.Parse(JSON.stringfy) should not use in following conditions:
//1. when using new Date() function
//2. when using an function or variable called undefined in object
//3.

function question1(){
    const testObject1 = {
        sampleDate: new Date(),
    };

    // following method gives string instead of object during deep copying
    const testObject2 = JSON.parse(JSON.stringify(testObject1));
    console.log(testObject1);
    console.log(testObject2);
}

question1()

function question2(){
    const testObject1 = {
        sampleFunction : console.log,
        sampleUndefined: undefined
    };

    const testObject2 = JSON.parse(JSON.stringify(testObject1));
    console.log(testObject1);
    console.log(testObject2);   
}

//question2();

function question3(){
    const testObject1 = {
        sampleFunction : question2,
        sampleUndefined: -Infinity,
        sampleNaN: NaN,
    };

    const testObject2 = JSON.parse(JSON.stringify(testObject1));
    console.log(testObject1);
    console.log(testObject2);   
}

//uestion3();

// Questions 4) how to deep copy JSON-unsafe values 
//1.Copying all the values one after another
//2.Recursive copying all the values one after another
//3.using libraries like loadash

