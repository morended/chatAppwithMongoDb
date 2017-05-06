import alt from "../alt.js"
import chatActions from '../action/chatActions.js'
import userActions from '../action/userActions.js'

class chatStore {
  constructor() {
    this.currentState = [];
    this.bindListeners({
      handleMessage: chatActions.UPDATE_MESSAGES,
      handleRegistration: userActions.REGISTER_USER,
      handleLogin: userActions.LOGIN_USER
    });
  }

  handleMessage(messages) {
    this.currentState[messages] = messages.data;
  }

  handleRegistration(messages) {
    this.currentState[messages] = messages.data;
  }

  handleLogin(messages) {
    this.currentState[messages] = messages.data;
  }
}

export default alt.createStore(chatStore);
