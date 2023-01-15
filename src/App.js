import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import CreateTransaction from "./components/CreateTransaction";
import CreateBankAccount from "./components/CreateAccount";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/create-transaction" element={<CreateTransaction />} />
      <Route path="/createAccount" element={<CreateBankAccount />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}

export default App;
