import React, { useState } from 'react';
import LoginPage from '../styles/LoginPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginView = () => {
    const [loginFormIsActive, setLoginFormIsActive] = useState(false);
    const [registerFormIsActive, setRegisterFormIsActive] = useState(false);
    return (
        <LoginPage>
            {!loginFormIsActive && !registerFormIsActive && (
                <>
                    <LoginPage.WelcomeText>Welcome</LoginPage.WelcomeText>
                    <LoginPage.Button
                        onClick={() => setLoginFormIsActive(!loginFormIsActive)}
                    >
                        Sign in
                    </LoginPage.Button>
                    <p>- OR -</p>
                    <LoginPage.Button
                        onClick={() =>
                            setRegisterFormIsActive(!registerFormIsActive)
                        }
                    >
                        Sign up
                    </LoginPage.Button>
                </>
            )}
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
        </LoginPage>
    );
};

export default LoginView;
