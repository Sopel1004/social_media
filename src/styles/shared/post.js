import styled from 'styled-components';
import COLORS from '../colors';
import { Link } from 'react-router-dom';
import PostAvatar from './postAvatar';

const Name = styled.p`
  margin: 0;
  font-weight: 700;
`;

const Date = styled.p`
  font-size: 0.75em;
  margin: 0;
  grid-area: date;
`;

const Content = styled.p`
  margin: 0;
  padding: 0.25em;
  grid-area: content;
`;

const StyledPost = styled.article`
  width: 100%;
  padding: 0.5em 0.25em;
  border-top: 1px solid ${COLORS.primaryDark};
  border-bottom: 1px solid ${COLORS.primaryDark};
  background-color: ${COLORS.primaryLight};
  display: grid;
  justify-items: start;
  align-items: center;
  grid-template-columns: 2.5em 2.5em 2.5em 2.5em 1fr;
  grid-template-rows: 1.25em 1.25em auto;
  grid-template-areas:
    'avatar userName userName userName .'
    'avatar date date date .'
    'content content content content content'
    'likes likesNumber comments commentsNumber .';

  @media (min-width: 64em) {
    border: 1px solid ${COLORS.primaryDark};
    /*border-radius: 0.5em;*/
    border-radius: 0.5em;
    border-bottom-left-radius: ${props =>
      props.isCommentSectionActive ? '0' : '0.5em'};
    border-bottom-right-radius: ${props =>
      props.isCommentSectionActive ? '0' : '0.5em'};
    border-bottom: ${props => props.isCommentSectionActive && 'none'};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.pText};
  grid-area: userName;
`;

StyledPost.PostAvatar = PostAvatar;
StyledPost.Name = Name;
StyledPost.Date = Date;
StyledPost.Content = Content;
StyledPost.StyledLink = StyledLink;

export default StyledPost;
