import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MainNavbar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import ReactModal from "react-modal";

const CustomerHome = () => {
  const [data, setData] = useState([]);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const id = localStorage.getItem("customerId");

  function handleAllCustomersFun() {
    const url = `http://localhost:4000/user/particularCustomer/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleAllCustomersFun();
  }, []);

  function handleDeposit() {
    const url = `http://localhost:4000/user/deposit/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: +deposit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      })
      .catch((err) => console.log(err));

    setDeposit(0);
  }

  function handleWithdraw() {
    const url = `http://localhost:4000/user/withdraw/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: +withdraw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      })
      .catch((err) => console.log(err));

    setWithdraw(0);
  }

  const [isOpenDeposit, setIsOpenDeposit] = useState(false);
  const [isOpenWithdraw, setIsOpenWithdraw] = useState(false);

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "340px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontSize: "30px",
    },
  };

  return (
    <>
      <MainNavbar />
      <div className="customerHomeContainer">
        <div className="cardOne">
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            />
            <Card.Body>
              <Card.Title>Name: {data.name}</Card.Title>
              <Card.Title>Email: {data.email}</Card.Title>
              <Card.Title>Number: {data.contact}</Card.Title>
              <Card.Title>Balance: {data.balance}</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="allBoxes">
          <Link to="/transactionamount">
            <Button>Transfer Amount</Button>
          </Link>
          <Link to="/transactionhistory">
            <Button>Transaction History</Button>
          </Link>
          <Link to="#">
            <Button onClick={setIsOpenDeposit}>Deposit</Button>
          </Link>
          <Link to="#">
            <Button onClick={setIsOpenWithdraw}>Withdraw</Button>
          </Link>
        </div>

        <ReactModal
          isOpen={isOpenDeposit}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpenDeposit(false)}
          style={modalStyle}
          iaHideApp={false}
        >
          <p> Rs. {data.balance} </p>
          <div className="forFlex">
            <input
              type="number"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
            />
            <Button onClick={handleDeposit}>Deposit</Button>
          </div>
        </ReactModal>

        <ReactModal
          isOpen={isOpenWithdraw}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpenWithdraw(false)}
          style={modalStyle}
        >
          <p> Rs. {data.balance} </p>
          <div className="forFlex">
            <input
              type="number"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.target.value)}
            />
            <Button onClick={handleWithdraw}>Withdraw</Button>
          </div>
        </ReactModal>
      </div>
    </>
  );
};

export default CustomerHome;
