import {
    digitalClock,
    alarm
} from "./js/reloj.js";
import menuHamburgesa from "./js/hamburgesa.js";
import {
    shortcuts,
    moveBall
} from "./js/teclado.js";
import actualizarReloj from "./js/countdown.js";
import scrollTopButton from "./js/boton_scroll.js";
import activeDarkMode from "./js/darkMode.js";
import responsiveMedia from "./js/objeto_responsive.js";
import responsiveTester from "./js/prueba_responsive.js";
import userDeviceInfo from "./js/deteccion_dispositivos.js";
import networkStatus from "./js/detectar_coneccion.js";
import webCam from "./js/deteccion_webcamp.js";
import getGeolocation from "./js/geolocalizacion.js";
import searchFilters from "./js/filtro_busquedas.js";
import sortearLenguajes from "./js/sorteo.js";
import slider from "./js/carrutsel.js";
import scrollSpy from "./js/scroll_espia.js";
import smartVideo from "./js/video_inteligente.js";
import validarFormulario from "./js/formulario_valid.js";
import contactFormValidations from "./assets/validaciones_formulario.js";
import speechReader from "./js/narrador.js";



document.addEventListener("DOMContentLoaded", (e) => {

    let fecha = new Date(2040, 4, 30);
    menuHamburgesa(".panel-btn", ".panel", ".panel a");
    digitalClock("#reloj", "#activar-reloj", "#detener-reloj", "#iniciar-alarma", "#detener-alarma")
    actualizarReloj("countdown", fecha)
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube", "(min-width: 1024px)", '<a href="https://www.youtube.com/watch?v=3W5O4odB5KE&t=3s">Ver Video</a> ', '<iframe width="560" height="315" src="https://www.youtube.com/embed/3W5O4odB5KE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    responsiveMedia("gmaps", "(min-width: 1024px)", '<a href="https://www.google.com.ar/maps/@-32.9350116,-60.6945048,14z/data=!3m1!4b1!4m2!7m1!2e1">Ver Mapa</a>', '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26788.846439331242!2d-60.694504760449185!3d-32.93501163691824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1616900518859!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "sun")
    }

    if (localStorage.getItem("theme") == "moon") {
        document.querySelector(".moon").classList.add("hidden");
        document.querySelector(".sun").classList.remove("hidden");
        document.querySelector("body").classList.add("oscurecer");
    }
    activeDarkMode(".darkMode");
    responsiveTester("responsive_tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card")
    sortearLenguajes("uiLang")
    slider()
    scrollSpy()
    smartVideo()
    validarFormulario()
    contactFormValidations()
    


})

document.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
})

networkStatus();
speechReader();