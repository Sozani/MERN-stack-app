import React from "react";
import "../profileSide/ProfileSide.css";
import LogoSearch from "../logoSearch/LogoSearch";
import FollowerCard from "../followersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
