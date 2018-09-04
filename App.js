import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import GetApiResponse from './components/GetApiResponse'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GetApiResponse />
      </div>
    );
  }
}

export default App;
