"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import chatActions from '../action/chatActions'

class Student extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  _handleOnChange = (e) => {
     this.setState({
       message:e.target.value
     });
   }

   _handleClick = (e) => {
      e.preventDefault();
      chatActions.updateMessages({
        id: this.props.id,
        message: this.state.message
      });

      this.setState({
        message: ""
      });
   }

   render() {
     return (
        <div>
          Student {this.props.id}:
          <input
            type="text"
            value={this.state.message}
            onChange={this._handleOnChange}/>

          <button
            onClick={this._handleClick}>
            Send
          </button>
        </div>
     );
  }
}

export default Student;
