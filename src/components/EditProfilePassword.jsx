import React, { useState } from 'react';
import Section from '../styles/EditProfile';
import Form from '../styles/shared/form';
import ErrorMessage from '../styles/shared/errorMessage';
import ApprovalMessage from '../styles/shared/approvalMessage';
import firebase from '../config/firebase';

const EditProfilePassword = ({ closeSection }) => {
  const [currentPasswordValue, setCurrentPasswordValue] = useState('');
  const [newPasswordValue, setNewPasswordValue] = useState('');
  const [rePasswordValue, setRePasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [approval, setApproval] = useState(null);

  const changePassword = async (e) => {
    e.preventDefault();
    setApproval('');
    if (currentPasswordValue && newPasswordValue && rePasswordValue) {
      if (newPasswordValue === rePasswordValue) {
        const user = firebase.auth().currentUser;
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          currentPasswordValue
        );
        await user
          .reauthenticateWithCredential(credential)
          .then(async () => {
            await user
              .updatePassword(newPasswordValue)
              .then(() => {
                setPasswordError(null);
                setApproval('Password has been changed.');
                setTimeout(() => setApproval(null), 2000);
              })
              .catch((error) => setPasswordError(error.message));
          })
          .catch((error) => setPasswordError(error.message));
      } else {
        setPasswordError(`Passwords isn't same.`);
      }
    } else {
      setPasswordError('Field is empty.');
    }
  };
  return (
    <Section>
      <Section.Header>
        <Section.ArrowIcon
          onClick={closeSection}
          tabIndex={0}
          role="button"
          aria-label="Close"
          onKeyDown={(e) => e.key === 'Enter' && closeSection}
        />
        <Section.H3>Change password</Section.H3>
      </Section.Header>
      <Form onSubmit={changePassword}>
        {approval && <ApprovalMessage>{approval}</ApprovalMessage>}
        <label htmlFor="currentPasswordInput">Current password</label>
        <Form.Input
          type="password"
          id="currentPasswordInput"
          value={currentPasswordValue}
          onChange={(e) => setCurrentPasswordValue(e.currentTarget.value)}
        />
        <label htmlFor="newPasswordInput">New password</label>
        <Form.Input
          type="password"
          id="newPasswordInput"
          value={newPasswordValue}
          onChange={(e) => setNewPasswordValue(e.currentTarget.value)}
        />
        <label htmlFor="repasswordInput">Re-write new password</label>
        <Form.Input
          type="password"
          id="repasswordInput"
          value={rePasswordValue}
          onChange={(e) => setRePasswordValue(e.currentTarget.value)}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <Form.Button type="submit">Save</Form.Button>
      </Form>
    </Section>
  );
};

export default EditProfilePassword;
