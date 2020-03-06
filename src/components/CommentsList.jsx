import React from 'react';
import Comment from './Comment';
import Ul from '../styles/CommentsList';

const CommentsList = ({ comments, date, userId }) => {
    return (
        <Ul>
            {comments
                ? comments.map(comment => (
                      <Ul.Li key={comment.id}>
                          <Comment
                              content={comment.content}
                              userName={comment.userName}
                              createdAt={comment.createdAt}
                              date={date}
                              userId={userId}
                          />
                      </Ul.Li>
                  ))
                : null}
        </Ul>
    );
};

export default CommentsList;
