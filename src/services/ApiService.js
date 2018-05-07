const APP_ID = "9b0784d3d65c19f6519953aa8f632989";
const URL_DETECTED = 'https://api.sypexgeo.net/json/';

class ApiService {
    
    getMyTown() {
        return fetch(URL_DETECTED)
            .then(res => res.json())
    }   
    
    getWeather(cityName) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`)
            .then(res => res.json())
        
    }

}

export default new ApiService();
