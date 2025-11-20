const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { address: { city, pin } } = user;
console.log(user.name, city, pin);



