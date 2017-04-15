"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatAppFlux/components/ChatApp.js'

class MainComponent extends React.Component {
  render() {
     return <ChatApp/>;
  }
}

ReactDOM.render(<MainComponent/>, document.getElementById('app'));
