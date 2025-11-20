const username = "Guys";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "lasya";
const age = 21;
const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

console.log(student.name, student.age);
student.greet();

const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Lasya", "Ravva"));