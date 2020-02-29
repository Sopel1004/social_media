import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import { withRouter } from 'react-router';

const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-rows: 32px auto;
    justify-items: center;
    align-items: center;
    background: rgb(222, 52, 121);
    background: linear-gradient(
        180deg,
        rgba(222, 52, 121, 1) 0%,
        rgba(139, 35, 117, 1) 100%
    );
`;

const StyledLeftArrowIcon = styled(LeftArrowIcon)`
    width: 32px;
    height: 32px;
    stroke: #fff;
    stroke-width: 2px;
    justify-self: start;
`;

const StyledH2 = styled.h2`
    font-size: 2em;
    color: #fff;
`;

const StyledForm = styled.form`
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 60%;
    padding: 5px;
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 20px;
    margin: 5px 0 20px 0;
    color: #fff;

    &:focus {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const StyledButton = styled.button`
    width: 60%;
    padding: 5px;
    background-color: #fff;
    color: #de3479;
    font-size: 1.25em;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    margin-top: 10px;
`;

const ErrorMessage = styled.p`
    width: 80%;
    text-align: center;
    font-size: 0.75em;
`;

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
        <StyledSection>
            <StyledLeftArrowIcon onClick={closeRegisterForm} />
            <StyledH2>Create account</StyledH2>
            <StyledForm onSubmit={SignUp}>
                <label htmlFor="email">Email</label>
                <StyledInput
                    type="email"
                    id="email"
                    onChange={e => setEmailValue(e.currentTarget.value)}
                    value={emailValue}
                    required
                ></StyledInput>
                <label htmlFor="password">Password</label>
                <StyledInput
                    type="password"
                    id="password"
                    onChange={e => setPasswordValue(e.currentTarget.value)}
                    value={passwordValue}
                    required
                ></StyledInput>
                <label htmlFor="fullName">Full name</label>
                <StyledInput
                    type="type"
                    id="fullName"
                    onChange={e => setFullNameValue(e.currentTarget.value)}
                    value={fullNameValue}
                    required
                ></StyledInput>
                <label htmlFor="date">Date of birth</label>
                <StyledInput
                    type="date"
                    id="date"
                    onChange={e => setDateValue(e.currentTarget.value)}
                    value={dateValue}
                    required
                ></StyledInput>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <StyledButton type="submit">Sign up</StyledButton>
            </StyledForm>
        </StyledSection>
    );
};

export default withRouter(RegisterForm);
