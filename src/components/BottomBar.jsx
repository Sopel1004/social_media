import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase';

const StyledDiv = styled.div`
    width: 100%;
    border-top: 1px solid #e6e6e6;
`;
const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    width: 80%;
    height: 30px;
    padding: 5px;
    border: 1px solid #dadada;
    border-radius: 20px;
`;

const SendButton = styled.button`
    font-size: 1.25em;
    font-weight: 500;
    color: #b90292;
    background-color: transparent;
    border: none;
`;

const BottomBar = ({ postId }) => {
    const [inputValue, setInputValue] = useState('');

    const addComment = e => {
        e.preventDefault();

        const newId = Math.floor(Math.random() * 1000);
        /*const database = firebase
            .firestore()
            .collection('posts')
            .doc(postId);
        let data, newId;
        database.get().then(doc => {
            data = doc.data();
        });
        if (data.comments.length > 0) {
            newId = data.comments[comments.length - 1].id + 1;
        } else {
            newId = 0;
        }*/

        firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
                comments: firebase.firestore.FieldValue.arrayUnion({
                    id: newId,
                    userName: 'Alan Logan',
                    content: inputValue,
                    createdAt: new Date()
                })
            })
            .then(() => setInputValue(''));
    };

    return (
        <StyledDiv>
            <StyledForm onSubmit={addComment}>
                <StyledInput
                    type="text"
                    placeholder="Write a comment..."
                    value={inputValue}
                    onChange={e => setInputValue(e.currentTarget.value)}
                ></StyledInput>
                <SendButton type="submit">Send</SendButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default BottomBar;
