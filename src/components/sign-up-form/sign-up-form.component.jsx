import { useState } from "react";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from  './sign-up-form.styles'

const defauldFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields] = useState(defauldFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defauldFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Paswords do not match");
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
                   
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        } catch (e) {
            if (e.code === "auth/email-already-in-use") {
                alert("Email already in use")
            } else {
                console.log('User creation error: ', e);
            } 
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span >
                Sing up with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name="password" value={confirmPassword} />
                <Button children="Sign Up" type="submit"/>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;