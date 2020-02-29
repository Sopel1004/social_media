import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import PostsList from './PostsList';
import UserContext from './UserContext';
import { useParams } from 'react-router-dom';
import { ReactComponent as MoreIcon } from '../images/more-vertical.svg';
import firebase from '../config/firebase';
import ProfileMenu from './ProfileMenu';

const StyledSection = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH2 = styled.h2`
    margin: 0;
    justify-self: flex-start;
`;

const StyledProfileInfo = styled.div`
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        'followersNumber followingNumber'
        'followers following';
    justify-items: center;
`;

const StyledUserName = styled.p`
    margin: 20px 0;
    font-size: 1.5em;
    font-weight: 700;
`;

const StyledFollowersNumber = styled.span`
    align-self: end;
    grid-area: followersNumber;
`;
const StyledFollowingNumber = styled.span`
    align-self: end;
    grid-area: followingNumber;
`;
const StyledFollowers = styled.p`
    margin: 0;
    align-self: start;
    grid-area: followers;
`;
const StyledFollowing = styled.p`
    margin: 0;
    align-self: start;
    grid-area: following;
`;

const FollowButton = styled.button`
    width: 120px;
    padding: 5px;
    border-radius: 20px;
    color: ${props => (props.followed ? '#DC1717' : '#fff')};
    font-size: 1.2em;
    border: ${props => (props.followed ? '1px solid #DC1717' : 'none')};
    background: ${props =>
        props.followed
            ? 'transparent'
            : `linear-gradient(
        90deg,
        rgba(187, 14, 151, 1) 0%,
        rgba(136, 12, 110, 1) 100%
    )`};
`;

const MessegeButton = styled(FollowButton)`
    color: #000;
    border: 1px solid #bababa;
    background: #fff;
`;

const ButtonsConteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

function useData(id) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        let isSubscribed = true;
        firebase
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
        firebase
            .firestore()
            .collection('users')
            .doc(id)
            .onSnapshot(doc => {
                if (isSubscribed) {
                    setUserData(doc.data());
                    setIsFollowed(
                        doc.data().followers.includes(currentUser.uid)
                    );
                }
            });
        return () => {
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
                        followers: firebase.firestore.FieldValue.arrayUnion(
                            currentUser.uid
                        )
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledSection>
            <TopBar>
                <StyledH2>Profile</StyledH2>
                {currentUser.uid === id && (
                    <MoreIcon onClick={() => setIsVisible(!isVisible)} />
                )}
                {isVisible && (
                    <ProfileMenu closeMenu={() => setIsVisible(!isVisible)} />
                )}
            </TopBar>

            <Avatar />
            <StyledUserName>{userData && userData.fullName}</StyledUserName>
            <StyledProfileInfo>
                <StyledFollowersNumber>
                    {userData && userData.followers.length}
                </StyledFollowersNumber>
                <StyledFollowingNumber>
                    {userData && userData.following.length}
                </StyledFollowingNumber>
                <StyledFollowers>followers</StyledFollowers>
                <StyledFollowing>following</StyledFollowing>
            </StyledProfileInfo>
            {currentUser.uid !== id && (
                <ButtonsConteiner>
                    {isFollowed ? (
                        <FollowButton followed onClick={addToFollowing}>
                            Unfollow
                        </FollowButton>
                    ) : (
                        <FollowButton onClick={addToFollowing}>
                            Follow
                        </FollowButton>
                    )}
                    <MessegeButton>Messege</MessegeButton>
                </ButtonsConteiner>
            )}

            <PostsList posts={posts} />
        </StyledSection>
    );
};

export default Profile;
