import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Aircraftnav } from "../Admin/Aircraftnav";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const RequestAccepted = () => {
  const [acceptedrequest, setacceptedrequest] = useState([]);
  const [id, setId] = useState([]);
  const [aircraftName, setAircraftName] = useState([]);
  const [model, setAirCraftModel] = useState([]);
  const [amountNeeded, setAmountNeeded] = useState([]);
  const [added, setadded] = useState([]);
  const [reqDate, setreqDate] = useState([]);
  const [capaciy, setcapaciy] = useState([]);
  const [reqStatus, setReqStatus] = useState([]);
  const [estimatedArrivalDate, setestimatedArrivalDate] = useState([]);
  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const handleOpengrant = (items) => {
    setalertshow(true);
    setId(items.id);
    setAircraftName(items.aircraftName);
    setAirCraftModel(items.model);
    setAmountNeeded(items.amountNeeded);
    setadded(items.added);
    setcapaciy(items.capaciy);
    setreqDate(items.reqDate);
    setReqStatus(items.reqStatus);
    setestimatedArrivalDate(items.estimatedArrivalDate);
  };

  function Accept() {
    setadded(amountNeeded);
    console.log(added);
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
        arrivalSatus: "Arrived",
        estimatedArrivalDate,
      })
      .then((res) => {
        window.location.reload();
        console.log(res.data);
      });
  }
  useEffect(() => {
    axios
      .get("https://localhost:7093/api/AircraftRequest/Accpted")
      .then((res) => {
        setacceptedrequest(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4>Are You sure is Arrived ?</h4>
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
                          <th>Holding capaciy</th>
                          <th>Amount</th>
                          <th>Requested date</th>
                          <th>Request status</th>
                          <th>Arrival Status</th>
                          <th>Estimated arrival date</th>
                          <th>
                            Arrived <strong> Click if it arrived</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {acceptedrequest.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>
                              <td className="text-success fw-bolder">
                                {items.reqStatus}
                              </td>
                              <td className="text-warning fw-bolder ">
                                {items.arrivalSatus}
                              </td>
                              <td>{items.estimatedArrivalDate}</td>
                              <td>
                                <button
                                  className="btn btn-outline-success"
                                  onClick={() => handleOpengrant(items)}
                                >
                                  Arrived
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
