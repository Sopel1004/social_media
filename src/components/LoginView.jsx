import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 100px 50px 100px;
    justify-items: center;
    align-items: center;
    background: rgb(222, 52, 121);
    background: linear-gradient(
        180deg,
        rgba(222, 52, 121, 1) 0%,
        rgba(139, 35, 117, 1) 100%
    );
`;

const StyledWelcomeText = styled.p`
    color: #fff;
    font-size: 2em;
    font-weight: 700;
`;

const StyledText = styled.p`
    color: #fff;
`;

const SignInButton = styled.button`
    width: 50%;
    padding: 5px;
    background-color: #fff;
    color: #de3479;
    font-size: 1.25em;
    font-weight: 500;
    border: none;
    border-radius: 20px;
    align-self: end;
`;

const SignUpButton = styled(SignInButton)`
    align-self: start;
`;

const LoginView = () => {
    const [loginFormIsActive, setLoginFormIsActive] = useState(false);
    const [registerFormIsActive, setRegisterFormIsActive] = useState(false);

    return (
        <StyledSection>
            <StyledWelcomeText>Welcome</StyledWelcomeText>
            <SignInButton
                onClick={() => setLoginFormIsActive(!loginFormIsActive)}
            >
                Sign in
            </SignInButton>
            <StyledText>- OR -</StyledText>
            <SignUpButton
                onClick={() => setRegisterFormIsActive(!registerFormIsActive)}
            >
                Sign up
            </SignUpButton>
            {loginFormIsActive && (
                <LoginForm
                    closeLoginForm={() =>
                        setLoginFormIsActive(!loginFormIsActive)
                    }
                />
            )}
            {registerFormIsActive && (
                <RegisterForm
                    closeRegisterForm={() =>
                        setRegisterFormIsActive(!registerFormIsActive)
                    }
                />
            )}
        </StyledSection>
    );
};

export default LoginView;
