import React, { Component } from 'react';

import NiceHeader from "./components/NiceHeader"
import NiceMain from "./components/NiceMain"
import NiceFooter from "./components/NiceFooter"
import './style.css';


class App extends Component {
  render() {
    return (
      <div>
        <NiceHeader /> {/*Calls in the header component */}
        <NiceMain /> {/*Calls in the main component */}
        <NiceFooter /> {/*Calls in footer component */}
      </div>
    );
  }
}

export default App; //For this component to be available in other places in the application
