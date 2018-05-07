import React, { Component } from 'react';
import WeatherInfo from './containers/WeatherInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherInfo></WeatherInfo>
      </div>
    );
  }
}

export default App;
