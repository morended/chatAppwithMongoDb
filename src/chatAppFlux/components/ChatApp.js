"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student.js';
import chatStore from '../store/chatStore.js'

class ChatApp extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    chatStore.listen(this.onChange)
  }

  componentWillUnmount() {
    chatStore.unlisten(this.onChange)
  }

  onChange = (state) => {
    this.setState({
      messages:state.messages
    });
  }

  render() {
    return (
      <div>
        <br/>
        <Student id="1"/>
        <Student id="2"/><br/>

        <h3>Chat History: </h3>

         {this.state.messages.map((msg, index) => (
           <p key={index}><b>Student {msg.id}</b>: {msg.message} </p>
         ))}
      </div>

    );
  }
}
export default ChatApp;
