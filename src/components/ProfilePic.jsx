import React from 'react';
import profilePic from '../assets/progile-pic.jpg';

const ProfilePic = () => {
  return (
    <div className="profile-pic-container">
      <div className="google-colors-border"></div>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
  );
};

export default ProfilePic;
