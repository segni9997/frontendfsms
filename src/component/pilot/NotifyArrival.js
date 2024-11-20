import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Header } from "../../dashboard/Header";
export const NotifyArrival = () => {
  const [flight, setFlight] = useState([]);
  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const [id, setId] = useState([]);
  const [airCraftID, setAircraftID] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [destination, setdestination] = useState([]);
  const [departureDateTime, setdepartureDateTime] = useState([]);
  const [arrivalDateTime, setarrivalDateTime] = useState([]);
  const [locationStatus, setLocationstatus] = useState([]);
  const [cabingroup, setcabingroup] = useState([]);
  const [technicainGroup, settechnicain] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role") === "Pilot") {
      axios
        .get(
          `https://localhost:7093/api/Flight/pilotIDDeparted/${localStorage.getItem(
            "pilotId"
          )}`
        )
        .then((response) => {
          setFlight(response.data);
        });
    }
    if (localStorage.getItem("role") === "CoPilot") {
      axios
        .get(
          `https://localhost:7093/api/Flight/CopilotIDDeparted/${localStorage.getItem(
            "pilotId"
          )}`
        )
        .then((response) => {
          setFlight(response.data);
        });
    }
  }, []);

  const location = 0;
  function UpdateStatus() {
    axios.put(`https://localhost:7093/api/Flight/updateFlight${id}`, {
      id,
      origin,
      destination,
      departureDateTime,
      arrivalDateTime,
      locationStatus,
      cabingroup,
      technicainGroup,
    });

    axios
      .get(`https://localhost:7093/api/Aircraft/airbyid/${airCraftID}`)
      .then((res) => {
        console.log("AirCrat", res.data);
        axios.put(`https://localhost:7093/api/Aircraft/update/${airCraftID}`, {
          id: airCraftID,
          airCraftName: res.data.airCraftName,
          airCraftModel: res.data.airCraftModel,
          aircraftNo: res.data.aircraftNo,
          aircrftCapacity: res.data.aircrftCapacity,
          addedDate: res.data.addedDate,
          airCraftLocation: "Arrived",
          technicianresult: "Pending...",
        });
      });
    axios
      .get(
        `https://localhost:7093/api/CabinGroup/Cabinbygroup?group=${cabingroup}`
      )
      .then((res) => {
        axios.put(`https://localhost:7093/api/CabinGroup/${res.data.cId}`, {
          cId: res.data.cId,
          cGroup: res.data.cGroup,
          location,
        });
      });
    axios
      .get(
        `https://localhost:7093/api/TechnicianGroup/TeckBygroup/${technicainGroup}`
      )
      .then((res) => {
        axios.put(
          `https://localhost:7093/api/TechnicianGroup/${res.data.tid}`,
          {
            tid: res.data.tid,
            tGroup: res.data.tGroup,
            location,
          }
        );
      });
    navigate("/pilot/flight");
  }

  const handleOpengrant = (item) => {
    setalertshow(true);
    setId(item.id);
    setAircraftID(item.aircraft.id);
    setOrigin(item.origin);
    setdestination(item.destination);
    setdepartureDateTime(item.departureDateTime);
    setarrivalDateTime(item.arrivalDateTime);
    var location = "Arrived";
    setLocationstatus(location);
    setcabingroup(item.cabingroup);
    settechnicain(item.technicainGroup);
  };

  return (
    <Header>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4>Are You Leaved the origin {locationStatus}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGrant}>
            Cancel
          </Button>
          {/* update button for air craft on technician result */}
          <Button variant="primary" onClick={UpdateStatus}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
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
                      <th>Crew</th>
                      <th>Technians</th>
                      <th>Departed</th>
                    </tr>
                  </thead>
                  {flight?.length ? (
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
                            <td>{items.cabingroup} </td>
                            <td>{items.technicainGroup}</td>
                            <td>
                              {new Date(items.arrivalDateTime) < Date.now() && (
                                <Link>
                                  <button
                                    className="btn btn-outline-danger text-light fw-bold"
                                    onClick={() => handleOpengrant(items)}
                                  >
                                    Arrived
                                  </button>{" "}
                                </Link>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <th colSpan="10">
                          {" "}
                          <h3 className="justify-content-center align-items-center pt-5 bg-success text-light pb-2">
                            You have No Departured Flight
                          </h3>
                        </th>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Header>
  );
};
