const button = document.querySelector("#submit");
const para = document.querySelector("#countdown");
let lock = 0;
const updatePara = (bool, time) => {
    para.innerText = `Hours: ${Math.floor(time/3600000)}, Minutes: ${Math.floor(time/60000)}, Seconds: ${(time/1000)%60}`;
};
const done = () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            new Audio('alarm.mp3').play();
        }, i * 1000);
    }
    para.innerText = "Timer Ended!";
    lock = 0;
};
button.addEventListener("click", () => {
    const hours = document.querySelector("#hrs").value;
    const minutes = document.querySelector("#mins").value;
    const seconds = document.querySelector("#secs").value;
    if (seconds < 60 && minutes < 60 && lock === 0) {
        let time = (seconds * 1000) + (minutes * 60 * 1000) + (hours * 60 * 60 * 1000);
        updatePara(true, time);
        lock = 1;
        let updateTime = setInterval(() => {
            time -= 1000;
            updatePara(false, time);
        }, 1000);
        setTimeout(() => {
            done();
            clearInterval(updateTime);
        }, time);
    } else if (seconds >= 60) {alert("Seconds must be under 60")} else if (minutes >= 60) {alert("Minutes must be under 60")};
});