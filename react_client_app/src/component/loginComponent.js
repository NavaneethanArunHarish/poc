import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import LoginAction from '../action';
import { Form, Button, Input, Message, Label } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';


const options = [
  { key: 'a', text: 'ADMIN', value: 'ADMIN' },
  { key: 'u', text: 'USER', value: 'USER' },
]

class LoginComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      role:''
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signup = this.signup.bind(this);
  }

  componentWillMount() {
    //this.props.createAction.getEvent();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.signUpSuccess) {
      var success = nextProps.signUpSuccess.message;
      if(nextProps.signUpSuccess.message === "Account Created Successfully") {
        toast.success("Account Created Successfully");
      } else {
        toast.error("Account Creation Faileds");
      }
    }
  };

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleChange = (e, { value }) => this.setState({ role: value })

  signup(e) {
    e.preventDefault();
    var data = {
      "name": this.state.name,
      "user_type": this.state.role,
      "email": this.state.email,
      "password": this.state.password
    }
    this.props.LoginAction.signUp(data);
  }

  register(e) {
    e.preventDefault();
    browserHistory.push('/Login');
  }


  render() {
    return (
      <center>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-md-8">

          <Message header="SignUp" icon="pencil" />
          <Form>
            <table>
            <tr>
            <Form.Group widths='equal'>
              <td><label>UserName</label></td>
              <td style={{marginLeft: '42px'}}><Form.Field id='form-input-control-first-name' onChange={this.handleName.bind(this)} control={Input} placeholder='Username'/></td>
            </Form.Group>
            </tr>
            <tr>
            <Form.Group widths='equal'>
              <td><label>Email</label></td>
              <td style={{marginLeft: '74px'}}><Form.Field id='form-input-control-last-name ' onChange={this.handleEmail.bind(this)} control={Input} placeholder='some@domain.com'/></td>
            </Form.Group>
            </tr>
            <tr>
            <Form.Group widths='equal'>
              <td><label>Password</label></td>
              <td style={{marginLeft: '48px'}}><Form.Field id='form-textarea-control-opinion' onChange={this.handlePassword.bind(this)} type="password" control={Input} placeholder='********'/></td>
            </Form.Group>
            </tr>
            <tr>
            <Form.Group widths='equal'>
              <td><label>Role</label></td>
              <td style={{marginLeft: '80px'}}><Form.Select options={options} placeholder='Role' onChange={this.handleChange.bind(this)}/></td>
            </Form.Group>
            </tr>
              </table>
            <Button positive onClick={this.signup}>Sign Up</Button>
            <Button color='grey'>Cancel</Button><br />
            <span>U already registered?</span><Button color='blue' onClick={this.register.bind(this)} style={{ marginLeft: '10px', marginTop: '5px' }}>Login</Button>
          </Form>
          <ToastContainer
                    position="top-center"
                    autoClose={800}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />
        </div>
      </center>


    );
  }
}

function mapStateToProps(state, props) {
  return {
    signUpSuccess: state.login.signupSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    LoginAction: bindActionCreators(LoginAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

//export default LoginComponent;