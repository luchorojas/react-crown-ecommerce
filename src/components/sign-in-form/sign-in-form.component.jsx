import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.uils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";

const defauldFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const handleErrors = (error) => {
    const errors = {
        'auth/wrong-password': "Wrong Password",
        'auth/user-not-found': "Wrong User"
    }

    if (! errors[error.code]) { 
        return 'Sign In error: '+ error;
    }
    return errors[error.code];
}

const SignInForm = () => {
    const [ formFields, setFormFields] = useState(defauldFormFields);
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defauldFormFields);
    }

    const signInGoogleUser = async () => await signInWithGooglePopup(); 

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (e) {
            alert(handleErrors(e));
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span >
                Sing in with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button children="Sign In" type="submit"/>
                    <Button onClick={signInGoogleUser} buttonType="google" type="button">Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;