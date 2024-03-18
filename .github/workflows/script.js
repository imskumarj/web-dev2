async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '516b57cbc9397264cdc68e1538604455'; // Get your API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract relevant weather information (e.g., temperature, description)
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display the weather info
        document.getElementById('weatherInfo').innerHTML = `
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
