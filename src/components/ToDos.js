import React, { Component } from 'react';
import ToDoList from "./ToDoList"
import PropTypes from 'prop-types';

class ToDos extends Component {
  render() {
  console.log('Shows the props located in ToDos.js')
  console.log(this.props.theProps)
    return this.props.theProps.map((theToDosProps) => (
           <ToDoList key ={theToDosProps.id} theToDoListProps={theToDosProps} markComplete={this.markComplete}/>
         ));
    }
  }

 // Good practice to have PropTypes - to this to whatever props are being passed down 
 ToDos.propTypes = {
  theProps: PropTypes.array.isRequired
 } 

export default ToDos; //For this component to be available in other places in the application