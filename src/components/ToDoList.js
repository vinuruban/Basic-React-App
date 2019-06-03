import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoList extends Component {

  getStyle = () => {
    if(this.props.theToDoListProps.completed) {
      return {
        textDecoration: 'line-through'
      }
    }
    else {
      return {
        textDecoration: 'none'
      }
    }
  }

  markComplete = (e) => {
    console.log('SDFDSSSDF')
  }

  render() {
    console.log(this.props.theToDoListProps)
    return (
      <div style = {this.getStyle()}>
       <h2>
         <input type="checkbox" onChange={this.props.markComplete}/>
         {this.props.theToDoListProps.title}
       </h2>
      </div>
      );
    }
  }

  // Good practice to have PropTypes - to this to whatever props are being passed down 
 ToDoList.propTypes = {
  theToDoListProps: PropTypes.object.isRequired
 }

export default ToDoList; //For this component to be available in other places in the application