// // ASSIGNMENT 1 (IF ELSE)

// let person1 = 'Tunde', person2 = 'Shade', person3 = 'Mary', person4 = 'Laura', person5 = 'Jibril';

// let person1Age = 10, person2Age = 22, person3Age = 28, person4Age = 18, person5Age = 16;

// let person1Status, person2Status , person3Status, person4Status, person5Status;


// function checkStatus(age, person, status){
//     if(age < 18){
//         status = true;
//         return `The fact that ${person} is a student is ${status} and in Junior Class`
//     }
//     else if(age === 18){
//         status =true;
//         return `The fact that ${person} is a student is ${status} and in Senior Class`;
//     }
//     else if(age > 18 && age < 25){
//         status = true;
//         return `The fact that ${person} is a student is ${status} and in Advanced Class`
//     }
//     else{
//         return `${person} is too old`
//     }
// }

// console.log(checkStatus(person1Age, person1, person1Status))
// console.log(checkStatus(person2Age, person2Age, person2Status))
// console.log(checkStatus(person3Age, person3Age, person3Status))
// console.log(checkStatus(person4Age, person4Age, person4Status))
// console.log(checkStatus(person5Age, person5Age, person5Status))

// // ASSIGNMENT 2 (SWITCH)

// let weather = 'Chilly';

// switch(weather){
//     case("Raining"): console.log("cuddle up, netflix and chill")
//     break;
//     case("Sunny"): console.log("Go to the beach")
//     break;
//     case("Chilly"): console.log("Wear a sweater and go out")
//     break;
//     default: console.log("Guess you don't do weather")
// }


// const arr = [
//     'Apple',
//     'Orange',
//     'Cherry'
// ]

// console.log(arr.length)


// console.log(arr.at(0))

// console.log(arr.pop())


// arr.push("Papaya")

// console.log(arr)

// arr.shift()

// console.log(arr)


// arr.unshift("Grape")

// console.log(arr)

// arr[0] = "Kiwi"

// console.log(arr)

// console.log(delete arr[0])

// console.log(arr)


// const arr1 = [1, 'age', true, 'honest'];
// const arr2 = [false, 'man', 'growth', 3];

// const together = arr2.concat(arr1);


// console.log(together)



// const newArr = new Array(arr1, arr2);

// console.log(newArr)

// const flatArr = newArr.flat()

// console.log(flatArr)

data = [1, 2, 3, 4, 5]

const flatData = data.flatMap((x)=>{
        return [x, x * 3]
})

console.log(flatData)

data.splice(2, 0, 'kiwi', 'pawpaw')

console.log(data)


const modifiedArr = data.splice(2,1)
console.log(modifiedArr)


console.log(data)











