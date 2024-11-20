import React, { useState, useEffect } from "react";
import { Header } from "../../dashboard/Header";
import axios from "axios";

export const GetCabin = () => {
  const [Cabin, setcabincrew] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7093/api/CabinCrew/CabinCrew")
      .then((response) => {
        setcabincrew(response.data);
      });
  });
  return (
    <>
      <Header>
        <div className="fluid mt-5 ms-5 ">
          <div className="">
            {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

            <h3 className="mb-5">CabinCrews</h3>

            <table className="table table-striped">
              <thead className="table-success ">
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Group</th>
                </tr>
              </thead>
              <tbody>
                {Cabin.map((key, index) => (
                  <tr key={index}>
                    <td>{key.id} </td>
                    <td>{key.fullName} </td>

                    <td>{key.user.role.userRole} </td>
                    <td>{key.cabinLocation}</td>
                    <td>{key.user.userName}</td>
                    <td>{key.user.userEmail}</td>
                    <td>{key.user.group}</td>
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
