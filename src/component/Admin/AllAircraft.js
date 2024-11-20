import React from "react";
import { Aircraftnav } from "./Aircraftnav";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

export const AllAircraft = () => {
  function handleDelete(item) {
    axios
      .delete(`https://localhost:7093/api/Aircraft/${item}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        alert("Unable To Delete");
      });
  }
  const [allaircraft, setAllaircraft] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/Aircraft").then((res) => {
      setAllaircraft(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Aircraftnav>
      <div className="fluid mt-5 ms-5 ">
        <div className="">
          {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

          <h3 className="mb-5">Available AirCrafts</h3>

          <table className="table">
            <thead className="table-success">
              <tr>
                {/* <PropagateLoader color="#1b8c19" /> */}
                <th>AirCaft Name</th>
                <th>Model</th>
                <th>AircraftID</th>
                <th>Capacity</th>
                <th>Current Location</th>
                <th>Technician Response</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allaircraft.map((key, index) => (
                <tr key={index}>
                  <td>{key.airCraftName} </td>
                  <td>{key.airCraftModel} </td>
                  <td>{key.aircraftNo} </td>
                  <td>{key.aircrftCapacity}</td>
                  <td>{key.airCraftLocation}</td>
                  <td>{key.technicianresult}</td>
                  <td>
                    <button
                      className=" btn btn-outline-danger fw-bold"
                      onClick={() => handleDelete(key.id)}
                    >
                      <FaTrash />
                    </button>
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
