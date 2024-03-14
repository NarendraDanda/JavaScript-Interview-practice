var greeting = (function() {
var d =new Date(); 
var time= d.getHours(); 
var greeting= greetUser(); 

function greetUser() { 
    if (time < 12) { 
        var msg ='Good morning ';
    }
    else { 
        var msg = 'Welcome ' ; 
    }
return msg + getName(); 
}
function getName() { 
var name = 'Molly'; 
return name; 
}
}  ); 
alert(greeting); 