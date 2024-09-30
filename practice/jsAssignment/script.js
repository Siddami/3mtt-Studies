// ASSIGNMENT 1 (IF ELSE)

let person1 = 'Tunde', person2 = 'Shade', person3 = 'Mary', person4 = 'Laura', person5 = 'Jibril';

let person1Age = 10, person2Age = 22, person3Age = 28, person4Age = 18, person5Age = 16;

let person1Status, person2Status , person3Status, person4Status, person5Status;


function checkStatus(age, person, status){
    if(age < 18){
        status = true;
        return `The fact that ${person} is a student is ${status} and in Junior Class`
    }
    else if(age === 18){
        status =true;
        return `The fact that ${person} is a student is ${status} and in Senior Class`;
    }
    else if(age > 18 && age < 25){
        status = false;
        return `The fact that ${person} is a student is ${status} and in Advanced Class`
    }
    else{
        return `${person} is too old`
    }
}

console.log(checkStatus(person1Age, person1, person1Status))
console.log(checkStatus(person2Age, person2Age, person2Status))
console.log(checkStatus(person3Age, person3Age, person3Status))
console.log(checkStatus(person4Age, person4Age, person4Status))
console.log(checkStatus(person5Age, person5Age, person5Status))

// ASSIGNMENT 2 (SWITCH)

let weather = 'Chilly';

switch(weather){
    case("Raining"): console.log("cuddle up, netflix and chill")
    break;
    case("Sunny"): console.log("Go to the beach")
    break;
    case("Chilly"): console.log("Wear a sweater and go out")
    break;
    default: console.log("Guess you don't do weather")
}


