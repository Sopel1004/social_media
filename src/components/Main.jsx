import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Post from './Post';

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
            <StyledUl>
                {posts
                    ? posts.map(post => (
                          <StyledLi key={post.id}>
                              <Post body={post.body} user={post.userId} />
                          </StyledLi>
                      ))
                    : null}
            </StyledUl>
        </StyledSection>
    );
};

export default Main;
