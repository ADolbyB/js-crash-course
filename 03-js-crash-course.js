/**
 * Joel Brigida
 * This is a JavaScript Crash Course from the Video Tutorial: 
 * https://www.youtube.com/watch?v=hdI2bqOjy3c
 * This was my 1st JavaScript Tutorial to help in project research.
*/

/* Variable Types: String, Number, Boolean, null, undefined */

const the_name = 'John';                                // String
const age = 30;                                         // Number
//const rating = 4.5;                                   // Also a Number
//const isCool = true;                                  // Boolean
//const x = null;                                       // null type "shows as 'object' in console (wrong)"
//const y = undefined;                                  // undefined type (explicit)
//let z;                                                // Also undefined type (implicit)

//console.log(typeof x);

/* String Concatenation (old style pre-2015): */
console.log('My name is ' + the_name + ' and I am ' + age);

/* Template strings/literals (newer since ES6) */
console.log(`My name is ${the_name} and I am ${age}`);
// also valid
const hello = `My name is ${the_name} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
console.log(s.length);                                  // length = 11
console.log(s.substring(0, 5));                         // Prints "Hello"
console.log(s.substring(0, 5).toUpperCase());           // Prints "HELLO"
console.log(s.split(''));                               // Split "Hello World" into an array w/ 11 indices

const t = 'Technology, Computers, IT, Code';
console.log(t.split(', '));                             // Split int array according to this delimiter (4 indices)

/* Arrays */

/* Old method: constructor */
const numbers = new Array(5,3,4,7,8);
console.log(numbers);

/* better method */
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[1]);                                 // index #1 = pairs
fruits[3] = 'grapes';                                   // this is valid even with const for array
console.log(fruits);
fruits.push('mangos');                                  // push new value to the last index
console.log(fruits);
fruits.pop();                                           // pop value off the last index
console.log(fruits);

/* check to verify that a variable is an array */
console.log(Array.isArray(fruits));                     // True: fruits is an array
console.log(fruits.indexOf('oranges'));                 // oranges is in index #1

/* Object literals */
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);                                    // prints all object values
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);                         // prints "movies"
console.log(person.address.city);                       // prints "Boston"

person.email = 'john@gmail.com';                        // add value for "email" to object
console.log(person);

// extracting / deconstructing data from objects (new since ES6):
const { firstName, lastName } = person;                 // extract values from person object above
console.log(firstName);                                 // displays "John"
console.log(lastName);                                  // displays "Doe"

const { address: { city } } = person;                   // extracts the city from the objects address field
console.log(city);                                      // displays "Boston"

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    }
];

console.log(todos);                                     // Prints all object values
console.log(todos[1].text);                             // Prints "Meeting With Boss"

/*
 * JSON: Data format used within Full Stack Dev APIs when sending 
 * or recieving data from a server
 * 
 * https://www.freeformatter.com/json-formatter.html
 */ 

const todoJSON = JSON.stringify(todos);                 // convert "todos" to JSON
console.log(todoJSON);                                  // display JSON data

/* For Loops */

for (let i = 0; i < 10; i++) {
    console.log(`For Loop Iteration: ${i}`);
}

let j = 0;
while (j < 10) {
    console.log(`While Loop #: ${j}`);                  // prints each loop iteration
    j++;
}

for (let k = 0; k < todos.length; k++) {                // For Loop prints each todo text
    console.log(todos[k].text);                         // note you need the array index
}

for (let anyname of todos) {                            // better method declares a new variable "anyname" which will iterate the loop
    console.log(anyname);                               // print out each "anyname" once in the loop
}

for (let anyname of todos) {
    console.log(anyname.isCompleted);
}

/*
 * High Order Array Methods for iteration: forEach, map, filter
 * forEach: loops through array and performs a function
 * map: creates a new array from an array
 * filter: creates a new array based on a condition
 */

todos.forEach(function(anothername) {                   // Iterates and prints out array index contents in order
    console.log(anothername.text);                      // note that forEach() takes a function() with a newly declared variable (anothername) as an argument
});

const todoText = todos.map(function(todo) {             // creates new array of "todo" variables
    return todo.text;                                   // only return text elements of "todo" variables
});                                                     // returns array of 3 strings

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {     // filter each "todos" object
    return todo.isCompleted === true;                   // only return isCompleted elements === true
});                                                     // returns array of 2 objects

console.log(todoCompleted);

const todoCompleted2 = todos.filter(function(todo2) {   // filter each "todos" object
    return todo2.isCompleted === true;                  // only return isCompleted elements === true
}).map(function(todo3) {
    return todo3.text;                                  // returns array of 2 strings
});

console.log(todoCompleted2);

const x = 10;

const color = (x > 10 ? 'red' : 'blue');
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('ERROR with color!');
        break;
}

function addNums(num1, num2 = 8) {                      // declare function and variables all at once
    return num1 + num2;
}

console.log(addNums(4, 9));

/**
 * Arrow Functions: Introduced in ES6 (ES2015)
 * Equivalent function as above in Arrow format 
 */

const addNums2 = (num1a = 2, num2a = 3) => {
    return num1a + num2a;
}

console.log(addNums2(5, 5));

/* Object Priented Programming: JavaScript (No its not Java) */

/* Constructor function */
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

/* Instantiate Object */
const thisperson1 = new Person('John', 'Doe', '4-3-1983');
const thisperson2 = new Person('Mary', 'Smith', '3-6-1984');

console.log(thisperson1);
console.log(thisperson2);

console.log(thisperson2.dob);
console.log(thisperson2.dob.getFullYear())
console.log(thisperson1.dob.getFullYear());

// Left Off @ Time = 46:30