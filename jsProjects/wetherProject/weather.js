
document.getElementById('get-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city === "" || city == Number) {
        alert("Please enter a city name");
        return;
    }

    const apiKey = '55ff29804fe7c359eb1e205ac07830d9';
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const weather = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <img src="${weatherIcon}" alt="Weather icon" />`;
            document.getElementById('weather-result').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
        });
});
