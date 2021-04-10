export default function getGeolocation(id){
const $id = document.getElementById(id), options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const success = posicion => {
let coords = posicion.coords;
$id.innerHTML = `
<p>Tu posición actual es:</p>
<ul>
<li>Latitud: <b>${coords.latitude}</b></li>
<li>Longitud: <b>${coords.longitude}</b></li>
<li>Precisión: <b>${coords.accuracy}</b>metros</li>
</ul>
<a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" target="_blank" rel="noopener">Ver en Google Maps</a>
`;

}

const error = (err) => {
    $id.innerHTML = `<p><mark>Error: ${err}`
    };
navigator.geolocation.getCurrentPosition(success, error, options)
}