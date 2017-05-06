"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
//import ChatApp from './ChatAppFlux/components/ChatApp.js'
import LoginPage from './ChatAppFlux/components/loginPage.js';
import SignupPage from './ChatAppFlux/components/signupPage.js';

class MainComponent extends React.Component {
  render() {
     //return <ChatApp/>;
     return (
       <div className='container'>
        <LoginPage/>
        <br/>
        <SignupPage/>
      </div>
     );
  }
}

ReactDOM.render(<MainComponent/>, document.getElementById('app'));
