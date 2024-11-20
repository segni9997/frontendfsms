import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Link } from "react-router-dom";
import { Header } from "../../dashboard/Header";
import axios from "axios";

export const OrderList = () => {
  const [Requestedaircraft, setrequestedaircraft] = useState([]);
  const [show, setShow] = useState(false);
  const [alertshow, setalertshow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseGrant = () => setalertshow(false);
  const handleOpengrant = () => setalertshow(true);

  useEffect(() => {
    axios.get("https://localhost:7093/api/AircraftRequest").then((res) => {
      setrequestedaircraft(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Header>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="container-fluid px-1 py-5 mx-auto  mt-5">
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <h3 className="fw-bolder">New AirCraft</h3>

              <div className="card bg-light-dark mt-5">
                <form className="form-card" onsubmit="event.preventDefault()">
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Name<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter Aircraft Name"
                        onblur="validate(1)"
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Model<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Enter Model"
                        onblur="validate(2)"
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Number to buy#<span className="text-danger"> *</span>
                      </label>{" "}
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder
                        onblur="validate(3)"
                      />{" "}
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex">
                      <label className="form-control-label px-3">
                        Capacity<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="number"
                        id="mob"
                        name="mob"
                        placeholder
                        onblur="validate(4)"
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Estimated Arrival Date
                        <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="date"
                        id="job"
                        name="job"
                        placeholder
                        onblur="validate(5)"
                      />{" "}
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Add/Update</Button>
                  </Modal.Footer>

                  <div className="row justify-content-center mt-5 mb-3">
                    <div className="form-group col-sm-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h4>
            Are You sure is the Aircraft Arrived. once you Click "yes" it cant
            updated
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGrant}>
            Cancel
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>

      <div className="fluid">
        <div id="app">
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
                          <th>Name</th>

                          <th>Holding Capacity</th>
                          <th>Allowed Amount</th>
                          <th>Arrival Date</th>
                          <th>Add/Update</th>
                          <th>decline</th>
                          <td>
                            Status
                            <span className="text-danger fw-bold">
                              (click onliy if it is arrived)
                            </span>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {Requestedaircraft.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>

                              <td className="fw-bold ">
                                <Button
                                  variant="outline-primary"
                                  onClick={handleShow}
                                >
                                  Add/update
                                </Button>
                              </td>
                              <td className="fw-bold text-success">
                                <Button variant="outline-danger">
                                  Decline
                                </Button>
                              </td>
                              <td className="fw-bold text-success">
                                <Button
                                  variant="outline-success"
                                  onClick={handleOpengrant}
                                >
                                  Arrived
                                </Button>
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
      </div>
    </Header>
  );
};
