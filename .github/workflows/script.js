const apiKey = '516b57cbc9397264cdc68e1538604455';

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert('City not found. Please check the spelling.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
