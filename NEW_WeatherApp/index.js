let weather = {
    apiKey: "2433d9d855441a41e1a9f839f8999c61",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=2a56313648062a70896b9878c781ba9b")
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".City").innerHTML = "Weather in " + name
        document.querySelector(".Icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".Discription").innerHTML = description
        document.querySelector(".Temp").innerHTML = temp + "°C"
        document.querySelector(".Humidity").innerHTML = "Humidity: " + humidity + "%"
        document.querySelector(".Wind").innerHTML = "Wind Speed:" + speed + "km/h"
        document.querySelector(".Weather").classList.remove("Loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    Search: function() {
        this.fetchWeather(document.querySelector(".Search-bar").value);
    }
};
document.querySelector(".Search button").addEventListener("click", function() {
    weather.Search()

})
document.querySelector(".Search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.Search()

    }
    // weather.Search()

})
weather.fetchWeather("Amritsar");