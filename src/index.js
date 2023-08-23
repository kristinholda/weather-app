// write your code here
function celciusToFarenheit(celcius) {
  return Math.round((weather[city].temp * 9) / 5 + 32);
}

// let city = prompt("Enter a city");
// city = city.toLowerCase();

//if (city in weather) {
// alert(
// `It is currently ${Math.round(weather[city].temp)}°C (${celciusToFarenheit(
//   weather[city].temp
//  )}°F) in ${city} with a humidity of ${weather[city].humidity}%`
// );
//} else {
//  alert(
//   `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//);
//}

//⏰Feature #1
let now = new Date();
let newDate = document.querySelector("#date");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

newDate.innerHTML = `${day} ${month} ${date}, ${year} | ${hours}:${minutes}`;

function showWeather(response) {
  let mainTemp = Math.round(response.data.main.temp);
  let newMainTemp = document.querySelector("#main-temp");
  newMainTemp.innerHTML = mainTemp;
  //console.log(response.data);
  //console.log(response.data.main.temp);
  //console.log(mainTemp);
}

//Feature #2
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let cityHeading = document.querySelector("h1");
  cityHeading.innerHTML = searchInput.value;

  let unit = "imperial";
  let apiKey = "0a521eaf234a3a56f45252fac3c737ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=${unit}&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showLocationWeather(response) {
  let currentLocationTemp = Math.round(response.data.main.temp);
  let newCurrentLocationTemp = document.querySelector("#main-temp");
  newCurrentLocationTemp.innerHTML = currentLocationTemp;

  let currentLocationHeading = document.querySelector("h1");
  currentLocationHeading.innerHTML = response.data.name;
}

function findLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(showLocationWeather);
}

function currentLocation() {
  navigator.geolocation.getCurrentPosition(findLocation);
}

let currentButton = document.querySelector("#locate-button");
currentButton.addEventListener("click", currentLocation);

// Bonus
// function convertToCelsius(event) {
// let temperature = 80;
// let celsiusTemperature = Math.round(((temperature - 32) * 5) / 9);
// let mainTemp = document.querySelector("#main-temp");

// mainTemp.innerHTML = celsiusTemperature;
//}

//let celciusLink = document.querySelector("#celsius");
//celciusLink.addEventListener("click", convertToCelsius);

//function converyToFahrenheit(event) {
//  let temperature = 80;
// let mainTemp = document.querySelector("#main-temp");

// mainTemp.innerHTML = temperature;
//}
//let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit.addEventListener("click", converyToFahrenheit);
