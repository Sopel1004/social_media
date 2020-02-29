import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const StyledUl = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`;

const StyledLi = styled.li`
    width: 100%;
    margin-top: 2px;
`;

const CommentsList = ({ comments, date, userId }) => {
    return (
        <StyledUl>
            {comments
                ? comments.map(comment => (
                      <StyledLi key={comment.id}>
                          <Comment
                              content={comment.content}
                              userName={comment.userName}
                              createdAt={comment.createdAt}
                              date={date}
                              userId={userId}
                          />
                      </StyledLi>
                  ))
                : null}
        </StyledUl>
    );
};

export default CommentsList;
