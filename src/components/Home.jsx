import React, { useState, useEffect, useContext } from 'react';
import PostsList from './PostsList';
import firebase from '../config/firebase';
import UserContext from './UserContext';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';

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
        <Section>
            <H2>What's new</H2>
            <PostsList posts={posts} />
        </Section>
    );
};

export default Home;
