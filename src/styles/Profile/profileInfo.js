import styled from 'styled-components';

const ProfileInfo = styled.div`
    width: 12.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        'followersNumber followingNumber'
        'followers following';
    justify-items: center;
`;

export default ProfileInfo;
