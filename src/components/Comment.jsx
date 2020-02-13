import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const StyledCommentAvatar = styled(Avatar)`
    justify-self: center;
    grid-area: avatar;
`;

const Name = styled.p`
    margin: 0;
    grid-area: userName;
`;

const Date = styled.p`
    font-size: 0.75em;
    margin: 0;

    grid-area: date;
`;

const Content = styled.p`
    margin: 0;
    padding: 5px;
    grid-area: content;
`;

const StyledArticle = styled.article`
    width: 100%;
    background-color: #fff;
    padding: 10px 5px;
    border-bottom: 1px solid #dadada;
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 40px 40px 40px 40px 1fr;
    grid-template-rows: 20px 20px auto;
    grid-template-areas:
        'avatar userName userName userName .'
        'avatar date date date .'
        'content content content content content';
`;

const Comment = ({ userName, content, createdAt }) => {
    return (
        <StyledArticle>
            <StyledCommentAvatar small />
            <Name>{userName}</Name>
            <Date>{createdAt}</Date>
            <Content>{content}</Content>
        </StyledArticle>
    );
};

export default Comment;
