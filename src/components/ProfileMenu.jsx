import React, { useState } from 'react';
import { ReactComponent as CloseIcon } from '../images/x.svg';
import { ReactComponent as EditIcon } from '../images/edit.svg';
import { ReactComponent as InfoIcon } from '../images/info.svg';
import firebase from '../config/firebase';
import Menu from '../styles/ProfileMenu';
import About from './About';

const ProfileMenu = ({ closeMenu, openEditProfile }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Menu active={isActive}>
      {!isActive ? (
        <>
          <CloseIcon
            onClick={closeMenu}
            tabIndex={0}
            role="button"
            aria-label="Close"
            style={{ cursor: 'pointer' }}
            onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          />
          <Menu.Ul>
            <Menu.Li tabIndex={0} role="button" onClick={openEditProfile}>
              <EditIcon />
              <Menu.Span>Edit profile</Menu.Span>
            </Menu.Li>
            <Menu.Li
              tabIndex={0}
              role="button"
              onClick={() => setIsActive(!isActive)}
            >
              <InfoIcon />
              <Menu.Span>About</Menu.Span>
            </Menu.Li>
          </Menu.Ul>
        </>
      ) : (
        <About closeSection={() => setIsActive(!isActive)} />
      )}
    </Menu>
  );
};

export default ProfileMenu;
