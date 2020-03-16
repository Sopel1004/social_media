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
    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() =>
          firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        )
        .then(() => {
          setEmailValue('');
          setPasswordValue('');
          setError(null);
        });
      history.push(`${process.env.PUBLIC_URL}/home`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <StyledLoginForm>
      <StyledLoginForm.LeftArrow
        onClick={closeLoginForm}
        tabIndex={0}
        aria-label="Back"
        role="button"
      />
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
      </StyledLoginForm.Form>
    </StyledLoginForm>
  );
};

export default withRouter(LoginForm);
