// Q8 – Custom Array Prototype Method: myMap()
"use strict";

// Define a non-enumerable method on Array.prototype so it does not appear
// during ordinary for...in iteration over arrays.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const sourceArray = Object(this);
        const length = sourceArray.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            // Match built-in map(): skip empty slots in sparse arrays.
            if (index in sourceArray) {
                result[index] = callback.call(
                    thisArg,
                    sourceArray[index],
                    index,
                    sourceArray
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true,
    enumerable: false
});

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
const indexedValues = numbers.myMap((number, index) => `${index}: ${number}`);

console.log("Original:", numbers);
console.log("Doubled:", doubledNumbers); // [2, 4, 6]
console.log("Indexed values:", indexedValues);

// Note: Avoid modifying built-in prototypes in production code unless
// specifically required. This extension is for learning the prototype concept.
