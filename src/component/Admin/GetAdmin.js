import React from "react";
import { Header } from "../../dashboard/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const GetAdmin = () => {
  const [Admins, setadmins] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/getAdmins").then((response) => {
      setadmins(response.data);
    });
  });
  return (
    <>
      <Header>
        <div className="fluid mt-5 ms-5 ">
          <div className="">
            {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

            <h3 className="mb-5">Adminstrators</h3>

            <table className="table">
              <thead className="table-success">
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Role</th>

                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Admins.map((key, index) => (
                  <tr key={index}>
                    <td>{key.id} </td>
                    <td>{key.fullName} </td>
                    <td>{key.user.role.userRole} </td>
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
