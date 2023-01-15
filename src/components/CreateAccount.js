import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const CreateBankAccount = () => {
  const [accountType, setAccountType] = useState(""); 
  const navigate = useNavigate();

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post("http://localhost:8080/createAccount", {
        userId,
        accountType,
      });

      if (response.status === 200) {
        console.log("Successfully created the bank account");
        navigate("/");
      } else {
        alert("Not able to create an account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Header handleLogout={handleLogout} />
      <div className="flex justify-center items-center h-[41rem] bg-gray-200">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-10 mb-4"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Bank Account
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2 text-center">
              Select Account Type
            </label>
            <div className="flex justify-between">
              <div className="flex">
                <input
                  type="radio"
                  name="accountType"
                  id="current"
                  value="current"
                  className="form-radio w-5 h-5 overflow-hidden"
                  checked={accountType === "current"}
                  onChange={handleAccountTypeChange}
                />

                <label className="ml-2 text-indigo-600" for="current">
                  Current
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="accountType"
                  id="savings"
                  value="savings"
                  className="form-radio w-5 h-5 overflow-hidden"
                  checked={accountType === "savings"}
                  onChange={handleAccountTypeChange}
                />
                <label
                  className="ml-2 text-indigo-600 cursor-pointer"
                  for="savings"
                >
                  Savings
                </label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500">
              Create Account
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBankAccount;
