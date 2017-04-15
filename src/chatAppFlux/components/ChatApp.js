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
   this.onChange=this.onChange.bind(this);
  }

  componentDidMount() {
    chatStore.listen(this.onChange)
  }

  componentWillUnmount() {
    chatStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState({
      messages:state.messages
    });
  }

  render() {
    return (
      <div>
        <Student id="Student 1: " />
        <Student id="Student 2: "/><br/>

        <h2>Chat History: </h2>

         {this.state.messages.map((message, index) => (
         <p key={index}>{message.id}:{message.message} </p>
         ))}
      </div>

    );
  }
}
export default ChatApp;
