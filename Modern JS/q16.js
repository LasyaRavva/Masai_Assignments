const isEven = n => n % 2 === 0;
console.log(isEven(4));

const marks = 58; 
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
greet("lasya");
