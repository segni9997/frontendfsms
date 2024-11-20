import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/style.css";
import axios from "axios";

import jwtDecode from "jwt-decode";

import { Header } from "../../dashboard/Header";
// import dashboard from '../../dashboard/Main'
export const Body = () => {
  const [UserEmail, setUserEmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [alertshow, setalertshow] = useState(false);
  const [role, setRole] = useState("");
  const handleCloseGrant = () => setalertshow(false);
  const handleOpengrant = () => {
    setalertshow(true);
  };

  const navigate = useNavigate();

  function handleCheck() {
    axios
      .post("https://localhost:7093/api/User/Login", {
        UserEmail,
        password,
      })
      .then((response) => {
        console.log(response.data.token);
        const token = response.data.token;
        const user = jwtDecode(token);
        console.log(user);
        localStorage.setItem("token", token);
        localStorage.setItem("role", user.role);
        localStorage.setItem("Group", user.groupsid);
        localStorage.setItem("username", user.family_name);
        localStorage.setItem("useremail", user.email);
        localStorage.setItem("joinnedDate", user.joinedDate);
        localStorage.setItem("loggedin", user.loggedin);
        localStorage.setItem("loggedout", user.Loggedout);
        localStorage.setItem("userId", user.nameid);

        setRole(user.role);
        if (user.role === "Adminstrator") {
          axios
            .get(`https://localhost:7093/api/Admin/byemail?email=${UserEmail}`)
            .then((res) => {
              localStorage.setItem("pilotId", res.data.id);
              localStorage.setItem("pilotName", res.data.fullName);
            })
            .then(() => {
              navigate("/admin/flight");
            });
        } else if (user.role === "Cabincrew") {
          navigate("/cabin/flights/");
        } else if (user.role === "Technicain" && user.groupsid === "None") {
          navigate("/technician/AirCraftMaintenance");
        } else if (user.role === "Technicain" && user.groupsid !== "None") {
          navigate("/flight/techncain/assigned/");
        } else if (user.role === "Treasury") {
          navigate("/treasury/allrequestedairCraft");
        } else if (user.role === "CoPilot") {
          axios
            .get(
              `https://localhost:7093/api/CoPilot/getCoPilotbyemail?email=${UserEmail}`
            )
            .then((res) => {
              localStorage.setItem("pilotId", res.data.id);
              localStorage.setItem("pilotName", res.data.fullName);
            })
            .then(() => {
              navigate("/pilot/flight");
            });
        } else if (user.role === "Pilot") {
          axios
            .get(
              `https://localhost:7093/api/Pilot/getByEmail?email=${UserEmail}`
            )
            .then((res) => {
              localStorage.setItem("pilotId", res.data.id);
              localStorage.setItem("pilotName", res.data.fullName);
            })
            .then(() => {
              navigate("/pilot/flight");
            });
        } else {
          navigate("/");
        }
      })

      .catch((res) => {
        handleOpengrant();
        setTimeout(() => {
          handleCloseGrant();
        }, 1500);
      });
  }
  const [isShown, setIsSHown] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
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
          <h4 className="text-danger">Invalid UserEmail or Password</h4>
        </Modal.Body>
        <Modal.Footer>
          {/* update button for air craft on technician result */}
        </Modal.Footer>
      </Modal>

      <Header>
        <div className="row overlay d-flex flex-row-reverse ">
          <div className="content fw-bolder text-white img-gradient ms-5 container">
            <h1 className="main fw-bolder mr-2  ">
              Your customer doesn’t care how much you know until they know how
              much you care <span className="text-success">!</span>
              <span className="text-warning">!</span>
              <span className="text-danger">!</span>
            </h1>
          </div>
          <div className="loginComponent mt-5 me-5 container">
            <div className="ms-5">
              <h2 className="p-5 ms-5 fw-bolder text-white ">
                <b className="text-success">F</b>
                <b className="text-warning">SM</b>
                <b className="text-danger">S</b> <i>Login</i>
              </h2>
            </div>
            <div className="mt-2 ml-5">
              <label className="text-white fw-bold d-block me-auto labels fs-4 ">
                Email:
              </label>
              <input
                className="container mt-2 ms-2 p-2 bg-transparent text-white Userinput mx-auto fs-5"
                placeholder="Enter Your Email"
                type="email"
                required={true}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="mt-2 ml-5">
              <label className="text-white fw-bold d-block me-auto labels fs-4 ">
                Password:
              </label>
              <input
                className="container mt-2 ms-2 p-2 bg-transparent text-white Userinput mx-auto fs-5 "
                placeholder="Enter user password"
                type={isShown ? "text" : "password"}
                required={true}
                onChange={(e) => setpassword(e.target.value)}
              />{" "}
              <div className="checkbox-container mt-3">
                <label
                  htmlFor="checkbox "
                  className="fw-bold text-light mr-2 mb-2"
                >
                  Show password
                </label>
                <input
                  id="checkbox"
                  type="checkbox"
                  className="fw-bold"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                    paddingTop: "10px",
                  }}
                  checked={isShown}
                  onChange={togglePassword}
                />
              </div>
            </div>
            <div className="mx-auto w-50">
              <button
                type="button"
                class="btn btn-outline-warning mx-2 mt-5 fw-bold"
                onClick={handleCheck}
              >
                Login
              </button>

              <div className="mt-2 pt-5 fs-5">
                {/* <Link to="#" className="forgotLink fs-4">forgot password?</Link> */}
                <Link to="/forgotpassword" className="text-warning hover">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};
