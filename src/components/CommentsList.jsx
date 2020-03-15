import React from 'react';
import Comment from './Comment';
import List from '../styles/shared/list';

const CommentsList = ({ comments, date, userId }) => {
    return (
        <List>
            {comments
                ? comments.map((comment, index) => (
                      <List.Element key={comment.id}>
                          <Comment
                              content={comment.content}
                              userName={comment.userName}
                              createdAt={comment.createdAt}
                              date={date}
                              userId={userId}
                              isLast={index === comments.length - 1}
                          />
                      </List.Element>
                  ))
                : null}
        </List>
    );
};

export default CommentsList;
