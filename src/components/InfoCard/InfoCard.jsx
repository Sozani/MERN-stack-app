import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModel.jsx/ProfileModel";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as userApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  const [modalOpened, setModalOpened] = useState(false);
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await userApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span> {profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works At</b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
