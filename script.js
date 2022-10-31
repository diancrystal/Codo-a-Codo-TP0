let long;
let lati;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon")
const kelvin = 273.15

window.addEventListener("load", () => {
    if (navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
            long = position.coords.longitude;
            lati = position.coords.latitude;

            const apiid="41bb40ece8e5de8b84f30fd769edb646";

            const url_base="https://api.openweathermap.org/data/2.5/weather?lat=-34.599998&lon=-58.450001&lang=es&appid=41bb40ece8e5de8b84f30fd769edb646";
        
            fetch(url_base)
            .then((response) =>{    
            console.log("Respuesta JSON");
            return response.json();
        
        })
    
        .then((data) => {
            console.log("Esta es la data");
            console.log(data);

            temperature.textContent = Math.floor(data.main.temp - kelvin) + "ºC";

            summary.textContent = data.weather[0].description;

            loc.textContent = data.name + "," + data.sys.country;
        
        })})}});