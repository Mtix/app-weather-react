import React, {Component} from 'react';

export default class MyTownWeather extends Component {
    render() {
        return (
            <div className="weather-data">
                <div>
                    <img src={this.props.weatherData.condition.icon} alt=""/>
                    <div>{this.props.weatherData.condition.text}</div>
                </div>
                <div>Температура: {this.props.weatherData.temp_c} ℃</div>
                <div>Ощущается: {this.props.weatherData.feelslike_c} ℃</div>
                <div>Влажность: {this.props.weatherData.humidity}</div>
                <div className="date-update">Дата обновления: {this.props.weatherData.last_updated}</div>
            </div>
        )
    }
}