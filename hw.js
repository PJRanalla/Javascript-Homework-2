//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function displayFavFoods(person) {
    console.log("Pizza: ");
    person.pizza.forEach(pizza => console.log(pizza));

    console.log("Tacos: " + person.tacos);

    console.log("Burgers: " + person.burgers);

    console.log("Ice Cream: ");
    person.ice_cream.forEach(flavor => console.log(flavor));

    console.log("Shakes: ");
    person.shakes.forEach(shakeFavs => {
        for (const [place, flavor] of Object.entries(shakeFavs)) {
            console.log(`  ${place}: ${flavor}`);
        }
    });
}

console.log(displayFavFoods(person3));


// function displayFood(person) {
//     for(let i = 0; i < Object.keys(person).length; i++){
//         if(Array.isArray(Object.values(person)[i])){
//             console.log(Object.keys(person)[i] + ' : ' + Object.values(person)[i]);
//         } else if(typeof Object.values(person)[i] === 'string') {
//             console.log(Object.keys(person)[i] + ' : ' + Object.values(person)[i]);
//         } else if (person.shakes && Array.isArray(person.shakes)) {
//             person.shakes.forEach(shakeFavs => {
//                 for (const [place, flavor] of Object.entries(shakeFavs)) {
//                     console.log(`${place}: ${flavor}`);
//                 }
//             });
//         }
//         }
//     }

// console.log(displayFood(person3));


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called and takes in one parameter.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;


    this.printInfo = () => {
        return `This person's name is ${name} and they are ${age} years old.`
    };

    this.increaseAge = (num = 1) => {
        return age += num
    }
}

let barnabas = new Person('Barnabas', 35)
let timothy = new Person('Timothy', 25)

console.log(barnabas.printInfo())
console.log(timothy.printInfo())

console.log(timothy.increaseAge())
console.log(barnabas.increaseAge(3))




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word".
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = (string) => {
    return new Promise((resolve, reject) => {
        if (typeof string !== 'string') {
            reject (new Error('Input needs to be a string'));
        } else {
            if (string.length > 10) {
                resolve('Big word');
            } else {
                resolve('Small Number');
            }
        }
    })
}

checkString('Floccinaucinihilipilification')
  .then(result => console.log(result))
  .catch(error => console.error(error));

checkString('Hello')
  .then(result => console.log(result))
  .catch(error => console.error(error));


// Codewars Javascript

// Question 1

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(list) {
    return list.filter(x => typeof x === 'number' && x >= 0);
}

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// Question 2

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(s) {
    var newString = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            newString += ' ' + s[i];
        } else {
            newString += s[i];
        }
    }
    return newString;
}
