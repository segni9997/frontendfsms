import React from "react";
import { Header } from "../../dashboard/Header";
import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
export default function AddAirCraft() {
  const [airCraftName, setAircraftName] = useState("");
  const [airCraftModel, setAirCraftModel] = useState("");
  const [aircraftNo, setAirCraftNo] = useState("");
  const [aircrftCapacity, setairCraftCapacity] = useState("");
  const [addedDate, setaddedDate] = useState("");
  //update
  const [id, setairId] = useState("");

  const [model, setuAirCraftModel] = useState("");
  const [IsDisableNew, setIsDisableNew] = useState(true);
  const [IsDisable, setIsDisable] = useState(true);
  const [IsDisableRequest, SetIsdisableRequest] = useState(true);
  const [amountNeeded, setuAmountNeeded] = useState("");
  const [added, setuAdded] = useState("");
  const [capaciy, setuairCraftCapacity] = useState("");
  const [reqDate, setReqDate] = useState("");
  const [reqStatus, setreqStatus] = useState("");
  const [arrivalSatus, setArrivalSatus] = useState("");
  const [estimatedArrivalDate, setestimatedArrivalDate] = useState("");

  // request info
  const [Accpted, setAccpted] = useState([]);
  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const handleNewOpen = () => {
    setalertshow(true);
    setIsDisableNew(false);
  };
  const handleNewrequest = () => {
    setalertshow(true);
    SetIsdisableRequest(false);
  };
  const handleOpengrant = (items) => {
    setIsDisable(false);
    setAircraftName(items.aircraftName);
    setAirCraftModel(items.model);
    setairCraftCapacity(items.capaciy);
    //update quantity field
    setairId(items.id);

    setuAirCraftModel(items.model);
    setuairCraftCapacity(items.capaciy);
    setuAmountNeeded(items.amountNeeded);
    var neww = items.added;
    setuAdded(--neww);
    setReqDate(items.reqDate);
    setreqStatus(items.reqStatus);
    setArrivalSatus(items.arrivalSatus);
    setestimatedArrivalDate(items.estimatedArrivalDate);

    setalertshow(true);
  };
  //   "id": 0,
  // "aircraftName": "string",
  // "model": "string",
  // "capaciy": 0,
  // "amountNeeded": 0,
  // "added": 0,
  // "reqDate": "2023-08-23T06:52:03.985Z",
  // "reqStatus": "Pending",
  // "arrivalSatus": "Not-Arrived",
  // "estimatedArrivalDate": "2023-08-23T06:52:03.985Z"
  useEffect(() => {
    axios
      .get("https://localhost:7093/api/AircraftRequest/AccptedArrived")
      .then((res) => {
        setAccpted(res.data);
      });
  }, []);
  // function AddRequest() {
  //   axios.post("https://localhost:7093/api/AircraftRequest", {
  //     airCraftName,
  //     model,
  //     capaciy,
  //     amountNeeded,
  //     added,
  //     reqDate,
  //     reqStatus,
  //     arrivalSatus,
  //     estimatedArrivalDate,
  //   });
  // }
  function AddNewAirCraft() {
    axios
      .post("https://localhost:7093/api/Aircraft", {
        airCraftName,
        airCraftModel,
        aircraftNo,
        aircrftCapacity,
        addedDate,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        alert("AirCarft No is already taken please try Another");
      });
  }
  function AddAirCraft() {
    axios

      .post("https://localhost:7093/api/Aircraft", {
        airCraftName,
        airCraftModel,
        aircraftNo,
        aircrftCapacity,
        addedDate,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        alert("AirCarft No is already taken please try Another");
      });

    axios
      .put(`https://localhost:7093/api/AircraftRequest/Update/${id}`, {
        id,
        airCraftName,
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
        console.log(res.data);
      });
  }

  return (
    <Header>
      <Modal
        show={alertshow}
        onHide={handleCloseGrant}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="container  px-1 py-5 mx-auto  mt-5">
            <div className="row d-flex justify-content-center ">
              <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3 className="fw-bolder">New AirCraft</h3>

                <div className="card bg-light-dark mt-5">
                  <form className="form-card">
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Name<span className="text-danger"> *</span>
                        </label>
                        <input
                          required={true}
                          type="text"
                          id="fname"
                          value={airCraftName}
                          name="fname"
                          placeholder="Enter Aircraft Name"
                          onChange={(e) => setAircraftName(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Model<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder="Enter Model"
                          value={airCraftModel}
                          onChange={(e) => setAirCraftModel(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          AirCraft no#<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder
                          onChange={(e) => setAirCraftNo(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Capacity<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          id="mob"
                          name="mob"
                          value={aircrftCapacity}
                          placeholder
                          onChange={(e) => setairCraftCapacity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Date<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="date"
                          id="job"
                          name="job"
                          placeholder
                          onChange={(e) => setaddedDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGrant}>
            Cancel
          </Button>{" "}
          <Button
            type="submit"
            className="btn-block btn-success fw-bold"
            disabled={IsDisable}
          >
            {" "}
            <Link
              onClick={AddAirCraft}
              className="text-decoration-none text-light"
            >
              Add{" "}
            </Link>
          </Button>
          <Button
            type="submit"
            className="btn-block btn-success fw-bold"
            disabled={IsDisableNew}
          >
            {" "}
            <Link
              onClick={AddNewAirCraft}
              className="text-decoration-none text-light"
            >
              {" "}
              Add New{" "}
            </Link>
          </Button>
          {/* <Button
            type="submit"
            className="btn-block btn-success fw-bold"
            disabled={IsDisableRequest}
          >
            {" "}
            <Link
              onClick={AddRequest}
              className="text-decoration-none text-light"
            >
              {" "}
              Add New{" "}
            </Link>
          </Button> */}
        </Modal.Footer>
      </Modal>

      <div className=" container-fluid">
        <div id="app">
          <div id="main">
            <header className="mb-3"></header>
            <div className="page-heading">
              <button
                className="btn btn-outline-success fw-bold"
                onClick={handleNewOpen}
              >
                Add Aircraft
              </button>
              {/* <button
                className="btn btn-outline-dark ml-3 fw-bold"
                onClick={handleNewrequest}
              >
                Request AC.
              </button> */}
              <section className="section mt-5 fluid">
                <div className="card">
                  <div className="card-header fw-bold mx-auto ">
                    AirCraft Information
                  </div>
                  <div className="card-body">
                    <table
                      className="table table-striped table-fixed"
                      id="table1"
                    >
                      <thead className="">
                        <tr className="">
                          <th>AirCraft Name</th>
                          <th>AirCraft Model</th>
                          <th>Capacity</th>
                          <th>Quantity</th>
                          <th>Requested date</th>
                          <th>Est.Arrival Date</th>
                          <th>Arrival Status</th>
                          <th>Add AirCraft</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Accpted.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.model}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>
                              <td>{items.estimatedArrivalDate}</td>

                              <td>{items.arrivalSatus}</td>
                              <td>
                                {" "}
                                <Button className="bg-success">
                                  <Link
                                    onClick={() => handleOpengrant(items)}
                                    className="text-light fw-bold text-decoration-none"
                                  >
                                    Add AirCraft
                                  </Link>
                                  <sup>
                                    <Badge bg="warning fs-7">
                                      {items.added}
                                    </Badge>
                                  </sup>
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
}
