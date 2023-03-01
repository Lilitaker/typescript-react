/* =========== */
/* EXAMPLE ONE */
/* =========== */

//Describing constructors using interfaces
interface Animal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

class Cat implements Animal {
  name: string;
  group: string | undefined;
  constructor(name: string, group?: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
}

class Dog implements Animal {
  name: string;
  group: string | undefined;
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
  bark() {}
}

//Generic type argument <T> to avoid errors when we want to add methods to the cat and dog instances
//Describes the static side (constructor)
//It returns an instance that we can dynamically set, that's why it has a generic type argument. It will describe the type of the instance returned
interface AnimalConstructor<T> {
  new (name: string): T;
}

//If we want the type of the instance matches the animal interface, we set a generic type constraint. 
function initializeAnimal<T extends Animal>(
  Animal: AnimalConstructor<T>,
  name: string
) {
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
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirst(numbers); // type of firstNumber is number

const strings = ['foo', 'bar', 'baz'];
const firstString = getFirst(strings); // type of firstString is string

console.log(firstNumber); //1
console.log(firstString); //foo
