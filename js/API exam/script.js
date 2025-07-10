// making a weather app using OpenWeatherMap API
const weatherForm = document.getElementById("weather");
const input = document.getElementById("input");
const apiKey = "9749f418474c608beeb58ecfe755edb5";

function weatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherOutput = document.getElementById("weatherOutput"); // <div id="weatherOutput">
            const now = new Date();
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            weatherOutput.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>${now.toDateString()} | ${now.toLocaleTimeString()}</p>
                <img src="${iconUrl}" alt="Weather Icon">
                <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
                <p><strong>Feels Like:</strong> ${Math.round(data.main.feels_like)}°C</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                <p><strong>Description:</strong> ${data.weather[0].description}</p>
            `;
        })
    // .catch(error => {
    //     const weatherOutput = document.getElementById("weatherOutput");
    //     weatherOutput.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    // });
}

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = input.value.trim();
    if (city) {
        weatherData(city);
        input.value = "";
    } else {
        alert("Please enter a city name");
    }
});





