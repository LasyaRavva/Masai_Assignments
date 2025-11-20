  if (true) {
    let x = 30;
    var y = 40;
}
console.log(y);
console.log(x);
// a) Expected output when running the earlier code:
// 20
// ReferenceError: x is not defined
// Explanation: `var` is not block-scoped so the variable declared with `var` is accessible outside the if-block;
// `let` is block-scoped so the variable declared with `let` is not accessible outside the block and causes a ReferenceError.

// Note: because that ReferenceError occurs, subsequent lines in the file won't run unless the error is handled.

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 
// b) Using optional chaining safely prints:
// test@mail.com
// undefined

const data = {}; 
console.log(data.user?.profile?.name); 
// c) Example where optional chaining prevents a runtime error:
try {
    // Example that will throw because `data.user` is undefined:
    // attempting to access `.profile` on undefined causes a TypeError
    const name = data.user.profile.name; // throws
    console.log(data.user.profile.name);
} catch (err) {
    console.log('Caught error without optional chaining:', err.message);
}