import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PostsList from './PostsList';
import firebase from '../config/firebase';
import UserContext from './UserContext';

const StyledSection = styled.section`
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 10px 5px;
`;

const StyledH2 = styled.h2`
    margin: 0;
`;

function useData() {
    const [posts, setPosts] = useState(null);
    const currentUser = useContext(UserContext);

    useEffect(() => {
        let isSubscribed = true;
        let userFollowing;
        firebase
            .firestore()
            .collection('users')
            .doc(currentUser.uid)
            .get()
            .then(doc => (userFollowing = doc.data().following))
            .then(() => {
                //if (userFollowing.length) {
                firebase
                    .firestore()
                    .collection('posts')
                    .where('userId', 'in', [...userFollowing, currentUser.uid])
                    .orderBy('createdAt', 'desc')
                    .onSnapshot(snapshot => {
                        const newPosts = snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        if (isSubscribed) setPosts(newPosts);
                    });
                //}
            });
        return () => {
            isSubscribed = false;
        };
    }, [currentUser.uid]);

    return posts;
}

const Home = () => {
    const posts = useData();
    return (
        <StyledSection>
            <StyledH2>What's new</StyledH2>
            <PostsList posts={posts} />
        </StyledSection>
    );
};

export default Home;
