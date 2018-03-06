import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { Form, Button, Input, Message } from 'semantic-ui-react'
import LoginAction from '../action';


class RegisterComponent extends React.Component {

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
        this.login = this.login.bind(this);
    }

    componentWillMount() {
        //this.props.createAction.getEvent();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.registerSuccess) {
            var userType = nextProps.registerSuccess.result.user.user_type;
            console.log("userType",userType);
            if(userType === "ADMIN") {
                browserHistory.push('/AdminDashboard');
            } else {
                browserHistory.push('/UserDashboard');
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

    login(e) {
        e.preventDefault();
        var data = {
            "email": this.state.email,
            "password": this.state.password
        }
        this.props.LoginAction.register(data);
    }


    render() {
        return (
            <center>
                <br></br>
                <br></br>
                <br></br>
                <div className="col-md-8">

                    <Message header="Login" icon="pencil" />
                    <Form>
                        <Form.Field id='form-input-control-last-name ' onChange={this.handleEmail.bind(this)} control={Input} label='Email' placeholder='some@domain.com' />
                        <Form.Field id='form-textarea-control-opinion' onChange={this.handlePassword.bind(this)} type="password" control={Input} label='Password' placeholder='********' />
                        <Button positive onClick={this.login.bind(this)}>Login</Button>
                        <Button color='grey'>Cancel</Button>
                    </Form>
                </div>
            </center>

        );
    }
}

function mapStateToProps(state, props) {
    return {
        registerSuccess: state.login.registerSuccess
    };
}

function mapDispatchToProps(dispatch) {
    return {
        LoginAction: bindActionCreators(LoginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

//export default LoginComponent;