import React from 'react';
import styled from 'styled-components';
import avatarImage from '../images/avatar.png';

const StyledImg = styled.img.attrs(props => ({
  size: props.size || '8em'
}))`
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Avatar = ({ className, size }) => {
  return (
    <StyledImg
      src={avatarImage}
      alt="Avatar"
      className={className}
      size={size && size}
    />
  );
};

export default Avatar;
