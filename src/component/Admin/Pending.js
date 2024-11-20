import React from "react";
import { Aircraftnav } from "./Aircraftnav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Pending = () => {
  const [pendingaircraft, setpendingaircraft] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7093/api/Aircraft/ArrivedPending")
      .then((res) => {
        setpendingaircraft(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <Aircraftnav>
      <div className="fluid mt-5 ms-5 ">
        <div className="">
          {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

          <h3 className="mb-5">Pending AirCrafts</h3>

          <table className="table">
            <thead className="table-success">
              <tr>
                <th>AircraftID</th>
                <th>AirCaft Name</th>
                <th>Model</th>
                <th>Capacity</th>
                <th>Current Location</th>
                <th>Technician Response</th>
              </tr>
            </thead>
            <tbody>
              {pendingaircraft.map((key, index) => (
                <tr key={index}>
                  <td>{key.aircraftNo} </td>
                  <td>{key.airCraftName} </td>
                  <td>{key.airCraftModel} </td>

                  <td>{key.aircrftCapacity}</td>
                  <td>{key.airCraftLocation}</td>
                  <td className="text-warning fw-bolder ">
                    <span>{key.technicianresult}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Aircraftnav>
  );
};
