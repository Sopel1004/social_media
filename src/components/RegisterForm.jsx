import React, { useState } from 'react';
import firebase from '../config/firebase';
import { withRouter } from 'react-router';
import StyledRegisterForm from '../styles/LoginForm';

const RegisterForm = ({ history, closeRegisterForm }) => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [fullNameValue, setFullNameValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [error, setError] = useState(null);
    const SignUp = async e => {
        e.preventDefault();
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(emailValue, passwordValue)
                .then(cred => {
                    return firebase
                        .firestore()
                        .collection('users')
                        .doc(cred.user.uid)
                        .set({
                            fullName: fullNameValue,
                            dateOfBirth: dateValue,
                            followers: [],
                            following: []
                        });
                })
                .then(() => {
                    setEmailValue('');
                    setPasswordValue('');
                    setFullNameValue('');
                    setDateValue('');
                    setError(null);
                });
            history.push('/home');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <StyledRegisterForm>
            <StyledRegisterForm.LeftArrow
                onClick={closeRegisterForm}
                tabIndex={0}
                aria-label="Back"
                role="button"
            />
            <StyledRegisterForm.H2>Create account</StyledRegisterForm.H2>
            <StyledRegisterForm.Form onSubmit={SignUp}>
                <label htmlFor="email">Email</label>
                <StyledRegisterForm.Input
                    type="email"
                    id="email"
                    onChange={e => setEmailValue(e.currentTarget.value)}
                    value={emailValue}
                    required
                ></StyledRegisterForm.Input>
                <label htmlFor="password">Password</label>
                <StyledRegisterForm.Input
                    type="password"
                    id="password"
                    onChange={e => setPasswordValue(e.currentTarget.value)}
                    value={passwordValue}
                    required
                ></StyledRegisterForm.Input>
                <label htmlFor="fullName">Full name</label>
                <StyledRegisterForm.Input
                    type="type"
                    id="fullName"
                    onChange={e => setFullNameValue(e.currentTarget.value)}
                    value={fullNameValue}
                    required
                ></StyledRegisterForm.Input>
                <label htmlFor="date">Date of birth</label>
                <StyledRegisterForm.Input
                    type="date"
                    id="date"
                    onChange={e => setDateValue(e.currentTarget.value)}
                    value={dateValue}
                    required
                ></StyledRegisterForm.Input>
                {error && (
                    <StyledRegisterForm.ErrorMessage>
                        {error}
                    </StyledRegisterForm.ErrorMessage>
                )}
                <StyledRegisterForm.Button type="submit">
                    Sign up
                </StyledRegisterForm.Button>
            </StyledRegisterForm.Form>
        </StyledRegisterForm>
    );
};

export default withRouter(RegisterForm);
