import React, { Component } from 'react';
import Message from './components/Message'
import Skidata from './components/Skidata'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <h1>React JS</h1>
       <Message />
      </div>
    );
  }
}

export default App;
