setInterval(() => {
    console.log("Loading...");
}, 1000);

setTimeout(() => {
    console.log("Loaded successfully!");
    clearInterval();
    process.exit();

}, 5000);

