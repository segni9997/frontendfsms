import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Header } from "../../dashboard/Header";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
export const PendingFlight = () => {
  const [flight, setFlights] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/FlightHome").then((res) => {
      setFlights(res.data);
      console.log(res.data);
    });
  }, []);
  function handleDelete(item) {
    axios.put(
      `https://localhost:7093/api/Aircraft/update/${item.aircraft.id}`,
      {
        id: item.aircraft.id,
        airCraftName: item.aircraft.airCraftName,
        airCraftModel: item.aircraft.airCraftModel,
        aircraftNo: item.aircraft.aircraftNo,
        aircrftCapacity: item.aircraft.aircrftCapacity,
        addedDate: item.aircraft.addedDate,
        airCraftLocation: "Arrived",
        technicianresult: "Ready",
      }
    );
    axios
      .get(
        `https://localhost:7093/api/CabinGroup/Cabinbygroup?group=${item.cabingroup}`
      )
      .then((response) => {
        axios.put(
          `https://localhost:7093/api/CabinGroup/${response.data.cId}`,
          {
            cId: response.data.cId,
            cGroup: response.data.cGroup,
            location: 0,
          }
        );
      });
    axios
      .get(
        `https://localhost:7093/api/TechnicianGroup/TeckBygroup/${item.technicainGroup}`
      )
      .then((response) => {
        axios.put(
          `https://localhost:7093/api/TechnicianGroup/${response.data.tid}`,
          {
            tid: response.data.tid,
            tGroup: response.data.tGroup,
            location: 0,
          }
        );
      });
    axios
      .delete(`https://localhost:7093/api/Flight/Flight/${item.id}`)
      .then((res) => {
        console.log(res.data);

        window.location.reload();
      })
      .catch((err) => {
        alert("Unable To Delete");
      });
  }
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
                <div className="card-body">
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
                        <th>Action </th>
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
                            <td>{items.technicainGroup}</td>{" "}
                            <td>
                              <button
                                className=" btn btn-outline-danger fw-bold"
                                onClick={() => handleDelete(items)}
                              >
                                <FaTrash />
                              </button>
                            </td>
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
