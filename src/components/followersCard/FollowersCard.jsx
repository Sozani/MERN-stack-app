import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";
import { useSelector } from "react-redux";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {Followers.map((person, id) => {
        return <user person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
