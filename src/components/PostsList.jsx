import React from 'react';
import Ul from '../styles/PostList';
import Post from './Post';

const PostsList = ({ posts, marginTop }) => {
    const date = Date.now();

    return (
        <Ul marginTop={marginTop}>
            {posts ? (
                posts.length ? (
                    posts.map(post => (
                        <Ul.Li key={post.id}>
                            <Post
                                content={post.content}
                                userName={post.userName}
                                createdAt={post.createdAt}
                                likes={post.likes}
                                commentsNumber={post.comments.length}
                                postId={post.id}
                                comments={post.comments}
                                date={date}
                                userId={post.userId}
                            />
                        </Ul.Li>
                    ))
                ) : (
                    <p>{`Nothing is here. Let's follow somebody.`}</p>
                )
            ) : (
                <p>{'Loading...'}</p>
            )}
        </Ul>
    );
};

export default PostsList;
