import styled from 'styled-components';
import COLORS from '../colors';

const FollowButton = styled.button`
    width: 40%;
    padding: 0.25em;
    border-radius: 1em;
    color: ${props => (props.followed ? COLORS.unfollow : COLORS.sText)};
    font-size: 1.2em;
    border: ${props =>
        props.followed ? `1px solid ${COLORS.unfollow}` : 'none'};
    background: ${props =>
        props.followed
            ? 'transparent'
            : `linear-gradient(
        90deg,
        ${COLORS.secondary} 0%,
        ${COLORS.secondaryDark} 100%
    )`};
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        transform: scale(0.98);
    }

    &:focus {
        outline: 1px solid ${COLORS.secondaryContrast};
    }
`;

export default FollowButton;
