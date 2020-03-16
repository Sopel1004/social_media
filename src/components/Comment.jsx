import React from 'react';
import timeDifference from '../functions/timeDifference';
import StyledComment from '../styles/Comment';

const Comment = ({ userName, content, createdAt, date, userId, isLast }) => {
  return (
    <StyledComment isLast={isLast}>
      <StyledComment.PostAvatar size="2em" />
      <StyledComment.StyledLink to={`/profile/${userId}`}>
        <StyledComment.Name>{userName}</StyledComment.Name>
      </StyledComment.StyledLink>
      <StyledComment.Date>{timeDifference(date, createdAt)}</StyledComment.Date>
      <StyledComment.Content>{content}</StyledComment.Content>
    </StyledComment>
  );
};

export default Comment;
