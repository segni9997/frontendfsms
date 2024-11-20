import React, { useEffect, useState } from "react";
import { Header } from "../../dashboard/Header";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
export const RegisterUser = () => {
  const [alertshow, setalertshow] = useState(false);
  const [calertshow, csetalertshow] = useState(false);
  const [talertshow, tsetalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const handleOpengrant = () => {
    setalertshow(true);
  };
  const handleClosecabin = () => csetalertshow(false);
  const handleOpencabin = () => {
    csetalertshow(true);
  };
  const handleCloseteck = () => tsetalertshow(false);
  const handleOpenteck = () => {
    tsetalertshow(true);
  };
  const [userrole, setUserRole] = useState([]);
  const [userRole, setUser] = useState([]);
  const [Role, setUserrole] = useState([]);
  const [userEmail, setEmail] = useState([]);
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [joinddate, setJoinedDate] = useState([]);
  const [groupholder, setGroupHolder] = useState([]);
  const [copilotLocation, setcopilotLocation] = useState("Home");
  const [pilotLocation, setpilotLocation] = useState("Home");
  const [technicianLocation, settechnicianLocation] = useState("Home");
  const [cabinLocation, setcabinLocation] = useState("Home");
  const [medRequest, setmedRequest] = useState("No");
  const [cabing, setCabing] = useState([]);
  const [teckId, setteckId] = useState([]);
  const [fullName, setFullname] = useState([]);
  const [cabingroup, setCabinGroup] = useState([]);
  const [Group, settGroup] = useState([]);
  const [userId, setUserId] = useState([]);
  const uid = parseInt(Role.id);
  console.log("role", Role);
  useEffect(() => {
    axios.get("https://localhost:7093/api/Role/Roles").then((response) => {
      console.log("first", response.data);
      setUserRole(response.data);
    });
    axios
      .get("https://localhost:7093/api/CabinGroup/Cabingroups")
      .then((res) => {
        setCabing(res.data);
      });
    axios
      .get("https://localhost:7093/api/TechnicianGroup/teckgroups")
      .then((res) => {
        setteckId(res.data);
      });
  }, []);
  const AddUser = () => {
    if (Role.id === 2) {
      group = cGroup;
    }
    if (Role.id === 5) {
      group = tGroup;
    }
    console.log("groupfinal", group);
    axios
      .post(`https://localhost:7093/api/User/createUse?userRole=${Role.id}`, {
        userEmail,
        userName,
        password,
        group,
        joinddate,
      })
      .then((res) => {
        setUserId(res.data);
        if (Role.id === 3)
          axios
            .post(`https://localhost:7093/api/Pilot?userid=${res.data}`, {
              fullName,
              pilotLocation,
              medRequest,
            })
            .then((res) => {
              alert("Pilot created Succefully");
              window.location.reload();
            });
        else if (Role.id === 1)
          axios
            .post(`https://localhost:7093/api/Admin?userid=${res.data}`, {
              fullName,
            })
            .then(() => {
              alert("Admin file inserted Succefully");
              window.location.reload();
            });
        else if (Role.id === 6)
          axios
            .post(`https://localhost:7093/api/Treasury?userid=${res.data}`, {
              fullName,
            })
            .then(() => {
              alert("Treasury Office Member file inserted Succefully");
              window.location.reload();
            });
        else if (Role.id === 5) {
          axios
            .post(`https://localhost:7093/api/Technician?userId=${res.data}`, {
              fullName,
              technicianLocation,
              medRequest,
            })
            .then((res) => {
              alert("Technicain created Succefully");
              window.location.reload();
            });
        } else if (Role.id === 4)
          axios
            .post(`https://localhost:7093/api/CoPilot?userid=${res.data}`, {
              fullName,
              copilotLocation,
              medRequest,
            })
            .then((res) => {
              alert("CoPilot created Succefully");
              window.location.reload();
            });
        else if (Role.id === 2) {
          settGroup(groupholder);
          console.log(cabingroup);

          axios
            .post(`https://localhost:7093/api/CabinCrew?userId=${res.data}`, {
              fullName,
              cabinLocation,
              medRequest,
            })
            .then((res) => {
              alert("Cabincrew created Succefully");
              window.location.reload();
            });
        } else alert("Please insert data properly");
      })
      .catch(() => {
        console.log("UIDd", userId);
        alert("user already exist");
        axios
          .delete(`https://localhost:7093/api/User/${userId}/User`)
          .catch((res) => {
            if (res.data == null) {
              alert("there is no user with this user Id");
            }
          });
        console.log("deleted");
      });
    // alert("user is  Created please Click the button Link below");
  };

  let group = Group.cGroup;
  const cGroup = Group.cGroup;
  console.log("ngroupfinal", Group);

  const tGroup = Group.tGroup;
  console.log("technciangroupfinal", tGroup);

  const Addrole = () => {
    axios
      .post("https://localhost:7093/api/Role", {
        userRole,
      })
      .then(() => {
        handleCloseGrant();
        window.location.reload();
      })
      .catch((err) => {
        alert("Already Added");
      });
  };
  const Addcabingroup = () => {
    axios
      .post("https://localhost:7093/api/CabinGroup", {
        cGroup: Group,
        location: 0,
      })
      .then(() => {
        handleClosecabin();
        window.location.reload();
      })
      .catch((err) => {
        alert("Cabin crew Group Already Exist");
      });
  };
  const Addteckgroup = () => {
    axios
      .post("https://localhost:7093/api/TechnicianGroup", {
        tGroup: Group,
        location: 0,
      })
      .then(() => {
        handleCloseteck();
        window.location.reload();
      });
    // .catch((err) => {
    //   alert("Technician Group Already Exist");
    // });
  };
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
            <input
              placeholder="enter role"
              className="fw-5 w-100 fw-bold "
              onChange={(e) => setUser(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-success" onClick={Addrole}>
              Add
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={handleCloseGrant}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={calertshow}
          onHide={handleClosecabin}
          backdrop="static"
          keyboard={false}
          className="top-50"
        >
          <Modal.Body>
            <input
              placeholder="enter Cabin group"
              className="fw-5 w-100 fw-bold "
              onChange={(e) => settGroup(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-success" onClick={Addcabingroup}>
              Add
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={handleClosecabin}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>{" "}
        <Modal
          show={talertshow}
          onHide={handleCloseteck}
          backdrop="static"
          keyboard={false}
          className="top-50"
        >
          <Modal.Body>
            <input
              placeholder="enter Technican"
              className="fw-5 w-100 fw-bold "
              onChange={(e) => settGroup(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-success" onClick={Addteckgroup}>
              Add
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={handleCloseteck}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <div className="container mt-5">
          <h1 className="well mb-5">Registration Form</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form className="bg-success rounded  fw-bold position-relative ">
                <div className="col-sm-12">
                  <div className="row mt-5">
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Full Name </label>
                      <input
                        type="text"
                        placeholder="FullName"
                        className="form-control fs-5"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Location</label>

                      <input
                        type="text"
                        placeholder="Current Location"
                        className="form-control fs-5"
                        value={cabinLocation}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Medical Request</label>

                      <input
                        type="text"
                        className="form-control fs-5"
                        value={medRequest}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4 form-group">
                      <label className="text-light">User Role</label>
                      <Select
                        options={userrole}
                        getOptionLabel={(option) => option.userRole}
                        onChange={setUserrole}
                        className="bg-warning"
                        required
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Username </label>
                      <input
                        type="text"
                        placeholder="username"
                        className="form-control fs-5"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Joined date</label>
                      <input
                        type="date"
                        placeholder="Joined Date"
                        className="form-control fs-5"
                        onChange={(e) => setJoinedDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Email </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control fs-5"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Password </label>
                      <input
                        type="text"
                        placeholder="password"
                        className="form-control fs-5"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label className="text-light">Group</label>

                      {uid === 2 && (
                        <Select
                          options={cabing}
                          getOptionLabel={(option) => option.cGroup}
                          getOptionValue={(option) => option.cGroup}
                          onChange={settGroup}
                          className="bg-warning"
                        />
                      )}
                      {uid === 5 && (
                        <Select
                          options={teckId}
                          getOptionLabel={(option) => option.tGroup}
                          onChange={settGroup}
                          className="bg-warning"
                        />
                      )}
                    </div>
                  </div>
                  <div className="m-5  ">
                    <button
                      type="button"
                      className="btn btn-lg btn-secondary text-light fw-bolder w-25 mt-5  start-50 fs-5"
                      onClick={() => AddUser()}
                    >
                      Register
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-lg btn-primary text-light fw-bolder mt-5  start-50 fs-5"
                      onClick={() => handleOpengrant()}
                    >
                      Add Role
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-lg btn-warning text-light fw-bolder mt-5  start-50 fs-5"
                      onClick={() => handleOpenteck()}
                    >
                      Add Technicain G.
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-lg btn-info text-light fw-bolder  mt-5  start-50 fs-5"
                      onClick={() => handleOpencabin()}
                    >
                      Add CabinCrew G.
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-lg btn-danger text-light fw-bolder w-25 mt-5  ml-3 start-50"
                      onClick={handleLink}
                    >
                      Link
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
