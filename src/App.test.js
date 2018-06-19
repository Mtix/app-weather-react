import React from 'react';
import * as weatherAction from './redux/actions/weatherActions';
import * as types from './constants/ActionType'

it('test MY_TOWN_FETCH', () => {
  expect.(weatherAction.getWeatherMyTown('Barnaul')).toEqual({
    type: types.MY_TOWN_WEATHER,
    payload: {
      location: {
        country: "Russia",
        lon: 83.75,
        lat: 53.36,
        name: "Barnaul",
        region: "Altaisky krai",
        tz_id: "Asia/Barnaul"
      }
    }
  });
});