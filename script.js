var button = document.querySelector('.button');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var APIKey = "dfb71659a24969b1bb50c11b0d78bb69"
var city;
var cityWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var fiveDay = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

button.addEventListener('click', function () {
    fetch(cityWeather)
        .then(function (response) {
            return response.json()
            then(data => {
                var cityEl = data['city'];
                var tempEl = data['temp'];
                var windEl = data['wind'];
                var humidityEl = data['humidity'];

                city.innerHTML = cityEl;
                temp.innerHTML = tempEl;
                wind.innerHTML = windEl;
                humidity.innerHTML = humidityEl;
            })

                .catch(error => alert("Incorrect city name!"))
        }})
