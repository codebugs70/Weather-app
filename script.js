const API_KEY = "dd3b510545cb16e7a027e6ade64921a0";
const input = document.querySelector("#weather-input");
const weatherDegree = document.querySelector(".weather-degree");
const weatherStatus = document.querySelector(".weather-status");
const weatherLocation = document.querySelector(".weather-location");
const weatherImg = document.querySelector(".weather-img img");
const wind = document.querySelector(".wind-value");
const humidity = document.querySelector(".humid-value");

input.addEventListener("change", getWeather);

async function getWeather(e) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value.trim()}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    weatherData(data);
    console.log(data);
  } catch (err) {
    weatherLocation.innerHTML = "Please enter the right value";
    weatherLocation.innerHTML = "Unknow";
    weatherStatus.innerHTML = "Unknow";
    weatherDegree.innerHTML = "Unknow";
    wind.innerHTML = "Unknow";
    humidity.innerHTML = "Unknow";
    weatherLocation.style.color = "lightgreen";
    weatherImg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
  }
}

function weatherData(data) {
  weatherLocation.innerHTML = data.name;
  weatherStatus.innerHTML = data.weather[0].description;
  weatherDegree.innerHTML = Math.floor(data.main.temp) + "°C";
  wind.innerHTML = data.wind.speed + "km/h";
  humidity.innerHTML = data.main.humidity + "%";
  weatherImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
}

/* redner data */
async function displayWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=-22.8375&lon=-51.9731&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  weatherData(data);
}
displayWeather();
