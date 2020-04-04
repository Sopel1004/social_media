import React, { useState, useEffect, useContext } from 'react';
import Section from '../styles/EditProfile';
import Form from '../styles/shared/form';
import UserContext from './UserContext';
import ErrorMessage from '../styles/shared/errorMessage';
import ApprovalMessage from '../styles/shared/approvalMessage';
import firebase from '../config/firebase';

const EditProfileEmail = ({ closeSection }) => {
  const currentUser = useContext(UserContext);
  const [fullNameValue, setFullNameValue] = useState('');
  const [birthValue, setBirthValue] = useState('');
  const [error, setError] = useState(null);
  const [approval, setApproval] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setFullNameValue(doc.data().fullName);
        setBirthValue(doc.data().dateOfBirth);
      });
  }, [currentUser.uid]);

  const changeProfileInfo = async (e) => {
    e.preventDefault();
    setApproval('');
    if (fullNameValue && birthValue) {
      firebase
        .firestore()
        .collection('users')
        .doc(currentUser.uid)
        .update({
          fullName: fullNameValue,
          dateOfBirth: birthValue,
        })
        .then(() => {
          setApproval('Data has been updated.');
          setError(null);
          setTimeout(() => setApproval(null), 2000);
        })
        .catch((error) => setError(error.message));
    } else {
      setError('Field is empty.');
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
        <Section.H3>Change profile info</Section.H3>
      </Section.Header>
      <Form onSubmit={changeProfileInfo}>
        {approval && <ApprovalMessage>{approval}</ApprovalMessage>}
        <label htmlFor="fullNameInput">Full name</label>
        <Form.Input
          type="text"
          id="fullNameInput"
          value={fullNameValue}
          onChange={(e) => setFullNameValue(e.currentTarget.value)}
        />
        <label htmlFor="birthInput">Date of birth</label>
        <Form.Input
          type="date"
          id="birthInput"
          value={birthValue}
          onChange={(e) => setBirthValue(e.currentTarget.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form.Button type="submit">Save</Form.Button>
      </Form>
    </Section>
  );
};

export default EditProfileEmail;
