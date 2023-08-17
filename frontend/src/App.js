import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./pages/Login";
import BankerHome from "./pages/BankerHome";
import Transaction from "./pages/TransactionAmount";
import CustomerHome from "./pages/CustomerHome";
import TransactionAmount from "./pages/TransactionAmount";
import { Routes, Route, useLocation } from "react-router-dom";
import TransactionHistory from "./pages/TransactionHistory";
import BankerCheckHistory from "./pages/BankerCheckHistory";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Login />
      ) : location.pathname === "/signup" ? (
        <SignUp />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/bankerhome" element={<BankerHome />} />
        <Route path="bankercheckhistory/:id" element={<BankerCheckHistory />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/transactionamount" element={<TransactionAmount />} />
        <Route path="/transactionhistory" element={<TransactionHistory />} />
      </Routes>
    </>
  );
}

export default App;
