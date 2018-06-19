import * as types from '../../constants/ActionType';
import ApiService from '../../services/ApiService';

export function getMyTown() {
    return (dispatch) => {
        dispatch({
            type: types.MY_TOWN_WEATHER_REQUEST,
            payload: false
        });
        return ApiService.getMyTown().then((response) => {
            const cityName = response.city.name_en;
            this.getWeatherMyTown(cityName);
            dispatch({
                type: types.MY_TOWN_FETCH,
                payload: response
            })
        });
    }
}

export function getWeatherMyTown(cityName) {
    return (dispatch) => {
        return ApiService.getWeather(cityName, {mode: 'cors'}).then((response) => {
            dispatch({
                type: types.MY_TOWN_WEATHER,
                payload: response
            });
        })

    }
}