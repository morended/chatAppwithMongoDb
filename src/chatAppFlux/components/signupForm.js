import  React,{Component} from 'react';
import UserAction from '../action/userActions';

export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        UserAction.registerUser(this.state);
        this.state={
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Create your account</h1>
                <div className="row">
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
                      <label className="control-label">Email</label>
                      <input
                          type="text"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          className="form-control"
                      />
                  </div>
                </div>
                <div className="row">
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

                <div className="row">
                  <div className="form-group col-sm-4">
                      <label className="control-label">Confirm Password</label>
                      <input
                          type="password"
                          name="confirmPassword"
                          value={this.state.confirmPassword}
                          onChange={this.onChange}
                          className="form-control"
                      />
                  </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}
