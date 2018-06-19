import * as types from '../../constants/ActionType';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    loaded: false,
    myTown: {
        ip: '',
        city: {
            name_ru: ''
        },
        country: {
            name_ru: ''
        }
    },
    weatherMyTown: {
        condition: {
            icon: '',
            text: ''
        },
        temp_c: '',
        feelslike_c: '',
        humidity: '',
        last_updated: '',
    }
})

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case types.MY_TOWN_FETCH:
            return state.merge({
                myTown: action.payload
            });
        case types.MY_TOWN_WEATHER:
            return state.merge({
                weatherMyTown: action.payload.current,
                loaded: true
            });
        case types.MY_TOWN_WEATHER_REQUEST:
            return state.merge({
                loaded: action.payload
            })
        default:
            return state;
    }
}
  
