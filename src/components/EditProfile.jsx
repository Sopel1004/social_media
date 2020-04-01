import React, { useState } from 'react';
import Section from '../styles/EditProfile';
import List from '../styles/EditProfile/list';
import Span from '../styles/EditProfile/span';
import EditProfilePassword from './EditProfilePassword';
import EditProfileEmail from './EditProfileEmail';
import EditProfileInfo from './EditProfileInfo';
import { ReactComponent as MailIcon } from '../images/mail.svg';
import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as ShieldIcon } from '../images/shield.svg';
import { ReactComponent as LogOutIcon } from '../images/log-out.svg';
import firebase from '../config/firebase';

const EditProfile = ({ closeSection }) => {
  const [isActiveEditEmail, setIsActiveEditEmail] = useState(false);
  const [isActiveEditPassword, setIsActiveEditPassword] = useState(false);
  const [isActiveEditProfileInfo, setIsActiveEditProfileInfo] = useState(false);
  return (
    <Section>
      <Section.Header>
        <Section.ArrowIcon onClick={closeSection} />
        <Section.H3>Settings</Section.H3>
      </Section.Header>
      <List>
        <List.Element onClick={() => setIsActiveEditEmail(!isActiveEditEmail)}>
          <MailIcon />
          <Span>Email</Span>
        </List.Element>
        <List.Element
          onClick={() => setIsActiveEditProfileInfo(!isActiveEditProfileInfo)}
        >
          <UserIcon />
          <Span>Profile info</Span>
        </List.Element>
        <List.Element
          onClick={() => setIsActiveEditPassword(!isActiveEditPassword)}
        >
          <ShieldIcon />
          <Span>Password</Span>
        </List.Element>
        <List.Element
          onClick={() => firebase.auth().signOut()}
          onKeyDown={e => e.key === 'Enter' && firebase.auth().signOut()}
          tabIndex={0}
          role="button"
        >
          <LogOutIcon />
          <Span>Log out</Span>
        </List.Element>
      </List>
      {isActiveEditEmail && (
        <EditProfileEmail
          closeSection={() => setIsActiveEditEmail(!isActiveEditEmail)}
        />
      )}
      {isActiveEditPassword && (
        <EditProfilePassword
          closeSection={() => setIsActiveEditPassword(!isActiveEditPassword)}
        />
      )}
      {isActiveEditProfileInfo && (
        <EditProfileInfo
          closeSection={() =>
            setIsActiveEditProfileInfo(!isActiveEditProfileInfo)
          }
        />
      )}
    </Section>
  );
};

export default EditProfile;
