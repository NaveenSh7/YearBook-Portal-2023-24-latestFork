import React, { useState, useEffect } from "react";
import { LoginContext } from "../../helpers/Context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import alumniData from "../Navbar/akumniData.json";

function BlackCard(props) {
  const {
    user,
    loading,
    setLoading,
    userData,
    setUserData,
    loggedin,
    setLoggedin,
    profile,
    setProfile,
    setFill,
    setVerified,
    setProfileIcon,
  } = useContext(LoginContext);

  const userDetails = JSON.parse(localStorage.getItem("profile"));
  console.log(userDetails);
  if (
    !loggedin &&
    !alumniData.includes(userDetails === null || userDetails.email)
  ) {
    window.location.href = "/";
  }
  const navigate = useNavigate();
  const [linkProfile, setLinkProfile] = useState(`/`);
  const profile1 = () => {
    const profile = JSON.parse(window.localStorage.getItem("profile"));
    navigate(`/profile/${profile.roll_no}/${profile.name}`);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-bg-white bg-cover flex flex-col justify-center items-center">
      <p class="text-[18px] md:text-3xl font-bold mb-8 mt-16">
        Hurray ! You are now our most esteemed user
      </p>

      <p class="text-[18px]  font-bold w-fit md:text-2xl lg:w-auto mb-6">
        Here's a platinum black card for all your troubles
      </p>

      <p class="lg:text-[20px] pb-2">
        (We don't know if this is usefull yet)
      </p>
      <img
        src="/images/MemberCards/BlackCard.jpg"
        className=" h-[180px] w-[350px] xl:h-[200px] xl:w-[370px] rounded-[15px] bgr mb-10"
      />
      {/*<a href={linkProfile}>*/}
      <button
        onClick={() => {
          profile1();
        }}
        class="border-2 h-[40px] w-[170px]  border-black flex justify-center items-center btnh border-dashed relative rounded-2xl text-xl"
      >
        {" "}
        Continue{" "}
      </button>
      {/*</a>*/}
    </div>
  );
}

export default BlackCard;
