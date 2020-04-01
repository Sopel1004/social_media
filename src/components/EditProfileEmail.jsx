import React, { useState, useContext } from 'react';
import Section from '../styles/EditProfile';
import Form from '../styles/shared/form';
import UserContext from './UserContext';
import ErrorMessage from '../styles/shared/errorMessage';
import ApprovalMessage from '../styles/shared/approvalMessage';
import firebase from '../config/firebase';

const EditProfileEmail = ({ closeSection }) => {
  const currentUser = useContext(UserContext);
  const [inputValue, setInputValue] = useState(currentUser.email);
  const [currentPasswordValue, setCurrentPasswordValue] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [approval, setApproval] = useState(null);

  const changeEmail = async e => {
    e.preventDefault();
    setApproval('');
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputValue && currentPasswordValue) {
      if (reg.exec(inputValue)) {
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          currentPasswordValue
        );
        await user
          .reauthenticateWithCredential(credential)
          .then(async () => {
            await user
              .updateEmail(inputValue)
              .then(() => {
                setEmailError(null);
                setCurrentPasswordValue('');
                setApproval('Password has been changed.');
                setTimeout(() => setApproval(null), 2000);
              })
              .catch(error => setEmailError(error.message));
          })
          .catch(error => setEmailError(error.message));
      } else {
        setEmailError('Email is incorrect');
      }
    } else {
      setEmailError('Field is empty.');
    }
  };
  return (
    <Section>
      <Section.Header>
        <Section.ArrowIcon onClick={closeSection} />
        <Section.H3>Change email</Section.H3>
      </Section.Header>
      <Form onSubmit={changeEmail}>
        {approval && <ApprovalMessage>{approval}</ApprovalMessage>}
        <label htmlFor="emailInput">Email address</label>
        <Form.Input
          type="email"
          id="emailInput"
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
        />
        <label htmlFor="currentPasswordInput">Current password</label>
        <Form.Input
          type="password"
          id="currentPasswordInput"
          value={currentPasswordValue}
          onChange={e => setCurrentPasswordValue(e.currentTarget.value)}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        <Form.Button type="submit">Save</Form.Button>
      </Form>
    </Section>
  );
};

export default EditProfileEmail;
