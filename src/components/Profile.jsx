import React, { useState, useEffect, useContext } from 'react';
import Avatar from './Avatar';
import PostsList from './PostsList';
import UserContext from './UserContext';
import { useParams } from 'react-router-dom';
import { ReactComponent as SettingsIcon } from '../images/settings.svg';
import firebase from '../config/firebase';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';
import StyledProfile from '../styles/Profile';
import EditProfile from './EditProfile';
import { CSSTransition } from 'react-transition-group';
import gsap from 'gsap';
import useWindowSize from '../functions/useWindowSize';

function useData(id) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    let unsubscribe = firebase
      .firestore()
      .collection('posts')
      .where('userId', '==', id)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (isSubscribed) setPosts(newPosts);
      });
    return () => {
      isSubscribed = false;
      unsubscribe();
    };
  }, [id]);

  return posts;
}

const Profile = () => {
  const currentUser = useContext(UserContext);
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);
  const posts = useData(id);
  const [isActiveEditProfile, setIsActiveEditProfile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    let isSubscribed = true;
    let unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(id)
      .onSnapshot((doc) => {
        if (isSubscribed) {
          setUserData(doc.data());
          setIsFollowed(doc.data().followers.includes(currentUser.uid));
        }
      });
    return () => {
      unsubscribe();
      isSubscribed = false;
    };
  }, [currentUser.uid, id]);

  const onEnter = (node) => {
    if (size.width <= 1024) {
      gsap.from(node, {
        x: '100%',
        duration: 1,
      });
    } else {
      gsap.from(node, {
        scale: 0,
        duration: 1,
        autoAlpha: 0,
      });
    }
  };

  const onExit = (node) => {
    if (size.width <= 1024) {
      gsap.to(node, {
        x: '100%',
        duration: 1,
      });
    } else {
      gsap.to(node, {
        scale: 0,
        duration: 1,
        autoAlpha: 0,
      });
    }
  };

  const addToFollowing = async () => {
    try {
      if (isFollowed) {
        await firebase
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .update({
            following: firebase.firestore.FieldValue.arrayRemove(id),
          });
        await firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            followers: firebase.firestore.FieldValue.arrayRemove(
              currentUser.uid
            ),
          });
      } else {
        await firebase
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .update({
            following: firebase.firestore.FieldValue.arrayUnion(id),
          });
        await firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            followers: firebase.firestore.FieldValue.arrayUnion(
              currentUser.uid
            ),
          });
        await firebase
          .firestore()
          .collection('messages')
          .add({
            users: [currentUser.uid, id],
            messages: [],
            timestamp: null,
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <StyledProfile.TopBar>
        <H2>Profile</H2>
        {currentUser.uid === id && (
          <SettingsIcon
            onClick={() => setIsActiveEditProfile(!isActiveEditProfile)}
            tabIndex={0}
            role="button"
            aria-label="More"
            style={{ cursor: 'pointer' }}
            onKeyDown={(e) =>
              e.key === 'Enter' && setIsActiveEditProfile(!isActiveEditProfile)
            }
          />
        )}
      </StyledProfile.TopBar>

      <Avatar />
      <StyledProfile.UserName>
        {userData && userData.fullName}
      </StyledProfile.UserName>
      <StyledProfile.ProfileInfo>
        <StyledProfile.FollowersNumber>
          {userData && userData.followers.length}
        </StyledProfile.FollowersNumber>
        <StyledProfile.FollowingNumber>
          {userData && userData.following.length}
        </StyledProfile.FollowingNumber>
        <StyledProfile.Followers>followers</StyledProfile.Followers>
        <StyledProfile.Following>following</StyledProfile.Following>
      </StyledProfile.ProfileInfo>
      {currentUser.uid !== id && (
        <StyledProfile.ButtonsContainer>
          {isFollowed ? (
            <StyledProfile.FollowButton followed onClick={addToFollowing}>
              Unfollow
            </StyledProfile.FollowButton>
          ) : (
            <StyledProfile.FollowButton onClick={addToFollowing}>
              Follow
            </StyledProfile.FollowButton>
          )}
          <StyledProfile.MessageButton>Messege</StyledProfile.MessageButton>
        </StyledProfile.ButtonsContainer>
      )}

      <PostsList posts={posts} marginTop={'50px'} />
      <CSSTransition
        in={isActiveEditProfile}
        timeout={500}
        unmountOnExit
        onEnter={onEnter}
        onExit={onExit}
      >
        <EditProfile
          closeSection={() => setIsActiveEditProfile(!isActiveEditProfile)}
        />
      </CSSTransition>
    </Section>
  );
};

export default Profile;
