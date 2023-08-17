import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const BankerCheckHistory = () => {
  const param = useParams();

  const [data, setData] = useState([]);

  function handleCustomerHistory() {
    const url = `http://localhost:4000/user/particularCustomer/${param.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data.transferData))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleCustomerHistory();
  }, []);

  return (
    <>
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
              {data.length !== 0 ? (
                data.map((items, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.sName}</td>
                    <td>{items.rName}</td>
                    <td>{items.amount}</td>
                    <td>{items.date}</td>
                  </tr>
                ))
              ) : (
                <h3
                  style={{
                    textAlign: "center",
                    width: "100%",
                    position: "absolute",
                    paddingTop: "86px",
                  }}
                >
                  Not Any Transactions
                </h3>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BankerCheckHistory;
