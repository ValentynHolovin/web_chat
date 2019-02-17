import React, {Component} from "react";
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { inputLoginWasChanged, inputPasswordWasChanged, userSignIn } from "./actions/LoginActions"

class ChatRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        }
    }

    loginOnChangeHandler = (login) => {
        this.setState({
            login: login
        });
        this.props.inputUserNameWasChanged();
    };

    passwordOnChangeHandler = (password) => {
        this.setState({
            password: password
        });
        this.props.inputPasswordWasChanged();
    };

    onSubmitHandler = (event) => {
        const user = {login: this.state.login, password: this.state.password};
        this.props.userSignIn(user);
        event.preventDefault();

    };

    render() {
        return (
            <Form onSubmit={e => this.onSubmitHandler(e)}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text"
                                  placeholder="U entered"
                                  onChange={e => this.loginOnChangeHandler(e.target.value)}
                                  value={this.state.login}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  placeholder="Password"
                                  onChange={e => this.passwordOnChangeHandler(e.target.value)}
                                  value={this.state.password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enter chat
                </Button>
            </Form>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        userLogged: state.loginReducer.userLogged,
        loginError: state.loginReducer.loginError
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        inputUserNameWasChanged: (userName) => dispatch(inputLoginWasChanged(userName)),
        inputPasswordWasChanged: (password) => dispatch(inputPasswordWasChanged(password)),
        userSignIn: (user) => dispatch(userSignIn(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);