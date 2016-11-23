'use strict';

var temperature, location, icon, humidity, wind, direction;

function update(weather) {
  wind.innerHTML = weather.wind;
  location.innerHTML = weather.location;
  humidity.innerHTML = weather.humidity;
  temperature.innerHTML = weather.temperature;
  direction.innerHTML = weather.direction;
  icon.src = `"imgs/code/"${weather.icon}.png`;
}

window.onload = function() {
  temperature = document.getElementById("temperature");
  location = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  let weather = {};
  weather.wind = 3.5; // mph
  weather.humidity = 35; //% humidity
  weather.humidity = 35;
  weather.location = 'Seattle';
  weather.temperature = '45';
  weather.icon = 200;

  update(weather);
};
