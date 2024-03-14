
//explain the scope of temporal dead zone(tz)

{
    // tz starts 
   // func() // -- output is :cannot access 'func' before intialization as for const arrow function not hoisted
    const func = () => console.log(x);
    let x = 3;// tz ends 
    func();
}

// why var hoisting present in Javascript?
// how hoisting works in javascript if it interpreted