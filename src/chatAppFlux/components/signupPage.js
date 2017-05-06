import  React,{Component} from 'react';
import LoginForm from './loginForm';
import SignupForm from './signupForm';
import ChatStore from '../store/chatStore';

export default class signupPage extends Component {
    constructor() {
        super();
        this.state = {
            registerMessage: ''
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
            registerMessage:state.registerMessage
        });
    }
    render(){
        return(
            <div className="row">
                <div>
                    <SignupForm/>
                    <div id="register">
                    {this.state.registerMessage}
                </div>
                </div>
            </div>
        )
    }
}
