import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [entry, setEntry] = useState({
    emailAddress: "",
    password: "",
  });
  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.get("http://localhost:4000/users");
    const users = res.data;
    if (
      users.some(
        (user) =>
          user.emailAddress === entry.emailAddress &&
          user.password === entry.password
      )
    ) {
      const input = users.filter((user) => {
        return (
          user.emailAddress === entry.emailAddress &&
          user.password === entry.password
        );
      });
      console.log(input[0]);
      navigate("/profile", {
        state: {
          fullName: input[0].fullName,
          emailAddress: input[0].emailAddress,
        },
      });
    } else if (users.some((user) => user.emailAddress === entry.emailAddress)) {
      alert("User already exists but the password is wrong.");
    } else {
      alert("No such account exists");
      navigate("/signin");
    }
  }
  function changeHandler(e) {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <div className="bg-slate-100 p-5 rounded-4xl border-2 shadow-xl w-96">
        <h2 className="font-extrabold font-serif text-3xl mx-5 my-2">
          Login to your{" "}
          <span className="text-5xl font-extrabold text-customViolet">
            PopX
          </span>{" "}
          account
        </h2>
        <p className="font-semibold text-gray-500 mx-5">
          Welcome back ! Enter your email address and password
        </p>
        <form onSubmit={submitHandler} className="mx-5">
          <input
            type="text"
            onChange={changeHandler}
            name="emailAddress"
            value={entry.emailAddress}
            required
            placeholder="Email Address"
            className="mt-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <input
            type="text"
            onChange={changeHandler}
            name="password"
            value={entry.password}
            placeholder="Password"
            required
            className="mt-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <button className="py-2 bg-customViolet hover:bg-gray-200 hover:text-gray-500 shadow shadow-customViolet hover:shadow-none text-white font-bold rounded mt-5 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
