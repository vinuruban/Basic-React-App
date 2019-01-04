import React, { Component } from 'react';

class NiceHeader extends Component {
  render() {
    return (
      <div>
         <header className="headercolour">This is the header</header> {/* "className", not "class" because this is JSX, not HTML! */}
      </div>
    );
  }
}

export default NiceHeader; //For this component to be available in other places in the application