import { Button } from "react-bootstrap";
import { Header } from "../../dashboard/Header";
import "../../assets/css/style.css";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";

export const ManageFlight = () => {
  var Iatacodes = require("airport-codes/airports.json");

  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const handleOpengrant = () => {
    setalertshow(true);
  };
  const [pilot, setselectedpilot] = useState([]);
  const [fetchpilot, setfetchpilot] = useState([]);
  const [coPilot, setcopilot] = useState([]);
  const [fetchCopilot, setfetchcopilot] = useState([]);
  const [Cabid, setCabid] = useState([]);
  const [teckId, setteckId] = useState([]);
  const [Cabingroup, setcabin] = useState([]);
  const [TechnicainGroup, setTeck] = useState([]);
  const [Origin, setOrigion] = useState([]);
  const [departureDateTime, setdepartureDateTime] = useState([]);
  const [locationStatus, setlocationStatus] = useState("Home");
  const [arrivalDateTime, setarrivalDateTime] = useState([]);
  const [Destination, setdestination] = useState([]);

  const { airid } = useParams();

  const [aircraftid, setAircraftID] = useState(parseInt(airid));

  const [passAir, setPassair] = useState([]);
  const [AirID, setAirId] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const [Model, setModel] = useState([]);

  const origin = Origin.iata;
  const destination = Destination.iata;
  useEffect(() => {
    axios.get("https://localhost:7093/api/Pilot/pilotHome").then((response) => {
      setfetchpilot(response.data);
    });
    axios.get("https://localhost:7093/CoPilottHome").then((response) => {
      setfetchcopilot(response.data);
    });
    axios
      .get(`https://localhost:7093/api/Aircraft/airbyid/${aircraftid}`)
      .then((res) => {
        setPassair(res.data.airCraftName);
        setAirId(res.data.aircraftNo);
        setCapacity(res.data.aircrftCapacity);
        setModel(res.data.airCraftModel);
      });
    axios
      .get("https://localhost:7093/api/CabinGroup/CabingroupHome")

      .then((response) => {
        setCabid(response.data);
      });
    axios
      .get("https://localhost:7093/api/TechnicianGroup/teckgroupshome")
      .then((response) => {
        setteckId(response.data);
      });
  }, []);
  const cabingroup = Cabingroup.cGroup;
  const technicainGroup = TechnicainGroup.tGroup;
  const cId = Cabingroup.cId;
  const cGroup = Cabingroup.cGroup;
  const location = 1;
  const tid = TechnicainGroup.tid;
  const tGroup = TechnicainGroup.tGroup;
  const navigate = useNavigate();
  function handlesetFlight() {
    if (
      (pilot ||
        coPilot ||
        aircraftid ||
        origin ||
        destination ||
        departureDateTime ||
        arrivalDateTime ||
        cabingroup ||
        technicainGroup) == null
    ) {
      alert("please the Fields");
    } else if (origin === destination) {
      alert("origin cany be the same");
    } else {
      axios
        .post(
          `https://localhost:7093/AssignFlight?pilotID=${pilot.id}&CoPilotID=${coPilot.id}&airId=${aircraftid}`,
          {
            origin,
            destination,
            departureDateTime,
            arrivalDateTime,
            locationStatus,
            cabingroup,
            technicainGroup,
          }
        )
        .then(() => {
          axios
            .get(`https://localhost:7093/api/Aircraft/airbyid/${aircraftid}`)
            .then((res) => {
              console.log("AirCrat", res.data);
              axios.put(
                `https://localhost:7093/api/Aircraft/update/${aircraftid}`,
                {
                  id: aircraftid,
                  airCraftName: res.data.airCraftName,
                  airCraftModel: res.data.airCraftModel,
                  aircraftNo: res.data.aircraftNo,
                  aircrftCapacity: res.data.aircrftCapacity,
                  addedDate: res.data.addedDate,
                  airCraftLocation: "Departed",
                  technicianresult: "Ready",
                }
              );
            });
          axios.put(`https://localhost:7093/api/CabinGroup/${cId}`, {
            cId,
            cGroup,
            location,
          });
          axios.put(`https://localhost:7093/api/TechnicianGroup/${tid}`, {
            tid,
            tGroup,
            location,
          });
        })
        .then((res) => {
          handleOpengrant();
          setTimeout(() => {
            handleCloseGrant();
          }, 2500);
          navigate("/admin/ManageAirCrafts");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <Header>
        <Modal
          show={alertshow}
          onHide={handleCloseGrant}
          backdrop="static"
          keyboard={false}
          className="top-50"
        >
          <Modal.Body>
            <h4 className="text-succes">Flight Assigned succefully</h4>
          </Modal.Body>
          <Modal.Footer>
            {/* update button for air craft on technician result */}
          </Modal.Footer>
        </Modal>

        <div className="fluid px-1 py-5 mx-auto  mt-5 ">
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <h3 className="fw-bolder text-dark">New Flight</h3>

              <div className="  mt-5">
                <form className="form-card text-dark fw-bolder">
                  <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        AirCraft ID<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="tb-border px-3 text-dark fw-bold"
                        placeholder
                        value={AirID}
                        onblur="validate(3)"
                        disabled
                      />
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        AirCraft Name#<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="tb-border px-3 text-dark fw-bold"
                        placeholder
                        value={passAir}
                        onblur="validate(3)"
                        disabled
                      />{" "}
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        AirCraft Model#<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="tb-border px-3 text-dark fw-bold"
                        placeholder
                        value={Model}
                        onblur="validate(3)"
                        disabled
                      />{" "}
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Capacity<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="tb-border px-3 text-dark fw-bold"
                        placeholder
                        value={capacity}
                        onblur="validate(3)"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row justify-content-between text-left mt-2"></div>
                  <div className="row justify-content-between text-left mt-2">
                    <div className="form-group col-sm-3 flex-column d-flex ">
                      {" "}
                      <label className="form-control-label px-3">
                        From<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={Iatacodes}
                        getOptionLabel={(e) => e.iata}
                        onChange={setOrigion}
                        className="bg-warning"
                      />
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        To<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={Iatacodes}
                        getOptionLabel={(e) => e.iata}
                        getOptionValue={(option) => option.iata}
                        onChange={setdestination}
                      />
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Depart/datetime<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="datetime-local"
                        id="job"
                        name="job"
                        className="tb-border px-3 text-dark fw-bold"
                        onChange={(e) => setdepartureDateTime(e.target.value)}
                      />{" "}
                    </div>
                    <div className="form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Arrival datetime<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="datetime-local"
                        id="job"
                        name="job"
                        className="tb-border px-3 text-dark fw-bold"
                        placeholder
                        onChange={(e) => setarrivalDateTime(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div className="row justify-content-between text-left mt-3">
                    <div className=" form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Pilot<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={fetchpilot}
                        getOptionLabel={(option) => option.fullName}
                        onChange={setselectedpilot}
                        className="bg-warning"
                      />
                      {/* <Form.Select
                        size="lg"
                        onChange={(e) => setselectedpilot(e.target.value)}
                      >
                        <option>select Role</option>

                        {fetchpilot.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.fullName}
                            </option>
                          );
                        })}
                      </Form.Select> */}
                    </div>
                    <div className=" form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Co-Pilot<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={fetchCopilot}
                        getOptionLabel={(option) => option.fullName}
                        onChange={setcopilot}
                        className="bg-warning"
                      />
                      {/* <Form.Select
                        size="lg"
                        onChange={(e) => setcopilot(e.target.value)}
                      >
                        <option>select Role</option>

                        {fetchCopilot.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.fullName}
                            </option>
                          );
                        })}
                      </Form.Select> */}
                    </div>
                    <div className=" form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Cabin Crue<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={Cabid}
                        getOptionLabel={(option) => option.cGroup}
                        onChange={setcabin}
                        className="bg-warning"
                      />
                    </div>
                    <div className=" form-group col-sm-3 flex-column d-flex">
                      {" "}
                      <label className="form-control-label px-3">
                        Technician<span className="text-danger"> *</span>
                      </label>
                      <Select
                        options={teckId}
                        getOptionLabel={(option) => option.tGroup}
                        onChange={setTeck}
                        className="bg-warning"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5 mb-3">
                    <div className="form-group col-sm-6">
                      <Link onClick={handlesetFlight}>
                        <Button
                          type="submit"
                          className="btn-block btn-success fw-bold w-25 btn-rounded"
                        >
                          Add
                        </Button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
