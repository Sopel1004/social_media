import React from 'react';
import { ReactComponent as ArrowIcon } from '../images/arrow-left.svg';
import Header from '../styles/shared/header';

const About = ({ closeSection }) => {
  return (
    <>
      <Header>
        <ArrowIcon onClick={closeSection} />
        <span>About</span>
      </Header>
      <p>Version: 0.9.0 Alpha</p>
      <p>Created by Paweł Sobkowski </p>
      <p>2020</p>
    </>
  );
};

export default About;
