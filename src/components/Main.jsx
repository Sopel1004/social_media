import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostsList from './PostsList';

const url = 'https://jsonplaceholder.typicode.com/posts';

const StyledSection = styled.section`
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 10px 5px;
`;

const StyledH2 = styled.h2`
    margin: 0;
`;

const Main = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

    return (
        <StyledSection>
            <StyledH2>What's new</StyledH2>
            <PostsList posts={posts} />
        </StyledSection>
    );
};

export default Main;
