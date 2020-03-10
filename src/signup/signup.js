import React from "react";
import { Input, Tooltip, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
 import axios from 'axios'

class Signup extends React.Component {
  state = {
    userName: "",
    userEmail: "",
    userPassword: ""
  };

  userName = e => {
    this.setState({ userName: e.target.value });
  };
  userEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  userPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  signUpFunction = e => {
    e.preventDefault();

    axios
    .post('http://localhost:5000/api/registeruser/signup', {
      userName:this.state.userName,
      userEmail:this.state.userEmail,
      userPassword:this.state.userPassword,
    })
    .then(function(response) {
      console.log("this is console",response.data); 
       response.data.success==true?alert("Successfully !You have Signup"):alert("please Signup carefully")

    })
    .catch(function(error) {
      console.log(error);
    });
   
  };

  render() {
   
 
    
    return (
      <div>

        <center><h3> This is Signup Page</h3>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={this.userName}
        />
        <br />
        <br />
        <Input placeholder="Enter your userEmail" onChange={this.userEmail} />

        <br />
        <br />

        <Input
          placeholder="Enter your userpassword"
          onChange={this.userPassword}
        />

        <Button onClick={this.signUpFunction}> Signup</Button>
        <Link to="/login">login</Link>


        <br/>
      
        </center>
      </div>
    );
  }
}


    export default (Signup);
