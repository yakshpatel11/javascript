// 54. Create a countdown from 10 to 1 using a loop.

let countdown = document.getElementById("countdown");
let countdownValue = 10;
let countdownInterval;
let isCountdownRunning = false;
function startCountdown() {
    if (!isCountdownRunning) {
        isCountdownRunning = true;
        countdownInterval = setInterval(() =>){
            countdown.innerHTML = countdownValue;
            countdownValue--;
            if (countdownValue < 0) {
                clearInterval(countdownInterval);
                countdown.innerHTML = "Countdown Finished!";
                isCountdownRunning = false;

            }

        }

    }
    else {
        alert("Countdown is already running.");
    }

}
