import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import { Aircraftnav } from "../Admin/Aircraftnav";
import axios from "axios";

export const AirCraftMaintenance = () => {
  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const [id, setAirCraftId] = useState("");
  const [airCraftName, setAirCraftName] = useState("");
  const [airCraftModel, setAircraftModel] = useState("");
  const [aircraftNo, setAirCraftIDNo] = useState("");
  const [aircrftCapacity, setairCraftCapacity] = useState("");
  const [addedDate, setaddedDate] = useState("");
  const [technicianresult, setTechnicainresult] = useState("");
  const [airCraftLocation, setAirCarftLocation] = useState("");

  const handleOpengrant = (item) => {
    setalertshow(true);
    setAirCraftId(item.id);
    setAirCraftName(item.airCraftName);
    setAircraftModel(item.airCraftModel);
    setAirCraftIDNo(item.aircraftNo);
    setairCraftCapacity(item.aircrftCapacity);
    var Ready = "Ready";
    setaddedDate(item.addedDate);
    setTechnicainresult(Ready);
    setAirCarftLocation(item.airCraftLocation);
  };

  useEffect(() => {});

  const [aircaraft, setAircaftpending] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7093/api/Aircraft/ArrivedPending")
      .then((res) => {
        setAircaftpending(res.data);
        console.log(res.data);
      });
  }, []);
  function UpdateStatus() {
    axios
      .put(`https://localhost:7093/api/Aircraft/update/${id}`, {
        id,
        airCraftName,
        airCraftModel,
        aircraftNo,
        aircrftCapacity,
        addedDate,
        airCraftLocation,
        technicianresult,
      })
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      });
  }

  return (
    <>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4>
            Are You sure is the Aircraft System Well To Fly. once you Click
            "yes" it cant updated.
          </h4>
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
      <Aircraftnav className="flex-inline">
        <div id="app">
          <div id="main">
            <header className="mb-3"></header>
            <div className="page-heading">
              <section className="section">
                <div className="card">
                  <div className="card-header">AirCraft Information</div>
                  <div className="card-body">
                    <table
                      className="table table-striped  fluid-container"
                      id="table1"
                    >
                      <thead className="">
                        <tr className="">
                          <th>AirCraft ID</th>
                          <th>Airacraft</th>
                          <th>Aircraft Model</th>
                          <th>capacity</th>
                          <th>Status</th>
                          <th>
                            Action{" "}
                            <span className="text-danger fw-bold ">
                              {" "}
                              click if ready{" "}
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {aircaraft.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.aircraftNo}</td>
                              <td>{item.airCraftName}</td>
                              <td>{item.airCraftModel}</td>
                              <td>{item.aircrftCapacity}</td>
                              <td>{item.technicianresult}</td>

                              <td>
                                <button
                                  onClick={() => handleOpengrant(item)}
                                  className="btn btn-outline-success"
                                >
                                  Ready
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
        </div>
      </Aircraftnav>
    </>
  );
};
