import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import firebase from '../config/firebase';
import UserContext from './UserContext';

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
    const currentUser = useContext(UserContext);

    const addComment = async e => {
        e.preventDefault();

        let newId = Math.floor(Math.random() * 10000);
        let userData;
        /*await firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .then(doc => {
                data = doc.data();
                data.comments.length
                    ? (newId = data.comments[data.comments.length - 1].id + 1)
                    : (newId = 0);
                console.log(data, newId);
                debugger;
            });
        */
        firebase
            .firestore()
            .collection('users')
            .doc(currentUser.uid)
            .get()
            .then(doc => {
                userData = doc.data();
            })
            .then(() => {
                firebase
                    .firestore()
                    .collection('posts')
                    .doc(postId)
                    .update({
                        comments: firebase.firestore.FieldValue.arrayUnion({
                            id: newId,
                            userId: currentUser.uid,
                            userName: userData.fullName,
                            content: inputValue,
                            createdAt: Date.now()
                        })
                    })
                    .then(() => setInputValue(''));
            });
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
