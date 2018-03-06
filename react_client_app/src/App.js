import React, { Component } from 'react';
import logo from './logo.svg';
import img from './new.jpg';
import Login from './component/loginComponent'
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }

    this.adminSignup = this.adminSignup.bind(this);
  }

  adminSignup(e) {
    e.preventDefault();
    browserHistory.push("/SignUp");
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: 'grey', height: '1300px' }}>
        <br /><br /><br />
        <header>
          <h1 className="App-title" style={{ color: '#ffffff' }}>POC Application</h1>
          <Button color='blue' onClick={this.adminSignup} style={{ marginLeft: '1200px' }}>SignUp/Login</Button>
        </header><br /><br /><br />
        <div className="container">
        <Message visible>
          Click on SignUp/Login button to view the SignUp/Login screen
        </Message>
        </div>
      </div>
    );
  }
}

export default App;
