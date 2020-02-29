import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledLi = styled.li`
    width: 100%;
    margin: 5px 0;
`;

const PostsList = ({ posts }) => {
    const date = Date.now();

    return (
        <StyledUl>
            {posts ? (
                posts.length ? (
                    posts.map(post => (
                        <StyledLi key={post.id}>
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
                        </StyledLi>
                    ))
                ) : (
                    <p>{`Nothing is here. Let's follow somebody.`}</p>
                )
            ) : (
                <p>{'Loading...'}</p>
            )}
        </StyledUl>
    );
};

export default PostsList;
