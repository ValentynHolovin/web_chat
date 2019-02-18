import React, {Component} from "react";

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


    render() {
        return (
            <p>This is sign up page</p>
        )
    }
}

export default SignUp;