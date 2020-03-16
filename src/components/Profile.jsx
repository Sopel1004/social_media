import React, { useState, useEffect, useContext } from 'react';
import Avatar from './Avatar';
import PostsList from './PostsList';
import UserContext from './UserContext';
import { useParams } from 'react-router-dom';
import { ReactComponent as MoreIcon } from '../images/more-vertical.svg';
import firebase from '../config/firebase';
import ProfileMenu from './ProfileMenu';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';
import StyledProfile from '../styles/Profile';

function useData(id) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    let unsubscribe = firebase
      .firestore()
      .collection('posts')
      .where('userId', '==', id)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const newPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    let unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(id)
      .onSnapshot(doc => {
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

  const addToFollowing = async () => {
    try {
      if (isFollowed) {
        await firebase
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .update({
            following: firebase.firestore.FieldValue.arrayRemove(id)
          });
        await firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            followers: firebase.firestore.FieldValue.arrayRemove(
              currentUser.uid
            )
          });
      } else {
        await firebase
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .update({
            following: firebase.firestore.FieldValue.arrayUnion(id)
          });
        await firebase
          .firestore()
          .collection('users')
          .doc(id)
          .update({
            followers: firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
          });
        await firebase
          .firestore()
          .collection('messages')
          .add({
            users: [currentUser.uid, id],
            messages: [],
            timestamp: null
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
          <MoreIcon
            onClick={() => setIsVisible(!isVisible)}
            tabIndex={0}
            role="button"
            aria-label="More"
            onKeyDown={e =>
              e.key === 'Enter' ? setIsVisible(!isVisible) : null
            }
          />
        )}
        {isVisible && (
          <ProfileMenu closeMenu={() => setIsVisible(!isVisible)} />
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
    </Section>
  );
};

export default Profile;
