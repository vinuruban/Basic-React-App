import React, { Component } from 'react';

import ToDos from "./components/ToDos"
import NiceMain from "./components/NiceMain"
import NiceFooter from "./components/NiceFooter"
import './style.css';


class App extends Component {

// below is the state, that will be passed down as a prop
state = {
  theState: [
    {
      id: 1,
      title: 'Wake up',
      completed: true
    },
    {
      id: 2,
      title: 'Go gym',
      completed: false
    },
    {
      id: 3,
      title: 'Eat',
      completed: false
    },
    {
      id: 4,
      title: 'Sleep',
      completed: false
    }
  ]
}

  render() {
    console.log('Shows the state located in App.js')
    console.log(this.state.theState)
    return (
      <div>
        <ToDos theProps={this.state.theState}/> {/*Calls in the header component */}
        <NiceMain /> {/*Calls in the main component */}
        <NiceFooter /> {/*Calls in footer component */}
      </div>
    );
  }
}

export default App; //For this component to be available in other places in the application
