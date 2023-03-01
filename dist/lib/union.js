"use strict";
function someFn(arg) {
    if (typeof arg === 'string') {
        return arg.toUpperCase();
    }
    else if (typeof arg === 'number') {
        return arg.toFixed();
    }
    else {
        return arg;
    }
}
someFn('Hello');
console.log(someFn(123));
