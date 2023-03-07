interface IA {
    a: number;
}

interface IB {
    b: number;
}

interface IC {
    c: number;
}

//Intersection type
function X(obj: IA & IB & IC) {
    return obj.a + obj.b + obj.c;
}

//Generic type parameters - return type use intersection 
//Extends keyword is used to specify the type of the generic type parameter
function combine<ObjA extends object, ObjB extends object>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return { ...objA, ...objB };
}

const objA = { a: 1, c: 2 };
const objB = { b: 2, d: 3 };

const resultObj = combine(objA, objB);
console.log(resultObj); //{ a: 1, c: 2, b: 2, d: 3 }  