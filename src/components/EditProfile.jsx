import React, { useState, useContext } from 'react';
import Section from '../styles/shared/subSection';
import { ReactComponent as ArrowIcon } from '../images/arrow-left.svg';
import UserContext from './UserContext';

const EditProfile = ({ closeSection }) => {
  const currentUser = useContext(UserContext);
  return (
    <Section>
      <Section.Header>
        <ArrowIcon onClick={closeSection} />
        <Section.H3>Edit profile</Section.H3>
      </Section.Header>
    </Section>
  );
};

export default EditProfile;
