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

   _handleClick = () => {
      chatActions.updateMessages({
        id: this.props.id,
        message: this.state.message
      });

      this.state.message = "";
   }

   render() {
     return (
        <div>
          {this.props.id}
          <input type="text"  value={this.state.message} onChange={this._handleOnChange}/>
          <input type="Button" value="send"  onClick={this._handleClick}/>
        </div>
     );
  }
}

export default Student;
