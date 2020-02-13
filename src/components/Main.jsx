import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostsList from './PostsList';
import firebase from '../config/firebase';

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
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('posts')
            .onSnapshot(snapshot => {
                const newPosts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(newPosts);
            });
        return () => unsubscribe();
    }, []);

    return posts;
}

const Main = () => {
    const posts = useData();
    return (
        <StyledSection>
            <StyledH2>What's new</StyledH2>
            <PostsList posts={posts} />
        </StyledSection>
    );
};

export default Main;
