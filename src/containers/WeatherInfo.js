import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiService from '../services/ApiService';

class WeatherInfo extends Component {

  componentDidMount() {
      ApiService.getMyTown().then((response) => {
        this.loadWeather(response.city.name_en);
        this.props
            .dispatch({type: 'MY_TOWN_FETCH', getTown: response});
      }).catch(() => {
        console.log('Error');
      });
  }

  loadWeather(cityName) {
    ApiService.getWeather(cityName).then((response) => {
        this.props.dispatch({type: 'MY_TOWN_WEATHER', getWeather: response});
    })
  }

  render() {
    return (
        <h2>{this.props.detectTown.ip}</h2>
    );
  }
}

function mapStateToProps(state) {
    return {
        detectTown: state.townWeather.myTown,
        weatherInfo: state.townWeather.weatherMyTown
    };
}

export default connect(mapStateToProps)(WeatherInfo);