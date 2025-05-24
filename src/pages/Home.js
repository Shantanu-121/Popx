import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function handleSignInClick() {
    navigate("/signin");
  }
  function handleLogInClick() {
    navigate("/login");
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <div className="bg-slate-100 flex-column p-10 text-center">
        <h1 className="font-medium font-serif text-3xl m-5">
          Welcome to{" "}
          <p className="typewriter font-bold font-mono text-9xl">PopX</p>
        </h1>
        <p className="text-slate-500 text-wrap font-serif m-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Dicta soluta commodi fugiat officiis necessitatibus.
        </p>
        <button
          className="py-2 bg-customViolet hover:bg-gray-200 hover:text-gray-500 shadow shadow-customViolet hover:shadow-none  text-white font-bold px-10 font-serif rounded m-2"
          onClick={handleSignInClick}
        >
          Create Account
        </button>
        <br></br>
        <button
          className="py-2 bg-gray-200 hover:bg-gray-400 hover:text-violet-900 shadow shadow-gray-400 text-customViolet font-bold px-10 rounded m-2"
          onClick={handleLogInClick}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};
