// 1. Template Literals + Expressions
// 1a
console.log(`${5} + ${7} = ${5 + 7}`); // "5 + 7 = 12"

// 1b multi-line (3 lines)
const multiLine = `hello
how are you
bye`;
console.log(multiLine);

// 1c
const firstName = "lasya";
const lastName = "ravva";
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
// 2a convert to arrow
const square = n => n * n;
console.log(square(4)); // 16

// 2b why logs undefined
const objArrow = {
    value: 50,
    test: () => console.log(this.value)
};
objArrow.test(); // undefined 

// 2c rewrite using normal function so printing works
const objFunc = {
    value: 50,
    test: function() {
        console.log(this.value);
    }
};
objFunc.test(); // 50

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
// 3a shallow copy
const productCopy = { ...product };
console.log(productCopy);

// 3b merge two objects
const a = { x: 1 };
const b = { y: 2 };
const mergedAB = { ...a, ...b };
console.log(mergedAB);

// 3c maxValue using rest
function maxValue(...nums) {
    return nums.length ? Math.max(...nums) : undefined;
}
console.log(maxValue(3, 7, 2, 9)); // 9

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
// 4a
const [a1, b1] = arr;
console.log(a1, b1); // 10 20

const laptop = { brand: "Dell", ram: "8GB" };
// 4b
const { brand } = laptop;
console.log(brand); // "Dell"

// 4c optional chaining
const info = {};
console.log(info?.profile?.name); // undefined (no error)

// 5. Scoping (let/var/const)
// 5a var example
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// 5b let example - accessing outside block will throw; show result safely
try {
    for (let j = 0; j < 3; j++) {}
    console.log(j); // ReferenceError in real code
} catch (e) {
    console.log("ReferenceError: j is not defined");
}

// 5c why const
// const prevents reassignment of the binding (useful for values that shouldn't change)

// 6. Ternary Operator – Practice
// 6a
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed); // "Fast"

// 6b adult/minor
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor"); // "Adult"

// 6c nested ternary for sign
const num = -5;
const sign = num > 0 ? "Positive" : (num === 0 ? "Zero" : "Negative");
console.log(sign); // "Negative"

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
// 7a add 4,5 using spread
const numsExtended = [...nums, 4, 5];
console.log(numsExtended);

// 7b combine arrays
const arrA = ["x", "y"];
const arrB = ["z"];
const combinedArr = [...arrA, ...arrB];
console.log(combinedArr);

// 7c rest function printNames
function printNames(...names) {
    return names;
}
console.log(printNames("A", "B", "C")); // ["A","B","C"]

// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
// 8a destructure
const { id, status } = user;
console.log(id, status); // 101 "active"

// 8b convert to shorthand
const idVal = 101;
const role = "admin";
const userVerbose = {
    id: idVal,
    role: role
};
const userShorthand = { idVal, role }; // property names are idVal and role
console.log(userVerbose, userShorthand);

// 8c create object using shorthand and method shorthand
const name = "lasya";
const score = 90;
const player = {
    name,
    score,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};
console.log(player.greet()); // "Hi, I'm Sam"

// 9. Template Literals (More Practice)
// 9a today's date
console.log(`${new Date().toDateString()}`);

// 9b Hello NAME, your score is SCORE/100
const NAME = "lasya";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
// 10a one-line arrow add
const add = (x, y) => x + y;
console.log(add(3, 4)); // 7

// 10b isAdult
const isAdult = age => age >= 18;
console.log(isAdult(17)); // false

// 10c double
const double = n => n * 2;
console.log(double(5)); // 10

// 11. Spread Operator (Arrays & Objects)
// 11a clone array using spread
const original = [1, 2, 3];
const clone = [...original];
console.log(clone);

// 11b add element 100 to beginning
const with100 = [100, ...original];
console.log(with100);

// 11c merge two objects and override a property
const o1 = { a: 1, price: 10 };
const o2 = { b: 2, price: 15 };
const mergedOverride = { ...o1, ...o2, price: 20 }; // final price = 20
console.log(mergedOverride);

// 12. Optional Chaining (More Practice)
const user2 = {
    name: "lasya",
    address: {
        city: "Bangalore"
    }
};
// 12a
console.log(user2?.address?.city); // "Bangalore"

// 12b job.title safely (undefined)
console.log(user2?.job?.title); // undefined

// 12c example where optional chaining prevents runtime error
const maybe = {};
// Without optional chaining, maybe.profile.name would throw. With it:
console.log(maybe?.profile?.name); // undefined