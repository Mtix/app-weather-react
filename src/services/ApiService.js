const APP_ID = "a768d8f8a81d4905a8b41352180805";
const URL_DETECTED = 'https://api.sypexgeo.net/json/';
const URL_WEATHER = 'http://api.apixu.com/v1/current.json';

class ApiService {
    
    getMyTown() {
        return fetch(URL_DETECTED)
            .then(res => res.json())
    }

    getWeather(cityName) {
        return fetch(`${URL_WEATHER}?key=${APP_ID}&q=${cityName}`)
            .then(res => res.json())
        
    }

}

export default new ApiService();
