import React from "react";


import { Header } from "../../dashboard/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export const CFlight = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://localhost:7093/api/Flight/CabinFlight/${localStorage.getItem(
          "Group"
        )}`
      )
      .then((response) => {
        setFlight(response.data);
      });
  }, []);
  return (
    <>
      <Header>
        <div id="main" className="fluid align-items-center bg-secondary">
          <div className="page-heading ">
            <section className="section fluid mx-auto ">
              <div className="card">
                <div className="card-header fw-bolder fs-5">
                  Flight Information
                </div>
                <div className="card-body">
                  <table className="table table-striped fluid-container table ">
                    <thead className="">
                      <tr className="table-success">
                        <th>AirID</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Pilot</th>
                        <th>Co-pilot</th>
                        <th>CabinGroup</th>
                        <th>Technians</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flight.map((items, index) => {
                        return (
                          <tr key={index} className="table-dark ">
                            <td> {items.aircraft.aircraftNo}</td>
                            <td>{items.origin}</td>
                            <td>{items.destination}</td>
                            <td>{items.departureDateTime}</td>
                            <td>{items.arrivalDateTime}</td>
                            <td>{items.pilot.fullName}</td>
                            <td>{items.coPilot.fullName}</td>
                            <td>{items.cabingroup}</td>
                            <td>{items.technicainGroup}</td>
                            <td>{items.locationStatus}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Header>
    </>
  );
};


