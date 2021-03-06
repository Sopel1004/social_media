import React, { useState, useEffect } from 'react';
import PostsList from './PostsList';
import firebase from '../config/firebase';
import Section from '../styles/shared/section';
import H2 from '../styles/shared/h2';

function useData() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    let unsubscribe = firebase
      .firestore()
      .collection('posts')
      .orderBy('likesNumber', 'desc')
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
  }, []);

  return posts;
}

const Discover = () => {
  const posts = useData();
  return (
    <Section>
      <H2>Discover</H2>
      <PostsList posts={posts} />
    </Section>
  );
};

export default Discover;
