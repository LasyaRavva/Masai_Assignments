import { checkPrime } from './math.js';

console.log('Testing checkPrime function:\n');

console.log(`checkPrime(2): ${checkPrime(2)}`);
console.log(`checkPrime(3): ${checkPrime(3)}`);
console.log(`checkPrime(5): ${checkPrime(5)}`);
console.log(`checkPrime(19): ${checkPrime(19)}`);
console.log(`checkPrime(23): ${checkPrime(23)}`);
console.log(`checkPrime(29): ${checkPrime(29)}`);

console.log('\n--- Non-Prime Numbers ---\n');

console.log(`checkPrime(0): ${checkPrime(0)}`);
console.log(`checkPrime(1): ${checkPrime(1)}`);
console.log(`checkPrime(4): ${checkPrime(4)}`);
console.log(`checkPrime(15): ${checkPrime(15)}`);
console.log(`checkPrime(20): ${checkPrime(20)}`);
console.log(`checkPrime(100): ${checkPrime(100)}`);

console.log('\n--- Larger Prime Numbers ---\n');

// Test with larger numbers
console.log(`checkPrime(97): ${checkPrime(97)}`);
console.log(`checkPrime(101): ${checkPrime(101)}`);
console.log(`checkPrime(121): ${checkPrime(121)}`);

console.log('\n--- Negative Numbers ---\n');

console.log(`checkPrime(-5): ${checkPrime(-5)}`);
console.log(`checkPrime(-10): ${checkPrime(-10)}`);
