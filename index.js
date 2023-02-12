function greet() {
    var name = prompt ('What is your name?');
    alert ('Hello, ' + name);
   
    var age = prompt ('How old are you?');
    console.log(parseInt(age));
   
    var bday = confirm ("Have you had a birthday this year? OK for yes. Cancel for No.");
   
    if (bday === true) {
        alert ("You were born in " + (new Date().getFullYear() - age))
    } else if (bday === false) {
        alert ("You were born in " + (new Date().getFullYear() - age - 1))
    };
}