import React, {Component} from "react";
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ChatRoom extends Component {
    componentWillMount() {
        if (!this.props.userLogged) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <p>This is chat room page</p>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        userLogged: state.loginReducer.userLogged,
        loginError: state.loginReducer.loginError
    };
};


export default connect(mapStateToProps)(ChatRoom);