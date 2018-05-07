import * as types from '../../constants/ActionType';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    myTown: {},
    weatherMyTown: {}
})

export default function reduce(state = initialState, action) {
    switch (action.type) {
        case types.MY_TOWN_FETCH:
          return state.merge({
            myTown: action.getTown
          });
        case types.MY_TOWN_WEATHER:
          return state.merge({
            weatherMyTown: action.getWeather
          })
        default:
          return state;
      }
}
  
