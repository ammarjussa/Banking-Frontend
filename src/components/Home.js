import React from "react";

const Home = () => {
  return (
    <div className="h-[40rem]">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white font-medium">Bank App</div>
        <div className="text-white font-medium">
          <a href="/">Home</a>
          <a href="/create-transaction" className="ml-4">
            Create Transaction
          </a>
          <a href="/logout" className="ml-4">
            Logout
          </a>
        </div>
      </nav>
      <div className="h-full flex justify-center items-center">
        <div className="bg-white rounded-lg p-6">
          <h1 className="text-lg font-medium text-indigo-600">
            Your Bank Account
          </h1>
          <div className="mt-4">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Account Number:
            </label>
            <div className="mt-1">
              <p className="text-gray-600">1234567890</p>
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
              <p className="text-gray-600">$0</p>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full py-2 px-4 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800">
              Create Transaction
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white">
        Copyright © 2022 Bank App
      </footer>
    </div>
  );
};

export default Home;
