import React, { useState, useEffect } from "react";
import { Header } from "../../dashboard/Header";
import axios from "axios";

export const GetCopilot = () => {
  const [Copilot, setCopilot] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/CoPilot").then((response) => {
      setCopilot(response.data);
    });
  });
  return (
    <>
      <Header>
        <div className="fluid mt-5 ms-5 ">
          <div className="">
            {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

            <h3 className="mb-5 fluid  fw-bolder">Co-Pilots</h3>

            <table className="table table-striped">
              <thead className="table-success ">
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Copilot.map((key, index) => (
                  <tr key={index}>
                    <td>{key.id} </td>
                    <td>{key.fullName} </td>

                    <td>{key.user.role.userRole} </td>
                    <td>{key.copilotLocation}</td>
                    <td>{key.user.userName}</td>
                    <td>{key.user.userEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </>
  );
};
