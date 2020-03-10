import React, { Component } from 'react';
import { Button } from 'antd';

class Dashboard extends Component {
    logoutHundler=(e)=>{
       localStorage.removeItem('token')
       this.props.history.push('/login')
       alert("Session Expire ! you can check By changing route ")

    }
  render() {
    return (
      <div> <center> Welcome To  Dashboard 

    <Button onClick={this.logoutHundler}> Logout</Button></center> 
    </div>
    );
  }
}

export default Dashboard;
