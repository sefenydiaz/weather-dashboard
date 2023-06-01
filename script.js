var button = document.querySelector('.btn');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var searchInput = document.querySelector('#searchInput')
var weatherBoxes = document.querySelector('#weatherboxes')
var APIKey = "dfb71659a24969b1bb50c11b0d78bb69";
var city;
//var cityWeather = "http://api.openweathermap.org/data/2.5/weather?q=' + newcity.value + '&appid=" + APIKey;
var lat;
var lon;

function forecast(cityName) {

    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + APIKey;
    fetch(fiveDay)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data);
            for (var i = 7; i < data.list.length; i += 8) {
                var currentDay = data.list[i]
                console.log(currentDay)
                // append forecast to window using js
                var box = document.createElement("div")
                box.setAttribute("id", "box")

                var date = document.createElement("p")
                date.textContent = currentDay.dt_txt
                var dayTemp = document.createElement("p")
                dayTemp.textContent = "Temp: " + currentDay.main.temp + "\u00B0"
                var dayWind = document.createElement("p")
                dayWind.textContent = "Wind: " + currentDay.wind.speed + " MPH"
                var dayHumidity = document.createElement("p")
                dayHumidity.textContent = "Humidity: " + currentDay.main.humidity + "\u0025"


                box.append(date)
                box.append(dayTemp)
                box.append(dayWind)
                box.append(dayHumidity)
                weatherBoxes.append(box)

                // ADD STYLING
                // document.getElementById('box').style.border = 'solid 16px';
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}




button.addEventListener('click', function (event) {
    event.preventDefault()

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=imperial&appid=" + APIKey)
        .then(response => response.json())
        // return response.json()
        .then(data => {
            console.log(data)
            var cityEl = data.name;
            var tempEl = data.main.temp;
            var windEl = data.wind.speed;
            var humidityEl = data.main.humidity;

            city.textContent = cityEl;
            temp.innerHTML = `<p>Temp: ${tempEl}\u00B0</p>`;
            // use same syntax to edit els below
            wind.innerHTML = `<p>Wind: ${windEl} MPH<p>`;
            humidity.innerHTML = `<p>Humidity: ${humidityEl}\u0025<p>`;



            forecast(searchInput.value);
        })

        .catch(error => {
            console.log(error)
            alert("Incorrect city name!")
        })
})


// var obj = {
//     name: "Bob",
//     hobbies: [{ name: "Hiking", frequency: "a lot", nested: { morestuff: "somehting" } }]
// }
// obj.hobbies[0].nested.morestuff