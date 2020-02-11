import React from 'react';
import styled from 'styled-components';
import avatarImage from '../images/avatar.png';

const StyledImg = styled.img`
    border-radius: 50%;
    width: ${props => (props.small ? '32px' : '96px')};
`;

const Avatar = ({ className, small }) => {
    return (
        <StyledImg
            src={avatarImage}
            alt="Avatar"
            small={small ? small : false}
            className={className}
        />
    );
};

export default Avatar;
