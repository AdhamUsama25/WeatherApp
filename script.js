let weather = {
  apiKey: "8e594cd9978451ce6b7845aaa51d9bbd",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerHTML = name;
    document.querySelector(".country").innerHTML = country;
    document.querySelector(".n-dgr").innerHTML = Math.round(temp);
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".hum").innerHTML = "Humidity " + humidity + '%';
    document.querySelector(".spd").innerHTML = "Wind Speed " + speed+"km/h";
    document.querySelector(".dsc").innerHTML = description;
  },

  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
}





weather.fetchWeather("New York")

document.querySelector(".btn").addEventListener("click", function(){
  weather.search();
});



document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
      weather.search();
  }
});