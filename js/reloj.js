export function digitalClock(clock, btnPlay, btnStop, btnAlarmaInicio, btnAlarmaStop) {
    let clockTempo;
    let alarmaTempo;

    document.addEventListener("click", (e) => {

        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            document.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay).disabled = false;
        }

        if (e.target.matches(btnAlarmaInicio)) {
            let miAlarma = new Audio("./assets/alarma.mp3");
            miAlarma.play();
            alarmaTempo = setInterval(() => {
                miAlarma.play();
            }, 3000);
            e.target.disabled = true;
        }

        if (e.target.matches(btnAlarmaStop)) {
            clearInterval(alarmaTempo);
            document.querySelector(btnAlarmaInicio).disabled = false;
        }
    })
}

export function alarm() {

}