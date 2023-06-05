import React from "react";
import "./ProfileLeft.css";
import LogoSearch from "../logoSearch/LogoSearch";
import FollowerCard from "../followersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
