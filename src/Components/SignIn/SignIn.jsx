import React from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import FormButton from '../FormButton/FormButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log('error', error);
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    handleChange={this.handleChange}
                    label="email"
                    type="email"
                    name="email"
                    value={this.state.email}
                    required/>

                    <FormInput
                    handleChange={this.handleChange}
                    label="password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    required/>

                    <div className="buttons">
                        <FormButton type="submit">Sign In</FormButton>
                        <FormButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</FormButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;