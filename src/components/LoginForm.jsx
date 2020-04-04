import React, { useState } from 'react';
import firebase from '../config/firebase';
import { withRouter } from 'react-router';
import StyledLoginForm from '../styles/LoginForm';

const LoginForm = ({ history, closeLoginForm }) => {
  const [emailValue, setEmailValue] = useState('test@xx.xx');
  const [passwordValue, setPasswordValue] = useState('123456');
  const [error, setError] = useState(null);

  const SignIn = async e => {
    e.preventDefault();
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValue && passwordValue) {
      if (reg.exec(emailValue)) {
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
          history.push(`/home`);
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError(`Email isn't correct.`);
      }
    } else {
      setError('Field is empty.');
    }
  };
  return (
    <StyledLoginForm>
      {/*<StyledLoginForm.LeftArrow
        onClick={closeLoginForm}
        tabIndex={0}
        aria-label="Back"
        role="button"
      />*/}
      <StyledLoginForm.H2>Sign in</StyledLoginForm.H2>
      <StyledLoginForm.Form onSubmit={SignIn}>
        <label htmlFor="email">Email</label>
        <StyledLoginForm.Input
          type="email"
          id="email"
          onChange={e => setEmailValue(e.currentTarget.value)}
          value={emailValue}
          required
        ></StyledLoginForm.Input>
        <label htmlFor="password">Password</label>
        <StyledLoginForm.Input
          type="password"
          id="password"
          onChange={e => setPasswordValue(e.currentTarget.value)}
          value={passwordValue}
          required
        ></StyledLoginForm.Input>
        {error && (
          <StyledLoginForm.ErrorMessage>{error}</StyledLoginForm.ErrorMessage>
        )}
        <StyledLoginForm.Button type="submit">Sign in</StyledLoginForm.Button>
        <StyledLoginForm.Span>
          New user?{'\t'}
          <StyledLoginForm.DirectLink tabIndex={0} onClick={closeLoginForm}>
            <b>Sign Up</b>
          </StyledLoginForm.DirectLink>
        </StyledLoginForm.Span>
      </StyledLoginForm.Form>
    </StyledLoginForm>
  );
};

export default withRouter(LoginForm);
