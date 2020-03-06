import React, { useState, useContext } from 'react';
import CommentsSection from './CommentsSection';
import timeDifference from '../functions/timeDifference';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import StyledPost from '../styles/Post';

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
            <StyledPost isCommentSectionActive={isActive}>
                <StyledPost.PostAvatar small />
                <StyledPost.StyledLink to={`/profile/${userId}`}>
                    <StyledPost.Name>{userName}</StyledPost.Name>
                </StyledPost.StyledLink>
                <StyledPost.Date>
                    {timeDifference(date, createdAt)}
                </StyledPost.Date>
                <StyledPost.Content>{content}</StyledPost.Content>
                {checkIfLiked() ? (
                    <StyledPost.Liked
                        role="button"
                        tabIndex={0}
                        aria-label="Like"
                        onClick={() => addToLiked()}
                    />
                ) : (
                    <StyledPost.Like
                        role="button"
                        tabIndex={0}
                        aria-label="Like"
                        onClick={() => addToLiked()}
                    />
                )}
                <StyledPost.LikesNumber>{likes.length}</StyledPost.LikesNumber>
                <StyledPost.Comment
                    role="button"
                    tabIndex={0}
                    aria-label="Like"
                    onClick={() => setIsActive(!isActive)}
                />
                <StyledPost.CommentsNumber>
                    {commentsNumber}
                </StyledPost.CommentsNumber>
            </StyledPost>
            {isActive ? (
                <CommentsSection
                    postId={postId}
                    comments={comments}
                    date={date}
                    userId={userId}
                    isCommentSectionActive={isActive}
                    closeCommentsSection={() => setIsActive(!isActive)}
                />
            ) : null}
        </>
    );
};

export default Post;
