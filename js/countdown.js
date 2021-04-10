export default function actualizarReloj(objeto, fecha) {

    const $countdown = document.getElementById(objeto);
    let fechaPasada = fecha.getTime();


    if (fechaPasada < new Date().getTime()) {
        alert(`La fecha ${fecha} es anterior a la fecha actual`)
    } else {


        let countdownTempo = setInterval(() => {
            let now = new Date().getTime();
            let limitTime = fechaPasada - now,
                days = Math.floor(limitTime / (1000 * 60 * 60 *24)), hours = Math.floor((limitTime % (1000 * 60 * 60 *24)) / (1000*60*60)) , minutes = Math.floor((limitTime % (1000*60*60)) / (1000 * 60)), seconds = Math.floor((limitTime % (1000 * 60))/ (1000));



                $countdown.innerHTML = `<h3>Faltan ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
               
        }, 1000);


    }



}