import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fullName, emailAddress } = location.state;
  console.log(location.state);
  return (
    <div className="bg-slate-200 h-screen w-screen flex justify-center items-center">
      <div className="bg-slate-100 rounded-lg flex-col shadow-2xl justify-center">
        <div className="w-full bg-white p-5 rounded-lg ">
          <h2 className="font-extrabold font-serif text-3xl mx-5 my-2 text-center">
            Account Settings
          </h2>
        </div>
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="profile"
          className="w-14 h-14 rounded-full m-2 justify-self-center"
        />
        <h1 className="font-semibold font-mono text-xl mx-5 text-center">
          {fullName}
        </h1>
        <h1 className="font-semibold font-mono text-xl mx-5 text-center">
          {emailAddress}
        </h1>
        <p className="text-slate-500 text-wrap font-serif m-2">
          Welcome to your profile! Here you can check your account details and
          manage various settings.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className=" bg-customViolet hover:bg-gray-200 hover:text-gray-500 shadow shadow-customViolet hover:shadow-none text-white font-bold rounded p-5 w-full text-2xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
