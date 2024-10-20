const profile = 'Jonas Smith';
const age = 35;
const occupation = "Designer";

console.log(`${profile}  ${age} ${occupation}`)

// Precedence

const sumOfNUms = 8 + 8 / 2

const sarah = 12;
const adult = 22;
console.log(sarah >= adult ? "sarah is an adult"  : "sarah is a minor" );

// function declaration
mtt(555, 999)

function mtt(a, b){
    return console.log(a + b)
};

mtt(5,6)

mtt("Pretty", " Sid")

// function expression
const expression = function (x , y){
    let age = x - y
    return console.log(age)

}

expression(20, 10)

// arrow function

let global = 10

const arrow = ( s , h)=>{
    let local = 22
    return local
}

console.log(global)
