import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import LoginAction from '../action';


class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: ''
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
        //console.log("nextProps>>>>>>>>> ",JSON.stringify(nextProps));
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

    signup(e) {
        e.preventDefault();
        var data = {
            "name": this.state.name,
            "user_type": "USER",
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
                        <Form.Group widths='equal'>
                            <Form.Field id='form-input-control-first-name' onChange={this.handleName.bind(this)} control={Input} label='UserName' placeholder='Username' />
                            <Form.Field id='form-input-control-last-name ' onChange={this.handleEmail.bind(this)} control={Input} label='Email' placeholder='some@domain.com' />
                        </Form.Group>
                        <Form.Field id='form-textarea-control-opinion' onChange={this.handlePassword.bind(this)} type="password" control={Input} label='Password' placeholder='********' />
                        <Button positive onClick={this.signup}>Sign Up</Button>
                        <Button color='grey'>Cancel</Button><br />
                        <span>U already registered?</span><Button color='blue' onClick={this.register.bind(this)} style={{ marginLeft: '10px', marginTop: '5px' }}>Login</Button>
                    </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);

//export default LoginComponent;