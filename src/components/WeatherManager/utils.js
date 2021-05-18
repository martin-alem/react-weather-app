async function makeRequest(requestData) {

    let url;
    if (requestData.type === "cityName") {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${requestData.cityName}&appid=aac304093f797550435d2ed3dad3f25b&units=metric`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${requestData.lat}&lon=${requestData.lon}&appid=aac304093f797550435d2ed3dad3f25b&units=metric`;
    }

    const request = new Request(url);
    const Init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        mode: "cors"
    }

    try {
        const response = await fetch(request, Init);
        const json = await response.json();
        return extractWeatherData(json);
    } catch (error) {
        throw new Error(error.message);
    }

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

async function getWeatherDataOnPageLoad() {
    // checks if user as a default location setState
    // if so use that location to fetch weather data
    const defaultLocation = window.localStorage.getItem("default_location");
    if (defaultLocation) {
        try {
            const currentLocation = defaultLocation.split(",");
            const latitude = currentLocation[0];
            const longitude = currentLocation[1];
            return makeRequest({ type: "coord", lat: latitude, lon: longitude });
        } catch (error) {
            throw new Error(error.message);
        }

    }

    // If no default location set, getCurrentLocation and make request to API
    else {
        try {
            const currentLocation = await getCurrentLocation();
            const latitude = currentLocation[0];
            const longitude = currentLocation[1];
            persistLocation(currentLocation);
            return makeRequest({ type: "coord", lat: latitude, lon: longitude });
        } catch (error) {
            throw new Error(error.message);
        }

    }

}

async function getWeatherDataOnSubmit(cityName) {

    try {
        return makeRequest({ type: "cityName", cityName: cityName });
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getWeatherDataForCurrentLocation() {

    try {
        const currentLocation = await getCurrentLocation();
        const latitude = currentLocation[0];
        const longitude = currentLocation[1];
        return makeRequest({ type: "coord", lat: latitude, lon: longitude });
    } catch (error) {
        throw new Error(error.message);
    }
}

function getCurrentLocation() {

    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("No Geolocation"));
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                const location = [position.coords.latitude, position.coords.longitude];
                resolve(location);
            }, error => reject(error))
        }
    });
}

function persistLocation(location) {
    window.localStorage.setItem("default_location", location.toString());
}

function saveLocation(location) {
    const saveLocations = window.localStorage.getItem("locations");

    if (saveLocations) {
        const locations = saveLocations.split(",");
        // this loops runs in O(n/2) time because we increment by 2
        //binary search can be used to improve performance
        for (let i = 0; i < locations.length; i += 2) {
            if (locations[i] === location) {
                throw new Error("Location Already Exist");
            }
        }

        // save location to localStorage
        locations.push(location, new Date());
        window.localStorage.setItem("locations", locations);
    } else {
        // if saving for the first time 
        window.localStorage.setItem("locations", [location, new Date()]);
    }
}

function retrieveLocations() {

    const locations = window.localStorage.getItem("locations");
    if (locations) {
        let customizedLocation = [];
        const saveLocations = localStorage.getItem("locations").split(",");
        for (let i = 0; i < saveLocations.length; i += 2) {
            customizedLocation.push({ "location": saveLocations[i], "date": saveLocations[i + 1] });
        }
        return customizedLocation;
    } else {
        throw new Error("Error retrieving locations");
    }
}

function toNDecimalPlaces(number, decimalPlaces) {
    const tmpNum = Number.parseInt(number * decimalPlaces);
    return tmpNum / decimalPlaces;
}

function toFarenhiet(celsius) {
    return (celsius * (9 / 5)) + 32;
}

export {
    getWeatherDataOnPageLoad,
    getWeatherDataOnSubmit,
    persistLocation,
    getWeatherDataForCurrentLocation,
    saveLocation,
    retrieveLocations
}


