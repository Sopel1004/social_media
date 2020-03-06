import React from 'react';
import CommentsList from './CommentsList';
import BottomBar from './BottomBar';
import { ReactComponent as LeftArrowIcon } from '../images/arrow-left.svg';
import { ReactComponent as ChevronUpIcon } from '../images/chevron-up.svg';
import Section from '../styles/CommentsSection';

const CommentsSection = ({
    postId,
    comments,
    date,
    userId,
    isCommentSectionActive,
    closeCommentsSection
}) => {
    return (
        <Section isCommentSectionActive={isCommentSectionActive}>
            <Section.Header>
                {isCommentSectionActive ? (
                    <ChevronUpIcon onClick={closeCommentsSection} />
                ) : (
                    <LeftArrowIcon onClick={closeCommentsSection} />
                )}
                <Section.H3>Comments</Section.H3>
            </Section.Header>
            <CommentsList comments={comments} date={date} userId={userId} />
            <BottomBar postId={postId} />
        </Section>
    );
};

export default CommentsSection;
