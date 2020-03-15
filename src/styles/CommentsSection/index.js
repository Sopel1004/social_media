import styled from 'styled-components';
import COLORS from '../colors';
import TempSubSection from '../shared/subSection';

const Section = styled(TempSubSection)`
    && {
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
    }
`;

export default Section;
