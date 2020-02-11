import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`;

const StyledLi = styled.li`
    width: 100%;
    margin-top: 2px;
`;

const CommentsList = () => {
    return (
        <StyledUl>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
            <StyledLi>
                <Comment />
            </StyledLi>
        </StyledUl>
    );
};

export default CommentsList;
