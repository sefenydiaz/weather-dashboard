var button = document.querySelector('.btn');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var APIKey = "dfb71659a24969b1bb50c11b0d78bb69";
var city;
var cityWeather = "http://api.openweathermap.org/data/2.5/weather?q=' + newcity.value + '&appid=" + APIKey;
var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";


function weather(cityName) {
    var APIKey = "dfb71659a24969b1bb50c11b0d78bb69";
    fetch('http://api.openweathermap.org/data/2.5/weather?id=' + cityName + '&appid=' + APIKey)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {

        });
}
window.onload = function () {
    weather(6167865);
}

function renderWeather()

// //allows user to search a new city and displays value of new city
// button.addEventListener('click', function () {
//     //function search() {
//     search()
//     const newCity = document.getElementById("newCity");
//     const cityName = document.getElementById("city");
//     cityName.innerHTML = "--" + newCity.value + "--"
// })



// button.addEventListener('click', function () {
//     fetch(cityWeather)
//         .then(response => response.json())
//     // return response.json()
//     then(data => {
//         var cityEl = data['city'];
//         var tempEl = data['temp'];
//         var windEl = data['wind'];
//         var humidityEl = data['humidity'];

//         city.innerHTML = cityEl;
//         temp.innerHTML = tempEl;
//         wind.innerHTML = windEl;
//         humidity.innerHTML = humidityEl;

//     })

//         .catch(error => alert("Incorrect city name!"))
// })
