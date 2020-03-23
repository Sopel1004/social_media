import React, { useState } from 'react';
import Section from '../styles/EditProfile';
import List from '../styles/EditProfile/list';
import Span from '../styles/EditProfile/span';
import EditProfilePassword from './EditProfilePassword';
import EditProfileEmail from './EditProfileEmail';
import { ReactComponent as MailIcon } from '../images/mail.svg';
import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as ShieldIcon } from '../images/shield.svg';

const EditProfile = ({ closeSection }) => {
  const [isActiveEditEmail, setIsActiveEditEmail] = useState(false);
  const [isActiveEditPassword, setIsActiveEditPassword] = useState(false);
  return (
    <Section>
      <Section.Header>
        <Section.ArrowIcon onClick={closeSection} />
        <Section.H3>Edit profile</Section.H3>
      </Section.Header>
      <List>
        <List.Element onClick={() => setIsActiveEditEmail(!isActiveEditEmail)}>
          <MailIcon />
          <Span>Email</Span>
        </List.Element>
        <List.Element>
          <UserIcon />
          <Span>Profile info</Span>
        </List.Element>
        <List.Element
          onClick={() => setIsActiveEditPassword(!isActiveEditPassword)}
        >
          <ShieldIcon />
          <Span>Password</Span>
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
    </Section>
  );
};

export default EditProfile;
