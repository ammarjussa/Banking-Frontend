import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      name === "" ||
      address === "" ||
      phone === "" ||
      email === "" ||
      password === ""
    ) {
      setError("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/account/signup",
        {
          name,
          address,
          phoneNumber: phone,
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("Successfully created the account");
        navigate("/login");
      } else {
        alert("Not able to create an account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <form
        className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Create an account
        </h1>
        {error && (
          <p className="error text-red-500 text-center font-bold text-xs">
            {error}
          </p>
        )}
        <div className="mt-4">
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300-active-x focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300-active-x focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>{" "}
        </div>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="text"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300-active-x focus:z-10 sm:text-sm sm:leading-5"
          />
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor="email"
          >
            Email address
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300-active-x focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block text-sm font-medium leading-5 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300-active-x focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 px-4 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
          >
            Create account
          </button>
        </div>
        <div className="text-center mt-4 text-sm">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
            Already a user?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
