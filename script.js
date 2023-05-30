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
                var box = document.createElement("div")
                box.setAttribute("class", "box")
                var date = document.createElement("p")
                date.textContent = currentDay.dt_txt



                box.append(date)
                weatherBoxes.append(box)
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}

//function renderWeather()

// //allows user to search a new city and displays value of new city
// button.addEventListener('click', function () {
//     //function search() {
//     search()
//     const newCity = document.getElementById("newCity");
//     const cityName = document.getElementById("city");
//     cityName.innerHTML = "--" + newCity.value + "--"
// })



button.addEventListener('click', function () {
    fetch(('http://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&units=imperial&appid=' + APIKey))
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
            wind.innerHTML = `<p>Wind: ${windEl}<p>`;
            humidity.innerHTML = `<p>Humidity: ${humidityEl}<p>`;



            forecast(searchInput.value);
        })

        .catch(error => alert("Incorrect city name!"))
})


// var obj = {
//     name: "Bob",
//     hobbies: [{ name: "Hiking", frequency: "a lot", nested: { morestuff: "somehting" } }]
// }
// obj.hobbies[0].nested.morestuff