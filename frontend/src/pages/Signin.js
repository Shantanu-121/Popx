import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export const Signin = () => {
  const [users, setUsers] = useState([]);
  const [entry, setEntry] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    agency: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((res) => setUsers(res.data));
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    if (users.some((user) => user.emailAddress === entry.emailAddress)) {
      alert("User already exists.");
      navigate("/login");
    } else {
      const res = await axios.post("http://localhost:4000/users", entry);
      setUsers((prev) => [...prev, res.data]);
      console.log(users);
      alert("Account created successfully");
      navigate("/login");
    }
  }

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setEntry((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <div className="bg-slate-100 p-5 h-screen rounded-4xl border-2 shadow-xl w-96">
        <h1 className="font-extrabold font-serif text-3xl mx-5 my-2">
          Create your{" "}
          <span className="text-5xl font-extrabold text-customViolet">
            PopX
          </span>{" "}
          account
        </h1>
        <form onSubmit={submitHandler} className="mx-5">
          <p className="font-semibold text-gray-500">
            Sign In to get started !
          </p>
          <input
            type="text"
            onChange={changeHandler}
            name="fullName"
            value={entry.fullName}
            placeholder="First Name"
            required
            className="my-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <input
            type="text"
            onChange={changeHandler}
            name="phoneNumber"
            value={entry.phoneNumber}
            placeholder={"Phone Number"}
            required
            className="my-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <input
            type="text"
            onChange={changeHandler}
            name="emailAddress"
            value={entry.emailAddress}
            placeholder={`Email Address`}
            required
            className="my-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <input
            type="text"
            onChange={changeHandler}
            name="password"
            value={entry.password}
            placeholder={`Password`}
            required
            className="my-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <input
            type="text"
            onChange={changeHandler}
            name="companyName"
            value={entry.companyName}
            placeholder={`Company Name`}
            required
            className="my-5 w-full p-3 rounded-lg shadow-lg hover:bg-slate-100"
          />
          <p className="font-semibold mt-5">
            Are you an Agency?
            <span className="text-red-500 font-extrabold"> *</span>
          </p>
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              onChange={changeHandler}
              required
              checked={entry.agency === "Yes"}
            />
            Yes
          </label>
          <label className="mx-5">
            <input
              type="radio"
              name="agency"
              value="No"
              onChange={changeHandler}
              required
              checked={entry.agency === "No"}
            />{" "}
            No
          </label>
          <button className="py-2 bg-customViolet hover:bg-gray-200 hover:text-gray-500 shadow shadow-customViolet hover:shadow-none text-white font-bold rounded my-5 w-full">
            Create my account
          </button>
        </form>
      </div>
    </div>
  );
};
