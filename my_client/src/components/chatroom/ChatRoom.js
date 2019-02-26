import React, {Component} from "react";
import {connect} from 'react-redux';
import { sendMessage, receiveMessage, userConnected } from "./actions/ChatRoomActions";

class ChatRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMessage: '',
            messages: []
        }
    }

    componentWillMount() {
        if (!this.props.userLogged) {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        if (this.props.userLogged) {
            this.props.userConnected();
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
        login: state.loginReducer.login,
        receivedMessage: state.chatRoomReducer.receivedMessage
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        userConnected: () => dispatch(userConnected())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);