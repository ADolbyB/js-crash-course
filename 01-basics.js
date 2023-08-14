/**
 * FALSY: zero, null, undefined, false, NaN, empty string
 * TRUTHY: any except FALSY values
 *      -- any non-zero number
 *      -- any non-empty string
 *      -- true = truthy
 *      -- objects, arrays, classes, functions, etc are all TRUTHY
 *  
 * OPERATORS:
 *      + addition
 *      - subtraction
 *      * multiplication
 *      / division
 *      ** power
 *      % modulus: the remainder from the division operation
 */

/* declaring variables: don't specify types */

/* constants: cannot be changed */
const my_const = "my string";

/* normal variables: the OLD way to declare (still valid) */
var my_var = 123;
my_var = 456; // will change it just fine

let new_var = 900;

console.log('my_var');

let bool = true;
console.log(bool);

/* variable name: must start with underscore or a letter */
/* cannot start with numbers */
/* can only contain numbers, letters, underscores */

let obj = {
    'myName': "Joel Brigida",   // 'key':"value"
    'age': 88,
    'address': "123 Any Street",
    'properties': {
        'is_student': true,
        'graduated': false,
    }
};  // object definition

let arr = [     // Note that this is a terrible data structure!! For Demo Only
    123,
    true,
    false,
    null,
    "hello",
    {
        "test": "123"
    },
    [
        "hi",
        {
            arr1: []
        }
    ]
];  // array definition ( a list of values )

/* access elements: use zero based index */

console.log(arr[0]);        // 123
console.log(arr[1]);        // true
console.log(arr[6][0]);     // 'hi'

let myName = 'Joel';
let is_student = true;
let age = 88;

if (myName == 'Joel') {
    console.log('myName is Joel')
}

if (is_student) {
    console.log('is a student')
}