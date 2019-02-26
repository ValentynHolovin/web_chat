import React, {Component} from "react";
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginWasChanged,
    passwordWasChanged,
    confirmPasswordWasChanged,
    emailWasChanged,
    userSignUp } from './actions/RegistrationActions'


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.userRegistered) {
            this.props.history.push('/login');
        }
    }

    loginChangeHandler = (login) => {
        this.setState( {
            login: login
        });
        this.props.loginWasChanged();
    };

    passwordChangeHandler = (password) => {
        this.setState( {
            password: password
        });
        this.props.passwordWasChanged();
    };

    confirmPasswordChangeHandler = (password) => {
        this.setState( {
            confirmPassword: password
        });
        this.props.confirmPasswordWasChanged();
    };

    firstNameChangeHandler = (firstName) => {
        this.setState( {
            firstName: firstName
        });
    };

    lastNameChangeHandler = (lastName) => {
        this.setState( {
            lastName: lastName
        });
    };

    emailChangeHandler = (email) => {
        this.setState( {
            email: email
        });
        this.props.emailWasChanged();
    };

    onSubmitHandler = (event) => {
        const user = {login: this.state.login,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
        };
        this.props.userSignUp(user);
        event.preventDefault();

    };


    render() {
        return (
            <div className="signUpPage">
                <Form onSubmit={e => this.onSubmitHandler(e)}>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter login"
                                      onChange={e => this.loginChangeHandler(e.target.value)}
                                      value={this.state.login}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      onChange={e => this.passwordChangeHandler(e.target.value)}
                                      value={this.state.password}
                        />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Confirm password"
                                      onChange={e => this.confirmPasswordChangeHandler(e.target.value)}
                                      value={this.state.confirmPassword}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="First name"
                                      onChange={e => this.firstNameChangeHandler(e.target.value)}
                                      value={this.state.firstName}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Last name"
                                      onChange={e => this.lastNameChangeHandler(e.target.value)}
                                      value={this.state.lastName}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                      placeholder="Email"
                                      onChange={e => this.emailChangeHandler(e.target.value)}
                                      value={this.state.email}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        emailIsUnique: state.signUpReducer.emailIsUnique,
        loginIsUnique: state.signUpReducer.loginIsUnique,
        passwordConfirmed: state.signUpReducer.passwordConfirmed,
        userRegistered: state.signUpReducer.userRegistered
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginWasChanged: () => dispatch(loginWasChanged()),
        passwordWasChanged: () => dispatch(passwordWasChanged()),
        confirmPasswordWasChanged: () => dispatch(confirmPasswordWasChanged()),
        emailWasChanged: () => dispatch(emailWasChanged()),
        userSignUp: (user) => dispatch(userSignUp(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);