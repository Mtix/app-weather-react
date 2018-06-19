import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MyTown from '../components/MyTown';
import MyTownWeather from '../components/MyTownWeather';
import * as weatherAction from '../redux/actions/weatherActions';

class WeatherInfo extends Component {

    componentDidMount() {
        this.props.weatherAction.getMyTown();
    }

    render() {
        return (
            <div className={"weather-container " + (this.props.loaded ? 'show' : 'hidden')}>
                <MyTown townData={this.props.detectTown}></MyTown>
                <MyTownWeather weatherData={this.props.weatherInfo}></MyTownWeather>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        detectTown: state.townWeather.myTown,
        weatherInfo: state.townWeather.weatherMyTown,
        loaded: state.townWeather.loaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        weatherAction: bindActionCreators(weatherAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);