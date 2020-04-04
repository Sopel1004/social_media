import React, { useState, useContext } from 'react';
import CommentsSection from './CommentsSection';
import timeDifference from '../functions/timeDifference';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import StyledPost from '../styles/Post';
import { CSSTransition } from 'react-transition-group';
import gsap from 'gsap';
import useWindowSize from '../functions/useWindowSize';

const Post = ({
  userName,
  createdAt,
  content,
  likes,
  likesNumber,
  commentsNumber,
  postId,
  comments,
  date,
  userId,
  imageSrc,
}) => {
  const [isActive, setIsActive] = useState(false);
  const currentUser = useContext(UserContext);
  const size = useWindowSize();

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
            likes: firebase.firestore.FieldValue.arrayRemove(currentUser.uid),
            likesNumber: firebase.firestore.FieldValue.increment(-1),
          });
      } else {
        await firebase
          .firestore()
          .collection('posts')
          .doc(postId)
          .update({
            likes: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
            likesNumber: firebase.firestore.FieldValue.increment(1),
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEnter = (node) => {
    if (size.width <= 1024) {
      gsap.from(node, {
        y: '100%',
        duration: 1,
      });
    } else {
      gsap.from(node, {
        transformOrigin: '50% 0',
        scaleY: 0,
        duration: 1,
      });
    }
  };

  const onExit = (node) => {
    if (size.width <= 1024) {
      gsap.to(node, {
        y: '100%',
        duration: 1,
      });
    } else {
      gsap.to(node, {
        transformOrigin: '50% 0',
        scaleY: 0,
        duration: 1,
      });
    }
  };

  return (
    <>
      <StyledPost isCommentSectionActive={isActive}>
        <StyledPost.PostAvatar size="2em" />
        <StyledPost.StyledLink to={`/profile/${userId}`}>
          <StyledPost.Name>{userName}</StyledPost.Name>
        </StyledPost.StyledLink>
        <StyledPost.Date>{timeDifference(date, createdAt)}</StyledPost.Date>
        <StyledPost.Content>{content}</StyledPost.Content>
        {imageSrc && <StyledPost.Image src={imageSrc} alt="photo" />}
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
        <StyledPost.LikesNumber>{likesNumber}</StyledPost.LikesNumber>
        <StyledPost.Comment
          role="button"
          tabIndex={0}
          aria-label="Like"
          onClick={() => setIsActive(!isActive)}
        />
        <StyledPost.CommentsNumber>{commentsNumber}</StyledPost.CommentsNumber>
      </StyledPost>
      <CSSTransition
        in={isActive}
        timeout={500}
        unmountOnExit
        onEnter={onEnter}
        onExit={onExit}
      >
        <CommentsSection
          postId={postId}
          comments={comments}
          date={date}
          isCommentSectionActive={isActive}
          closeCommentsSection={() => setIsActive(!isActive)}
        />
      </CSSTransition>
    </>
  );
};

export default Post;
