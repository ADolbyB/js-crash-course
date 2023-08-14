// CLASSES

class Person {
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    setName(new_first, new_last) {
        this.first_name = new_first;
        this.last_name = new_last;
    }

    getName() {
        return (this.first_name + " " + this.last_name)
    }
}

let joel = new Person("Joel", "Brigida", 88);

console.log(joel.getName());
console.log(joel.age);
console.log(joel.last_name);