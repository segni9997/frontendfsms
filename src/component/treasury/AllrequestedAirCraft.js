import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Aircraftnav } from "../Admin/Aircraftnav";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const AllrequestedairCraft = () => {
  const [allrequested, setallrequested] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/AircraftRequest").then((res) => {
      setallrequested(res.data);
      console.log(res.data);
    });
  }, []);
  const [alertshow, setalertshow] = useState(false);
  const [alertshowdecline, setalertshowdecline] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const handleClosedecline = () => setalertshowdecline(false);
  const [id, setAirCraftId] = useState("");
  const [aircraftName, setAirCraftName] = useState("");
  const [model, setAircraftModel] = useState("");
  const [added, setadded] = useState("");
  const [capaciy, setairCraftCapacity] = useState("");
  const [reqDate, setreqdate] = useState("");
  const [reqStatus, setreqstatus] = useState("");
  const [arrivalSatus, setarrivalsta] = useState("");
  const [estimatedArrivalDate, setestimatedArrivalDate] = useState("");
  const [amountNeeded, setamountNeeded] = useState("");
  const handleDecline = (items) => {
    setalertshowdecline(true);
    setAirCraftId(items.id);
    setAirCraftName(items.aircraftName);
    setAircraftModel(items.model);
    setairCraftCapacity(items.capaciy);
    setamountNeeded(items.amountNeeded);
    setadded(items.added);
    setreqdate(items.reqDate);
    var decline = "Declined";
    setreqstatus(decline);
    setarrivalsta(decline);
    setestimatedArrivalDate(items.estimatedArrivalDate);
  };
  const handleAccept = (items) => {
    setalertshow(true);
    setAirCraftId(items.id);
    setAirCraftName(items.aircraftName);
    setAircraftModel(items.model);
    setairCraftCapacity(items.capaciy);

    setreqdate(items.reqDate);
    setreqstatus("Accepted");
    var Accept = "Soon";
    setarrivalsta(Accept);
  };

  function Decline() {
    axios
      .put(`https://localhost:7093/api/AircraftRequest/Update/${id}`, {
        id,
        aircraftName,
        model,
        capaciy,
        amountNeeded,
        added,
        reqDate,
        reqStatus,
        arrivalSatus,
        estimatedArrivalDate,
      })
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      });
  }
  function Accept() {
    console.log(added);
    axios
      .put(`https://localhost:7093/api/AircraftRequest/Update/${id}`, {
        id,
        aircraftName,
        model,
        capaciy,
        amountNeeded,
        added: amountNeeded,
        reqDate,
        reqStatus,
        arrivalSatus,
        estimatedArrivalDate,
      })
      .then((res) => {
        window.location.reload();
      });
  }
  return (
    <>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
        className="top-50"
      >
        <Modal.Body>
          <h4>You are Updating the requested Aircrafts</h4>
          <div className="d-flex bg-info rounded h-100 text-light">
            <div className="d-block ">
              {" "}
              <label htmlFor="Allowed" className="fw-bolder d-flex">
                number Allowed
              </label>
              <input
                type="number"
                name="Allowed"
                className=" fw-bold w-100 fw-5 bg-info"
                onChange={(e) => setamountNeeded(e.target.value)}
              />
            </div>
            <div className="d-block ml-2">
              <label htmlFor="Date" className="fw-bolder d-block">
                {" "}
                Estimate the arrival Date
              </label>
              <input
                type="date"
                name="Date"
                className="w-100 fw-5 fw-5 bg-info"
                onChange={(e) => setestimatedArrivalDate(e.target.value)}
              />{" "}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGrant}>
            Cancel
          </Button>
          {/* update button for air craft on technician result */}
          <Button variant="primary" onClick={Accept}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={alertshowdecline}
        onHide={handleClosedecline}
        backdrop="static"
        keyboard={false}
        className="top-50"
      >
        <Modal.Body>
          <h4>Are You sure to Decline All the Requests</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosedecline}>
            Cancel
          </Button>
          {/* update button for air craft on technician result */}
          <Button variant="primary" onClick={Decline}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Aircraftnav className="">
        <div id="">
          <div id="main">
            <header className="mb-3"></header>
            <div className="page-heading">
              <div className="page-title">
                <div className="row">
                  <div className="col-3 order-md-2 order-first">
                    <nav
                      aria-label="breadcrumb"
                      className="breadcrumb-header float-start float-lg-end"
                    ></nav>
                  </div>
                </div>
              </div>
              <section className="section mt-5">
                <div className="card">
                  <div className="card-header fw-bold">
                    AirCraft Information
                  </div>
                  <div className="card-body">
                    <table className="table table-striped " id="table1">
                      <thead className="">
                        <tr className="">
                          <th>aircraftName</th>
                          <th>Model</th>
                          <th>Holding capaciy</th>
                          <th>Amount</th>
                          <th>Requested date</th>
                          <th>Request status</th>
                          <th>Arrival Status</th>
                          <th>Accept/Decline</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allrequested.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.model}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>
                              <td>{items.reqStatus}</td>
                              <td>{items.arrivalSatus}</td>

                              <td>
                                {" "}
                                <button
                                  onClick={() => handleAccept(items)}
                                  className="btn btn-outline-success"
                                >
                                  Accept
                                </button>{" "}
                                <button
                                  onClick={() => handleDecline(items)}
                                  className="btn btn-outline-danger"
                                >
                                  Decline
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
