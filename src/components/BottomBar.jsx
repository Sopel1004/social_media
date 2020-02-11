import React from 'react';
import styled from 'styled-components';

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

const BottomBar = () => {
    return (
        <StyledDiv>
            <StyledForm>
                <StyledInput
                    type="text"
                    placeholder="Write a comment..."
                ></StyledInput>
                <SendButton type="submit">Send</SendButton>
            </StyledForm>
        </StyledDiv>
    );
};

export default BottomBar;
