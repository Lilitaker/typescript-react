"use strict";
/* =========== */
/* EXAMPLE ONE */
/* =========== */
class Cat {
    constructor(name, group) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
//If we want the type of the instance matches the animal interface, we set a generic type constraint. 
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
//Cat instance -> Not Animal instance
const cat = initializeAnimal(Cat, 'Felix');
//Dog instance -> Not Animal instance
const dog = initializeAnimal(Dog, 'Ava');
dog.bark(); //It doesn't have an error because it's a Dog instance method
console.log(cat, dog); //Cat { name: 'Felix', group: 'mammals' } Dog { name: 'Ava', group: 'mammals' }
/* ============= */
/* EXAMPLE TWO */
/* ============= */
function getFirst(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // type of firstNumber is number
const strings = ['foo', 'bar', 'baz'];
const firstString = getFirst(strings); // type of firstString is string
console.log(firstNumber); //1
console.log(firstString); //foo
