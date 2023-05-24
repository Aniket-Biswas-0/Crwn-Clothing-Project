import profileIcon from '../../assets/profile-icon.png';
import React from 'react';

import { ProfileIconContainer } from './profile-icon.styles';

const ProfileIcon = () => {
    return (
      <ProfileIconContainer>
        <img src={profileIcon} alt="profileIcon" />
      </ProfileIconContainer>
    );
  };
  
  export default ProfileIcon;