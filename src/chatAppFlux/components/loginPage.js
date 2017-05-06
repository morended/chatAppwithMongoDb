import  React,{Component} from 'react';
import LoginForm from './loginForm';
import ChatStore from '../store/chatStore';

export default class signupPage extends Component{
    constructor() {
        super();
        this.state = {
            loginMessage: ''
        };
    }
    componentDidMount() {
        ChatStore.listen(this.onChange)
    }

    componentWillUnmount() {
        ChatStore.unlisten(this.onChange)
    }

    onChange = (state) => {
        this.setState({
            loginMessage:state.loginMessage
        });
    }
    render(){
        return(
            <div className="row">
                <div>
                    <LoginForm/>
                    <div id="login">
                        {this.state.loginMessage}
                    </div>
                </div>
            </div>
        )
    }
}
