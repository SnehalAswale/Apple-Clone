
const x = document.getElementById("out");
const y = document.getElementById("weather");

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo not suppoeted";
    }
}

function showPosition(data) {
    console.log(data);
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    console.log(lat);
    console.log(lon);
    console.log(x);
    if (x) {
        x.innerText = `Latitude is: ${lat} and  Longitude is: ${lon} .`  ;
    }
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //API calling
    fetch(url, { method: 'GET' })
        //return promise
        .then((res) => res.json())
        //reslove promise
        .then((data) => {
            console.log(data);
            let cityName = data.city.name;
            let temp = data.list[0].temp.day + " °C"
            y.innerText = `The Weather of ${cityName} is ${temp}`
        })
}















/*
const getLocation = document.getElementById('Location');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        }else{
            getLocation.innerText = "Location Not Found";
        }
    }

    function showPosition(data){
        console.log(data);
        getLocation.innerText = `This is ${data.coords.latitude}`;
    }
*/