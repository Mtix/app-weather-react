import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar></SideBar>
        <Content></Content>
      </div>
    );
  }
}

export default App;
