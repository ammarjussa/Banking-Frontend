import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [lastBalance, setLastBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleTransactionArray = (data, accountNumber, balance) => {
      let lastB = balance;
      const transactionsData = [];
      data.forEach((element) => {
        console.log(lastB);
        const transaction = {};
        transaction.date = element.date;
        transaction.description = element.description;
        transaction._id = element.id;
        if (element.destinationAccount.accountNumber === accountNumber) {
          transaction.credit = element.amount;
          console.log(element.amount);
          lastB = parseFloat(lastB) + parseFloat(element.amount);
          transaction.accountNumber = element.sourceAccount.accountNumber;
        } else {
          transaction.debit = element.amount;
          console.log(element.amount);
          lastB = parseFloat(lastB) - parseFloat(element.amount);
          transaction.accountNumber = element.destinationAccount.accountNumber;
        }
        transactionsData.push(transaction);
        setLastBalance(lastB);
        setCurrentBalance(balance);
      });

      return transactionsData;
    };

    const fetchTransaction = async () => {
      const accountNumber = localStorage.getItem("accountNumber");
      const balance = localStorage.getItem("balance");
      try {
        const response = await axios.post(
          "http://localhost:8080/transactions/getAccountTransaction",
          {
            accountNumber: accountNumber,
          }
        );
        setTransactions(
          handleTransactionArray(response.data, accountNumber, balance)
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchTransaction();
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Header handleLogout={handleLogout} />
      <div className="bg-gray-200 p-4 rounded-lg h-[41rem]">
        <h1 className="text-2xl font-bold text-center mt-14 mb-10">
          Transactions
        </h1>
        <p className="text-right mr-3 mb-2">
          <span className="font-bold">Initial balance: </span> ${lastBalance}
        </p>
        <table className="w-full text-center table-collapse bg-white ">
          <thead>
            <tr>
              <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">
                Date
              </th>

              <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">
                Account Number
              </th>
              <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">
                Description
              </th>
              <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">
                Credit
              </th>
              <th className="text-sm font-medium text-gray-600 p-2 bg-gray-100">
                Debit
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td className="p-2 border-t border-gray-200">
                  {new Date(transaction.date).toLocaleString()}
                </td>
                <td className="p-2 border-t border-gray-200">
                  {transaction.accountNumber}
                </td>
                <td className="p-2 border-t border-gray-200">
                  {transaction.description}
                </td>
                <td className="p-2 border-t border-gray-200 text-green-600">
                  {transaction.debit}
                </td>
                <td className="p-2 border-t border-gray-200 text-red-600">
                  {transaction.credit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-right mr-3 mt-2">
          <span className="font-bold">Final Balance: </span> ${currentBalance}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Transactions;
