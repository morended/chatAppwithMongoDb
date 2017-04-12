import alt from "../alt.js"

import chatActions from '../action/chatActions.js'

class chatStore {
  constructor() {
    this.messages = [];

    this.bindListeners({
      handleMessage: chatActions.UPDATE_MESSAGES
    });
  }

  handleMessage(messages) {
    console.log("hiii");
    console.log(messages.data);
    
    this.messages = messages.data;


    
  }
}

export default alt.createStore(chatStore);