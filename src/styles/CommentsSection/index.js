import styled from 'styled-components';
import COLORS from '../colors';
import Header from './header';
import H3 from './h3';

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.primaryLight};
    display: grid;
    grid-template-rows: 2.5em 1fr 2.5em;

    @media (min-width: 64em) {
        position: relative;
        width: 100%;
        height: fit-content;
        max-height: 30em;
        border: 1px solid ${COLORS.primaryDark};
        border-radius: 0.5em;
        border-top-left-radius: ${props =>
            props.isCommentSectionActive ? '0' : '0.5em'};
        border-top-right-radius: ${props =>
            props.isCommentSectionActive ? '0' : '0.5em'};
        border-top: ${props => props.isCommentSectionActive && 'none'};
    }
`;

Section.Header = Header;
Section.H3 = H3;

export default Section;
