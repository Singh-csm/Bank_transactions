import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const BankerHome = () => {
  const [data, setData] = useState([]);

  function handleAllCustomersFun() {
    const url = `http://localhost:4000/user/allCustomers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    handleAllCustomersFun();
  }, []);

  return (
    <>
      <div className="bankerHomeContainer">
        <div className="inner_bankerBox">
          <div className="heading bg-primary">
            <h1>All Accounts</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Customer Name</th>
                <th>Email Address</th>
                <th>Contact No.</th>
                <th>Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index}>
                  <td style={{ width: "253px" }}>{index + 1}</td>
                  <td style={{ width: "663px" }}>{items.name}</td>
                  <td style={{ width: "465px" }}>{items.email}</td>
                  <td style={{ width: "457px" }}>{items.contact}</td>
                  <td style={{ width: "380px" }}>{items.balance}</td>
                  <td style={{ width: "182px" }}>
                    <Link to={`/bankercheckhistory/${items._id}`}>
                      <Button>View Transactions</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BankerHome;
