import React from "react";
import { Aircraftnav } from "./Aircraftnav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Ready = () => {
  const [readyaircraft, setreadyaircraft] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/Aircraft/ArrivedWell").then((res) => {
      setreadyaircraft(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Aircraftnav>
      <div className="fluid mt-5 ms-5 ">
        <div className="">
          {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

          <h3 className="mb-5">Ready AirCrafts</h3>

          <table className="table">
            <thead className="table-success">
              <tr>
                <th>AirCaft Name</th>
                <th>Model</th>
                <th>AircraftID</th>
                <th>Capacity</th>
                <th>Current Location</th>
                <th>Technician Response</th>
              </tr>
            </thead>
            <tbody>
              {readyaircraft.map((key, index) => (
                <tr key={index}>
                  <td>{key.airCraftName} </td>
                  <td>{key.airCraftModel} </td>
                  <td>{key.aircraftNo} </td>
                  <td>{key.aircrftCapacity}</td>
                  <td>{key.airCraftLocation}</td>
                  <td>{key.technicianresult}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Aircraftnav>
  );
};
