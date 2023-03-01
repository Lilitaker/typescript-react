/* ========= */
/* EXAMPLE 1 */
/* ========= */
function someFn(arg: number | string | boolean) {
  if (typeof arg === 'string') {
    return arg.toUpperCase();
  } else if (typeof arg === 'number') {
    return arg.toFixed();
  } else {
    return !arg;
  }
}

console.log(someFn('Hello')); //HELLO
console.log(someFn(123.5)); //124
console.log(someFn(true)); //false

/* ========= */
/* TYPE GUARDS */
/* ========= */

//Type predicate

interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

//instanceof
class Foo {
  foo: number;
  commonProp: string;

  constructor(foo: number, commonProp: string) {
    this.foo = foo;
    this.commonProp = commonProp;
  }
}

class Bar {
  bar: number;
  commonProp: string;

  constructor(bar: number, commonProp: string) {
    this.bar = bar;
    this.commonProp = commonProp;
  }
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    console.log(obj.foo);
  } else {
    console.log(obj.bar);
  }
}

//Example using type predicate and instanceof:
interface Sailboat {
  sailsCount: number;
  setSail(): boolean;
}

interface Car {
  wheelsCount: number;
  startEngine(): boolean;
}

function isBoat(vehicle: Sailboat | Car): vehicle is Sailboat {
  return (vehicle as Sailboat).sailsCount !== undefined;
}

function goSomewhere(vehicle: Sailboat | Car) {
  if (isBoat(vehicle)) {
    vehicle.setSail();
  } else {
    vehicle.startEngine();
  }
}
