import React from "react";
import { Header } from "../../dashboard/Header";

export const GetUsers = () => {
  return (
    <>
      <Header>
        <div className="fluid mt-5 ms-5 ">
          <div className="">
            {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

            <h3 className="mb-5">Available Users</h3>

            <table className="table">
              <thead className="table-success">
                <tr>
                  <th>User Name</th>
                  <th>Model</th>
                  <th>AircraftID</th>
                  <th>Capacity</th>
                  <th>Current Location</th>
                  <th>Technician Response</th>
                </tr>
              </thead>
              <tbody>
                {/* {allaircraft.map((key, index) => (
                  <tr key={index}>
                    <td>{key.airCraftName} </td>
                    <td>{key.airCraftModel} </td>
                    <td>{key.aircraftNo} </td>
                    <td>{key.aircrftCapacity}</td>
                    <td>{key.airCraftLocation}</td>
                    <td>{key.technicianresult}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </>
  );
};
