import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../images/x.svg';
import { ReactComponent as EditIcon } from '../images/edit.svg';
import { ReactComponent as InfoIcon } from '../images/info.svg';
import { ReactComponent as LogOutIcon } from '../images/log-out.svg';
import firebase from '../config/firebase';

const StyledDiv = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledLi = styled.li`
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledSpan = styled.span`
    margin-left: 5px;
`;

const ProfileMenu = ({ closeMenu }) => {
    return (
        <StyledDiv>
            <CloseIcon onClick={closeMenu} />
            <StyledUl>
                <StyledLi>
                    <EditIcon />
                    <StyledSpan>Edit profile</StyledSpan>
                </StyledLi>
                <StyledLi>
                    <InfoIcon />
                    <StyledSpan>About</StyledSpan>
                </StyledLi>
                <StyledLi>
                    <LogOutIcon />
                    <StyledSpan onClick={() => firebase.auth().signOut()}>
                        Log out
                    </StyledSpan>
                </StyledLi>
            </StyledUl>
        </StyledDiv>
    );
};

export default ProfileMenu;
