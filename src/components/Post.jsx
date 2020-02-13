import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import CommentsSection from './CommentsSection';
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

const Post = ({
    userName,
    createdAt,
    content,
    likes,
    commentsNumber,
    postId,
    comments
}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <StyledArticle>
                <StyledPostAvatar small />
                <Name>{userName}</Name>
                <Date>{createdAt}</Date>
                <Content>{content}</Content>
                <Like />
                <LikesNumber>{likes}</LikesNumber>
                <Comment onClick={() => setIsActive(!isActive)} />
                <CommentsNumber>{commentsNumber}</CommentsNumber>
            </StyledArticle>
            {isActive ? (
                <CommentsSection
                    postId={postId}
                    comments={comments}
                    closeCommentsSection={() => setIsActive(!isActive)}
                />
            ) : null}
        </>
    );
};

export default Post;
