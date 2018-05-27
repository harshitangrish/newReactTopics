import React, {Component} from "react";
import './Login.css';
import Helper from './Helper';

class Login extends Component {

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
    }

    setEmail = (e) => { 
        this.setState({
            email:e.target.value
        });
    }
    setPassword = (e) => { 
        this.setState({
            password:e.target.value
        });
    }

    loginUser = ()=> {
        let body=JSON.stringify({
            email:this.state.email,
            password:this.state.password
        });
        let res = Helper("http://vidyapeethclasses.in/api/v1/login",'POST',body);

        res.then((res)=>{
            if(res.access_token !== undefined){
                this.props.history.push('/dashboard');
            }
            else{
                alert("wrong username/password");
            }
        });
    }

    render() {
        return (
            <div className="main-container height clearfix">
                <div className="row clearfix">
                    <div className="login-container center">
                        <div className="top-bar-container clearfix"/>
                        <div className="text-container clearfix">
                            <div className="text clearfix center">
                                <h1>enter your details to login</h1>
                            </div>
                        </div>
                        <div className="form-container clearfix">
                            <div className="Row clearfix">
                                <input type="text" placeholder="Username" onKeyUp={this.setEmail}/>
                                <input type="password" placeholder="Password" onKeyUp={this.setPassword}/>
                            </div>
                            <div className="Row clearfix">
                                <div className="button" onClick={this.loginUser}>
                                    <span>login</span>
                                </div>
                            </div>
                            <div className="Row clearfix">
                                <h4 className="tagh4">forgot password</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;