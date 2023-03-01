"use strict";
/* ========= */
/* EXAMPLE 1 */
/* ========= */
function someFn(arg) {
    if (typeof arg === 'string') {
        return arg.toUpperCase();
    }
    else if (typeof arg === 'number') {
        return arg.toFixed();
    }
    else {
        return !arg;
    }
}
console.log(someFn('Hello')); //HELLO
console.log(someFn(123.5)); //124
console.log(someFn(true)); //false
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
//instanceof
class Foo {
    constructor(foo, commonProp) {
        this.foo = foo;
        this.commonProp = commonProp;
    }
}
class Bar {
    constructor(bar, commonProp) {
        this.bar = bar;
        this.commonProp = commonProp;
    }
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        console.log(obj.foo);
    }
    else {
        console.log(obj.bar);
    }
}
function isBoat(vehicle) {
    return vehicle.sailsCount !== undefined;
}
function goSomewhere(vehicle) {
    if (isBoat(vehicle)) {
        vehicle.setSail();
    }
    else {
        vehicle.startEngine();
    }
}
