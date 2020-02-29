import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import firebase from '../config/firebase';
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
    margin-top: 20px;
`;

const ErrorMessage = styled.p`
    width: 80%;
    text-align: center;
    font-size: 0.75em;
`;

const LoginForm = ({ history, closeLoginForm }) => {
    const [emailValue, setEmailValue] = useState('test@xx.xx');
    const [passwordValue, setPasswordValue] = useState('123456');
    const [error, setError] = useState(null);
    const SignIn = async e => {
        e.preventDefault();
        try {
            await firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(() =>
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(emailValue, passwordValue)
                )
                .then(() => {
                    setEmailValue('');
                    setPasswordValue('');
                    setError(null);
                });
            history.push('/home');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <StyledSection>
            <StyledLeftArrowIcon onClick={closeLoginForm} />
            <StyledH2>Sign in</StyledH2>
            <StyledForm onSubmit={SignIn}>
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
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <StyledButton type="submit">Sign in</StyledButton>
            </StyledForm>
        </StyledSection>
    );
};

export default withRouter(LoginForm);
