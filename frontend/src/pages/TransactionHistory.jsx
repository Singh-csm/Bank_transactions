import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import MainNavbar from "../Components/Navbar";

const TransactionHistory = () => {
  const [data, setData] = useState([]);

  const id = localStorage.getItem("customerId");

  function handleTransferHistory() {
    const url = `http://localhost:4000/account/transferHistory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data.transferData))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleTransferHistory();
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="transactionContainer">
        <div className="inner_bankerBox">
          <div className="heading bg-primary">
            <h1>All Transactions</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.sName}</td>
                  <td>{items.rName}</td>
                  <td>{items.amount}</td>
                  <td>{items.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
