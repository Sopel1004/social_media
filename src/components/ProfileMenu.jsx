import React from 'react';
import { ReactComponent as CloseIcon } from '../images/x.svg';
import { ReactComponent as EditIcon } from '../images/edit.svg';
import { ReactComponent as InfoIcon } from '../images/info.svg';
import { ReactComponent as LogOutIcon } from '../images/log-out.svg';
import firebase from '../config/firebase';
import Menu from '../styles/ProfileMenu';

const ProfileMenu = ({ closeMenu }) => {
    return (
        <Menu>
            <CloseIcon
                onClick={closeMenu}
                tabIndex={0}
                role="button"
                aria-label="Close"
                onKeyDown={e => (e.key === 'Enter' ? closeMenu() : null)}
            />
            <Menu.Ul>
                <Menu.Li tabIndex={0} role="button">
                    <EditIcon />
                    <Menu.Span>Edit profile</Menu.Span>
                </Menu.Li>
                <Menu.Li tabIndex={0} role="button">
                    <InfoIcon />
                    <Menu.Span>About</Menu.Span>
                </Menu.Li>
                <Menu.Li
                    onClick={() => firebase.auth().signOut()}
                    onKeyDown={e =>
                        e.key === 'Enter' ? firebase.auth().signOut() : null
                    }
                    tabIndex={0}
                    role="button"
                >
                    <LogOutIcon />
                    <Menu.Span>Log out</Menu.Span>
                </Menu.Li>
            </Menu.Ul>
        </Menu>
    );
};

export default ProfileMenu;
