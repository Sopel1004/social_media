import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase';

const StyledSection = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px 5px;
`;

const StyledH2 = styled.h2`
    margin: 0;
`;

const StyledForm = styled.form`
    width: 100%;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    resize: none;
    border: none;
    padding: 5px;
    font-size: 1.25em;
`;

const StyledButton = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background: linear-gradient(
        90deg,
        rgba(187, 14, 151, 1) 0%,
        rgba(136, 12, 110, 1) 100%
    );
    font-size: 1.1em;
`;

const NewPost = () => {
    const [textAreaValue, setTextAreaValue] = useState('');

    const addPost = e => {
        e.preventDefault();

        firebase
            .firestore()
            .collection('posts')
            .add({
                userId: 1,
                userName: 'John Smith',
                content: textAreaValue,
                createdAt: new Date(),
                likes: 0,
                comments: []
            })
            .then(() => setTextAreaValue(''));
    };

    return (
        <StyledSection>
            <StyledH2>Create post</StyledH2>
            <StyledForm onSubmit={addPost}>
                <StyledTextarea
                    placeholder="Write something..."
                    rows="20"
                    value={textAreaValue}
                    onChange={e => setTextAreaValue(e.currentTarget.value)}
                ></StyledTextarea>
                <StyledButton type="submit">Post</StyledButton>
            </StyledForm>
        </StyledSection>
    );
};

export default NewPost;
