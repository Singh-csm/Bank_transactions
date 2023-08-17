import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainNavbar from "../Components/Navbar";

const TransactionAmount = () => {
  const id = localStorage.getItem("customerId");

  const [sName, setSName] = useState("");
  const [sEmail, setSEmail] = useState("");
  const [rName, serRName] = useState("");
  const [rEmail, setREmail] = useState("");
  const [amount, setAmount] = useState(0);

  function handleTransferAmount() {
    const url = `http://localhost:4000/account/transferAmount/`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        sName: sName,
        sEmail: sEmail,
        rName: rName,
        rEmail: rEmail,
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    serRName("");
    setREmail("");
    setAmount(0);
  }

  return (
    <>
      <MainNavbar />
      <div className="signUpContainer">
        <div className="box">
          <h1>Transfer Amount</h1>

          <Form className="transactionAmountForm">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Sender </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Sender Name"
                value={sName}
                onChange={(e) => setSName(e.target.value)}
              />

              <Form.Control
                type="email"
                placeholder="Sender Email"
                value={sEmail}
                onChange={(e) => setSEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Receiver </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Receiver Name"
                value={rName}
                onChange={(e) => serRName(e.target.value)}
              />

              <Form.Control
                type="email"
                placeholder="Receiver email"
                value={rEmail}
                onChange={(e) => setREmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong> Amount </strong>
              </Form.Label>
              <Form.Control
                text="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>

            <div className="btn1 transactionAmountBtn">
              <Button variant="primary" onClick={handleTransferAmount}>
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default TransactionAmount;
