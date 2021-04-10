export default function sortearLenguajes(UI) {
    let $miUi = document.getElementById(UI)
    let contador = 0,
        i = 0,
        numeroGanador = 0;

    while ($miUi.getElementsByTagName(`li`)[i++]) {
        contador++;
    }

    document.addEventListener("click", e => {
        if (e.target.matches("#sortear")) {

            numeroGanador = Math.floor((Math.random() * contador) + 1);
            console.log(numeroGanador)
            alert(`El ganador es ${$miUi.getElementsByTagName(`li`).item(numeroGanador - 1).innerHTML}, ${numeroGanador}`)
        }
    })








}