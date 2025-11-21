const Input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const Count = Input.reduce((device, item) => {
  device[item] = (device[item] || 0) + 1;
  return device;
}, {});
console.log(Count); 
const sortedCategories = Object.entries(Count)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key);
console.log(sortedCategories);