import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import PostsList from './PostsList';

const StyledSection = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH2 = styled.h2`
    margin: 0;
    align-self: flex-start;
`;

const StyledProfileInfo = styled.div`
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        'followersNumber followingNumber'
        'followers following';
    justify-items: center;
`;

const StyledUserName = styled.p`
    margin: 20px 0;
    font-size: 1.5em;
    font-weight: 700;
`;

const StyledFollowersNumber = styled.span`
    align-self: end;
    grid-area: followersNumber;
`;
const StyledFollowingNumber = styled.span`
    align-self: end;
    grid-area: followingNumber;
`;
const StyledFollowers = styled.p`
    margin: 0;
    align-self: start;
    grid-area: followers;
`;
const StyledFollowing = styled.p`
    margin: 0;
    align-self: start;
    grid-area: following;
`;

const FollowButton = styled.button`
    width: 120px;
    padding: 5px;
    border-radius: 20px;
    color: #fff;
    font-size: 1.2em;
    border: none;
    background: linear-gradient(
        90deg,
        rgba(187, 14, 151, 1) 0%,
        rgba(136, 12, 110, 1) 100%
    );
`;

const MessegeButton = styled(FollowButton)`
    color: #000;
    border: 1px solid #bababa;
    background: #fff;
`;

const ButtonsConteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
`;

const Profile = () => {
    return (
        <StyledSection>
            <StyledH2>Profile</StyledH2>
            <Avatar />
            <StyledUserName>John Smith</StyledUserName>
            <StyledProfileInfo>
                <StyledFollowersNumber>160</StyledFollowersNumber>
                <StyledFollowingNumber>150</StyledFollowingNumber>
                <StyledFollowers>followers</StyledFollowers>
                <StyledFollowing>following</StyledFollowing>
            </StyledProfileInfo>
            <ButtonsConteiner>
                <FollowButton>Follow</FollowButton>
                <MessegeButton>Messege</MessegeButton>
            </ButtonsConteiner>
            <PostsList />
        </StyledSection>
    );
};

export default Profile;
