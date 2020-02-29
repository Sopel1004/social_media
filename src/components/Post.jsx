import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import CommentsSection from './CommentsSection';
import { ReactComponent as LikeIcon } from '../images/like.svg';
import { ReactComponent as CommentIcon } from '../images/comment.svg';
import timeDifference from '../functions/timeDifference';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';

const StyledPostAvatar = styled(Avatar)`
    justify-self: center;
    grid-area: avatar;
`;

const Name = styled.p`
    margin: 0;
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

const Liked = styled(LikeIcon)`
    grid-area: likes;
    justify-self: center;
    stroke: #b90292;
    fill: #b90292;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    grid-area: userName;
`;

const Post = ({
    userName,
    createdAt,
    content,
    likes,
    commentsNumber,
    postId,
    comments,
    date,
    userId
}) => {
    const [isActive, setIsActive] = useState(false);
    const currentUser = useContext(UserContext);

    const checkIfLiked = () => {
        const result = likes.includes(currentUser.uid);
        return result;
    };

    const addToLiked = async () => {
        const result = checkIfLiked();
        try {
            if (result) {
                await firebase
                    .firestore()
                    .collection('posts')
                    .doc(postId)
                    .update({
                        likes: firebase.firestore.FieldValue.arrayRemove(
                            currentUser.uid
                        )
                    });
            } else {
                await firebase
                    .firestore()
                    .collection('posts')
                    .doc(postId)
                    .update({
                        likes: firebase.firestore.FieldValue.arrayUnion(
                            currentUser.uid
                        )
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <StyledArticle>
                <StyledPostAvatar small />
                <StyledLink to={`/profile/${userId}`}>
                    <Name>{userName}</Name>
                </StyledLink>
                <Date>{timeDifference(date, createdAt)}</Date>
                <Content>{content}</Content>
                {checkIfLiked() ? (
                    <Liked onClick={() => addToLiked()} />
                ) : (
                    <Like onClick={() => addToLiked()} />
                )}
                <LikesNumber>{likes.length}</LikesNumber>
                <Comment onClick={() => setIsActive(!isActive)} />
                <CommentsNumber>{commentsNumber}</CommentsNumber>
            </StyledArticle>
            {isActive ? (
                <CommentsSection
                    postId={postId}
                    comments={comments}
                    date={date}
                    userId={userId}
                    closeCommentsSection={() => setIsActive(!isActive)}
                />
            ) : null}
        </>
    );
};

export default Post;
