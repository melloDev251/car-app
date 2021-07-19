import React from "react";
import { useSelector } from "react-redux";
import LeftNav from '../LeftNav';

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="profil-container">
      <LeftNav/>
      <h1>
        Welcome to your profile {" "}
        {userData.pseudo}
      </h1>
    </div>
  );
};

export default UpdateProfil;
