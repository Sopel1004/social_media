import React from 'react';
import styled from 'styled-components';
import CommentsList from './CommentsList';
import BottomBar from './BottomBar';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';

const StyledSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    display: grid;
    grid-template-rows: 40px 1fr 40px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 -5px 8px 1px #cccccc;
`;

const StyledH3 = styled.h3`
    margin: 0 10px;
`;

const CommentsSection = ({
    postId,
    comments,
    date,
    userId,
    closeCommentsSection
}) => {
    return (
        <StyledSection>
            <Header>
                <LeftArrowIcon onClick={closeCommentsSection} />
                <StyledH3>Comments</StyledH3>
            </Header>
            <CommentsList comments={comments} date={date} userId={userId} />
            <BottomBar postId={postId} />
        </StyledSection>
    );
};

export default CommentsSection;
