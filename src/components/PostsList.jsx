import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
import CommentsSection from './CommentsSection';

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
    const [isActive, setIsActive] = useState(false);

    return (
        <StyledUl>
            {posts ? (
                posts.map(post => (
                    <StyledLi key={post.id}>
                        <Post
                            body={post.body}
                            user={post.userId}
                            openCommentsSection={() => setIsActive(!isActive)}
                        />
                        {isActive ? (
                            <CommentsSection
                                closeCommentsSection={() =>
                                    setIsActive(!isActive)
                                }
                            />
                        ) : null}
                    </StyledLi>
                ))
            ) : (
                <p>{'Loading...'}</p>
            )}
        </StyledUl>
    );
};

export default PostsList;
