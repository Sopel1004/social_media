import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { ReactComponent as LikeIcon } from '../images/like.svg';
import { ReactComponent as CommentIcon } from '../images/comment.svg';

const StyledPostAvatar = styled(Avatar)`
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

const Like = styled(LikeIcon)`
    grid-area: likes;
    justify-self: center;
`;

const Comment = styled(CommentIcon)`
    grid-area: comments;
    justify-self: center;
`;

const LikesNumber = styled.span`
    grid-area: likesNumber;
`;

const CommentsNumber = styled.span`
    grid-area: commentsNumber;
`;

const StyledArticle = styled.article`
    width: 100%;
    background-color: #fcfcfc;
    padding: 10px 5px;
    border: 1px solid #dadada;
    border-radius: 5px;
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 40px 40px 40px 40px 1fr;
    grid-template-rows: 20px 20px auto;
    grid-template-areas:
        'avatar userName userName userName .'
        'avatar date date date .'
        'content content content content content'
        'likes likesNumber comments commentsNumber .';
`;

const Post = ({ userId, body, openCommentsSection }) => (
    <StyledArticle>
        <StyledPostAvatar small />
        <Name>John Smith</Name>
        <Date>1 hour ago</Date>
        <Content>{body}</Content>
        <Like />
        <LikesNumber>60</LikesNumber>
        <Comment onClick={openCommentsSection} />
        <CommentsNumber>10</CommentsNumber>
    </StyledArticle>
);

export default Post;
