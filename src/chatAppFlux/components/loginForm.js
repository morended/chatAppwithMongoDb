import  React,{Component} from 'react';
import UserAction from '../action/userActions';

export default class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        UserAction.loginUser(this.state);
        this.state={
            username:"",
            password:""
        }
    }
    render(){
        return(
            <form role='form' onSubmit={this.onSubmit}>
                <h1>Login to your account</h1>
                <div className='row'>
                  <div className="form-group col-sm-4">
                      <label className="control-label">Username</label>
                      <input
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChange}
                          className="form-control"
                      />
                  </div>
                </div>

                <div className='row'>
                  <div className="form-group col-sm-4">
                      <label className="control-label">Password</label>
                      <input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          className="form-control"
                      />
                  </div>
                </div>


                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Login
                    </button>
                </div>
            </form>

        )

    }
}
