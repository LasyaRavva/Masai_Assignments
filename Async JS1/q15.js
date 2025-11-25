const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startCountdown() {
    rl.question("Enter the number of seconds for the countdown: ", (secondsInput) => {
        let remainingSeconds = +secondsInput; 

        if (
            typeof remainingSeconds !== 'number' ||
            !Number.isFinite(remainingSeconds) ||
            !Number.isInteger(remainingSeconds) ||
            remainingSeconds <= 0
        ) {
            console.log("Invalid input. Please enter a positive whole number.");
            rl.close();
            return;
        }
        
        console.log(`Starting countdown from ${remainingSeconds} seconds...`);

        let intervalId; 
        let timeoutId; 

        const tick = () => {
            console.log(`Remaining time: ${remainingSeconds} seconds`);

            if (remainingSeconds <= 0) {
                clearInterval(intervalId);
                console.log("Countdown Complete!");
                clearTimeout(timeoutId); 
                rl.close();
                return;
            }

            remainingSeconds--;
        };

        intervalId = setInterval(tick, 1000);

        const delayCheck = 5000; 

        const checkForKeyPress = () => {
            const keyPressDetected = Math.random() < 0.3; 

            if (keyPressDetected && remainingSeconds > 0) {
                clearInterval(intervalId);
                console.log("\nKey 's' detected! Countdown stopped immediately.");
                rl.close();
            } else if (remainingSeconds > 0) {
                timeoutId = setTimeout(checkForKeyPress, delayCheck);
            }
        };

        timeoutId = setTimeout(checkForKeyPress, delayCheck);
    });
}

startCountdown();