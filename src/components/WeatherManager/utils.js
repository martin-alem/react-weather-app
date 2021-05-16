async function makeRequest(cityName) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aac304093f797550435d2ed3dad3f25b&units=metric`;

    const request = new Request(url);
    const Init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        mode: "cors"
    }

    const response = await fetch(request, Init);
    if (response.status === 200) {
        const json = await response.json();
        return extractWeatherData(json);
    }
    return {};
}

function extractWeatherData(responseJson) {
    const weatherData = {
        icon: responseJson.weather[0].icon,
        temperature: toNDecimalPlaces(toFarenhiet(responseJson.main.temp), 1),
        minTemperature: toNDecimalPlaces(toFarenhiet(responseJson.main.temp_min), 100),
        maxTemperature: toNDecimalPlaces(toFarenhiet(responseJson.main.temp_max), 100),
        feelsLike: toNDecimalPlaces(toFarenhiet(responseJson.main.feels_like), 100),
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        description: responseJson.weather[0].description,
        visibility: responseJson.visibility,
        windSpeed: responseJson.wind.speed,
        country: responseJson.sys.country,
        city: responseJson.name,
        coords: responseJson.coord

    }

    return weatherData;
}

function toNDecimalPlaces(number, decimalPlaces) {
    const tmpNum = Number.parseInt(number * decimalPlaces);
    return tmpNum / decimalPlaces;
}

function toFarenhiet(celsius) {
    return (celsius * (9 / 5)) + 32;
}

export { makeRequest }


