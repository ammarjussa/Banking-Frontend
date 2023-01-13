import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const [bankDetails, setBankDetails] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("userId");
      if (userId === null) {
        navigate("/login");
      } else {
        try {
          const response = await axios.post(
            "http://localhost:8080/account/getCustomer",
            { userId }
          );
          const details = {
            name: response.data.name,
            address: response.data.address,
            email: response.data.email,
            phone: response.data.phone,
          };
          setUserDetails(details);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getUser();
  }, [navigate]);

  useEffect(() => {
    const getBankAccount = async () => {
      const userId = localStorage.getItem("userId");
      if (userId !== null) {
        try {
          const response = await axios.post(
            "http://localhost:8080/getCustomerAccount",
            { userId }
          );

          if (response.status === 200) {
            const details = {
              accountNumber: response.data.accountNumber,
              accountType: response.data.accountType,
              balance: response.data.balance,
              name: response.data.name,
            };
            setBankDetails(details);
          } else {
            navigate("/createAccount");
          }
        } catch (err) {
          console.log(err);
        }
      }
    };

    getBankAccount();
  });

  const handleLogout = async (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-[40rem]">
      <Header handleLogout={handleLogout} />
      <div className="h-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-lg font-medium text-indigo-600">
            Hi! {userDetails?.name}
          </h1>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Account Number:
            </label>
            <div className="mt-1">
              <p className="text-gray-600">{bankDetails?.accountNumber}</p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Bank Name:
            </label>
            <div className="mt-1">
              <p className="text-gray-600">Example Bank</p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Balance:
            </label>
            <div className="mt-1">
              <p className="text-gray-600">${bankDetails?.balance}</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full py-2 px-4 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800">
              Create Transaction
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
