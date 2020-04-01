import React from 'react';
import List from '../styles/PostList';
import Post from './Post';

const PostsList = ({ posts, marginTop }) => {
  const date = Date.now();

  return (
    <List marginTop={marginTop}>
      {posts ? (
        posts.length ? (
          posts.map(post => (
            <List.Element key={post.id}>
              <Post
                content={post.content}
                userName={post.userName}
                createdAt={post.createdAt}
                likes={post.likes}
                likesNumber={post.likesNumber}
                commentsNumber={post.comments.length}
                postId={post.id}
                comments={post.comments}
                date={date}
                userId={post.userId}
              />
            </List.Element>
          ))
        ) : (
          <p>{`Nothing is here. Let's follow somebody.`}</p>
        )
      ) : (
        <p>{'Loading...'}</p>
      )}
    </List>
  );
};

export default PostsList;
