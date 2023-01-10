import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import CreateTransaction from "./components/CreateTransaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/create-transaction" element={<CreateTransaction />} />
    </Routes>
  );
}

export default App;
