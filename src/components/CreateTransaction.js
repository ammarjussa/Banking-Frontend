import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const CreateTransaction = () => {
  const navigate = useNavigate();
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const { state } = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { senderAccountNumber } = state;
    try {
      const response = await axios.post(
        "http://localhost:8080/transactions/createTransaction",
        {
          senderAccountNumber,
          receiverAccountNumber,
          amount: amount,
          description,
        }
      );

      if (response.status === 200) {
        console.log("Successfully created the transaction");
        navigate("/");
      } else {
        alert("Not able to create a transaction");
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
      <div className="h-[40rem] w-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-lg font-medium text-indigo-600">
            Create Transaction
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Receiver's Account Number:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  value={receiverAccountNumber}
                  onChange={(e) => setReceiverAccountNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Receiver's Name:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  value={receiverName}
                  onChange={(e) => setReceiverName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Amount:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full border border-gray-400 p-2 rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Create Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateTransaction;
