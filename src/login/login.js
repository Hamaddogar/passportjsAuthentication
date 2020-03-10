import React from "react";
import { Input, Tooltip, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import crypto from 'crypto'
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    userEmail: "",
    userPassword: "",
    
  };

}
  userEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  userPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  LoginFunction = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/loginuser/login", {
        username: this.state.userEmail,
        password: this.state.userPassword
      })
      .then((response)=> {
        
       this.setState({loginResponse: response.data})
      })
      .catch((error)=> {
        console.log(error);
      });
  };

  render() {
     if(this.state.loginResponse)
     {
        console.log(this.state.loginResponse)
      localStorage.setItem('sessionExpire',  
      crypto.createHash('sha1').digest('hex')+Math.random(this.state.loginResponse.data._id));
       this.props.history.push('/dashboard')

     }
     
    return (
      <div>
           <center><h3> This is login Page</h3>
        <Input
          placeholder="Enter your Email"
         
          onChange={this.userEmail}
        />
        <br />
        <br />

        <br />
        <br />

        <Input
          placeholder="Enter your userpassword"
          onChange={this.userPassword}
        />

        <Button onClick={this.LoginFunction}> login </Button>
        <Button onClick={()=>{this.props.history.push('/signup')}}>signup </Button>

        </center>
      </div>
    );
  }
}

export default Login;
