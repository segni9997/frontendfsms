import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../dashboard/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Flight = () => {
  const [flight, setFlights] = useState([]);

  const userRole = localStorage.getItem("role");
  useEffect(() => {
    axios.get("https://localhost:7093/getFlights").then((res) => {
      setFlights(res.data);
    });
  }, []);

  return (
    <>
      <Header>
        <div className="mb-3 bg-secondary pb-2">
          <Link to="/admin/Flight">
            <button type="button" class="btn btn- mx-2 mt-2 fw-bold text-light">
              All Flight
            </button>
          </Link>
          <Link to="/Flight/PendingFlight">
            <button
              type="button"
              class="btn btn-warning ms-auto mt-2 fw-bold text-light"
            >
              Pending Flight
            </button>
          </Link>
          <Link to="/Flight/DepartedFlight">
            <button
              type="button"
              class="btn btn-danger ms-auto mx-2 mt-2 fw-bold text-light"
            >
              Departed Flight
            </button>
          </Link>
          <Link to="/Flight/ArrivedFlight">
            <button
              type="button"
              class="btn btn-primary ms-auto mx-2 mt-2 fw-bold text-light"
            >
              Arrived Flight
            </button>
          </Link>
        </div>
        <div id="main" className="fluid align-items-center bg-secondary">
          <div className="page-heading ">
            <section className="section fluid mx-auto ">
              <div className="card">
                <div className="card-header fw-bolder fs-5">
                  Flight Information
                </div>
                <div className="card-body " style={{ background: "#ACACAB" }}>
                  {/* <div className=" mb-3  d-flex fluid ">
                    {" "}
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      className="col-sm-4 ms-auto mr-2 fw-4 "
                      aria-label="Search"
                    />
                  </div> */}
                  <table className="table table-striped fluid-container table ">
                    <thead className="">
                      <tr className="table-success">
                        <th>AirID</th>
                        <th>AirName</th>
                        <th>AirModel</th>
                        <th>Capacity</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Pilot</th>
                        <th>Co-pilot</th>
                        <th>Crew</th>
                        <th>Technians</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flight.map((items, index) => {
                        return (
                          <tr key={index} className="table-dark ">
                            <td> {items.aircraft.aircraftNo}</td>
                            <td>{items.aircraft.airCraftName}</td>
                            <td>{items.aircraft.airCraftModel}</td>
                            <td>{items.aircraft.aircrftCapacity}</td>
                            <td>{items.origin}</td>
                            <td>{items.destination}</td>
                            <td>{items.departureDateTime}</td>
                            <td>{items.arrivalDateTime}</td>
                            <td> {items.pilot.fullName}</td>
                            <td>{items.coPilot.fullName}</td>
                            <td>{items.cabingroup} </td>
                            <td>{items.technicainGroup}</td>
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