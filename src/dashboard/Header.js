import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import logo from "../assets/image/lll.png";
import * as FaIcon from "react-icons/fa";
import * as ImIcon from "react-icons/im"
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const Header = ({ children }) => {
  const [role, setRole] = useState("");
  const [username, setUserName] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  
  // console.log("roles", role);
  useEffect(() => {
    let userRole = localStorage.getItem("role");
    if (userRole) {
      setIsAuth(true);
      setRole(userRole);
      setUserName(localStorage.getItem("username"));
    
    }
  }, []);

  return (
    <>
      {" "}
      <Navbar expand="lg" className="bg-success sticky-top">
        <Container fluid>
          <Navbar.Brand to="/">
            <img src={logo} width="110" height="90" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll bg-light" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {" "}
              {!isAuth ? (
                <div className="flex-inline">
                  <Nav className="me-auto w-100">
                    <Link
                      to="/"
                      className="fw-bold text-white text-decoration-none d-block "
                    >
                      <FaIcon.FaHome />
                      &nbsp; Home
                    </Link>
                    &nbsp;
                    <Link
                      to="/contact"
                      className="fw-bold text-white text-decoration-none ms-3"
                    >
                      <FaIcon.FaAddressBook />
                      &nbsp; Contact Us
                    </Link>
                    <Link
                      to="/about"
                      className="fw-bold text-white text-decoration-none ms-3"
                    >
                      <FaIcon.FaIdCard />
                      &nbsp; About Us
                    </Link>
                  </Nav>
                </div>
              ) : (
                <div className="flex-inline">
                  {role === "Adminstrator" && (
                    <Nav className="me-auto w-100 flex-inline mt-2 ">
                      {" "}
                      <NavDropdown
                        title={
                          <span className="text-light hover-overlay mb-5 ">
                            <FaIcon.FaPlane />
                            &nbsp;Manage Flight
                          </span>
                        }
                        id="basic-nav-dropdown"
                        className="fw-bold text-white text-decoration-none ms-3   pb-3 "
                      >
                        <NavDropdown.Item>
                          <Link
                            to="/admin/Flight"
                            className="fw-bold text-dark text-decoration-none ms-3 mt-2 "
                          >
                            <FaIcon.FaPlane />
                            &nbsp; Flight
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/ManageAirCrafts"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaPlane />
                            &nbsp; Assign Flight
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title={
                          <span className="text-light hover-overlay mb-5 ">
                            <FaIcon.FaPlaneDeparture />
                            &nbsp;AirCaft
                          </span>
                        }
                        id="basic-nav-dropdown"
                        className="fw-bold text-white text-decoration-none ms-3   pb-3 "
                      >
                        <NavDropdown.Item>
                          <Link
                            to="/admin/addAircraft"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaPlaneDeparture />
                            &nbsp; Add AirCrafts
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allrequestedaircrafts"
                            className="fw-bold text-dark  text-decoration-none  mt-2  ms-3 "
                          >
                            <FaIcon.FaPlaneDeparture />
                            &nbsp; AirCraft Request
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/aircraft/allaircraft"
                            className="fw-bold text-dark  text-decoration-none  mt-2  ms-3 "
                          >
                            <FaIcon.FaPlaneDeparture />
                            &nbsp; AirCrafts
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        title={
                          <span className="text-light hover-overlay">
                            <FaIcon.FaUser />
                            &nbsp;Users
                          </span>
                        }
                        id="basic-nav-dropdown"
                        className="fw-bold text-white text-decoration-none ms-3   "
                      >
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allPilots"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaUser />
                            &nbsp; Pilot
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allCopilots"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaUser />
                            &nbsp; CoPilot
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allCabinCrew"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaUser />
                            &nbsp; Cabincrew
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/allTechnican"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaUser />
                            &nbsp; Technicain
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/admin/admins"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaUser />
                            &nbsp; Admin
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="bg-success">
                          <Link
                            to="/admin/Registeruser"
                            className="fw-bold text-dark text-decoration-none ms-3 s text-light"
                          >
                            <FaIcon.FaTasks className="text-light" />
                            &nbsp; Register User
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>{" "}
                      <Link
                        to="/admin/IataInfo"
                        className="fw-bold text-white text-decoration-none  mt-2  ms-3  "
                      >
                        <FaIcon.FaList />
                        &nbsp; Iata
                      </Link>
                      <Link
                        to="/Contactmsg"
                        className="fw-bold text-white text-decoration-none  mt-2  ms-3  "
                      >
                        <FaIcon.FaIdCard />
                        &nbsp; Contact
                      </Link>
                    </Nav>
                  )}

                  {(role === "Pilot" || role === "CoPilot") && (
                    <div className=" fluid  w-100">
                      <Link
                        to="/pilot/flight"
                        className="fw-bold text-white text-decoration-none ms-3 "
                      >
                        <FaIcon.FaPlaneDeparture />
                        &nbsp; Departure Verification{" "}
                      </Link>
                      <Link
                        to="/Pilot/arrivalverfication"
                        className="fw-bold text-white text-decoration-none ms-3 "
                      >
                        <FaIcon.FaPlaneArrival />
                        &nbsp; Arrival Verification{" "}
                      </Link>
                    </div>
                  )}

                  {role === "Cabincrew" && (
                    <div className="d-flex">
                      {" "}
                      <NavDropdown
                        title={
                          <span className="text-light hover-overlay mb-5 ">
                            <FaIcon.FaPlane />
                            &nbsp;Flight
                          </span>
                        }
                        id="basic-nav-dropdown"
                        className="fw-bold text-white text-decoration-none ms-3   pb-3 "
                      >
                        <NavDropdown.Item>
                          <Link
                            to="/flights/cabin/departed"
                            className="fw-bold text-dark text-decoration-none ms-3 mt-2 "
                          >
                            <FaIcon.FaPlane />
                            &nbsp; Departed
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/flight/cabin/arrived"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaPlane />
                            &nbsp; Arrived
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link
                            to="/cabin/flights/"
                            className="fw-bold text-dark text-decoration-none ms-3"
                          >
                            <FaIcon.FaPlane />
                            &nbsp; Assigned
                          </Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Link
                        to="/include/medicalrequest"
                        className="fw-bold text-white text-decoration-none ms-3  mt-2 "
                      >
                        <FaIcon.FaHeartbeat />
                        &nbsp; Medical Request
                      </Link>
                    </div>
                  )}
                  {role === "Technicain" &&
                    localStorage.getItem("Group") !== "None" && (
                      <div className="d-flex">
                        {" "}
                        <NavDropdown
                          title={
                            <span className="text-light hover-overlay mb-5 ">
                              <FaIcon.FaPlane />
                              &nbsp;Flight
                            </span>
                          }
                          id="basic-nav-dropdown"
                          className="fw-bold text-white text-decoration-none ms-3   pb-3 "
                        >
                          <NavDropdown.Item>
                            <Link
                              to="/flight/techncain/departed"
                              className="fw-bold text-dark text-decoration-none ms-3 mt-2 "
                            >
                              <FaIcon.FaPlane />
                              &nbsp; Departed
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link
                              to="/flight/techncain/arrived"
                              className="fw-bold text-dark text-decoration-none ms-3"
                            >
                              <FaIcon.FaPlane />
                              &nbsp; Arrived
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <Link
                              to="/flight/techncain/assigned"
                              className="fw-bold text-dark text-decoration-none ms-3"
                            >
                              <FaIcon.FaPlane />
                              &nbsp; Assigned
                            </Link>
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Link
                          to="/include/medicalrequest"
                          className="fw-bold text-white text-decoration-none ms-3  mt-2 "
                        >
                          <FaIcon.FaHeartbeat />
                          &nbsp; Medical Request
                        </Link>
                      </div>
                    )}
                  {role === "Technicain" &&
                    localStorage.getItem("Group") === "None" && (
                      <Link
                        to="/technician/AirCraftMaintenance"
                        className="fw-bold text-white text-decoration-none ms-3 "
                      >
                        <FaIcon.FaFirstAid className="fs-5 " />
                        &nbsp; Maintenance
                      </Link>
                    )}
                </div>
              )}
            </Nav>
            {(role === "Adminstrator" ||
              role === "Cabincrew" ||
              role === "Pilot" ||
              role === "CoPilot" ||
              role === "Technicain" ||
              role === "Treasury") && (
              <Form className="d-flex">
                <Button className="bg-info me-3 fs-3">
                  {" "}
                  <Link
                    className="fw-bold text-light text-decoration-none mt-2 "
                    to="/userdetail"
                  >
                    <div
                      className="d-flex "
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <ImIcon.ImUserTie />
                      <div className=" ml-2 media-body">
                        <h5 className="mt-2 mb-0">{username}</h5>
                      </div>
                    </div>
                  </Link>
                </Button>
                <Button variant="outline-danger">
                  {" "}
                  <Link
                    to="/logout"
                    className="fw-bold text-light text-decoration-none  mt-2 fs-5 "
                  >
                    {" "}
                    {/* GiCaptainHatProfile */}
                    <FaIcon.FaPowerOff className="fs-3" /> Logout &nbsp;
                  </Link>
                </Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};
{
  /* 
  
  <Link
            to="/history"
            className="fw-bold text-white text-decoration-none ms-3 mt-2 "
          >
            <FaIcon.FaHistory />
            &nbsp; History
          </Link> */
}

  //  <Navbar expand="lg" className="bg-success" sticky="top">
  //    <Navbar.Brand to="#home">
  //      <img src={logo} width="100" height="70" alt="Logo" />
  //    </Navbar.Brand>
  //    <Container fluid>
  //      <Navbar.Collapse id="basic-navbar-nav">
  //        <Nav className="me-auto w-100">
  //          {!isAuth ? (
  //            <div className="flex-inline">
  //              <Nav className="me-auto w-100">
  //                <Link
  //                  to="/"
  //                  className="fw-bold text-white text-decoration-none d-block "
  //                >
  //                  <FaIcon.FaHome />
  //                  &nbsp; Home
  //                </Link>
  //                &nbsp;
  //                <Link
  //                  to="/contact"
  //                  className="fw-bold text-white text-decoration-none ms-3"
  //                >
  //                  <FaIcon.FaAddressBook />
  //                  &nbsp; Contact Us
  //                </Link>
  //                <Link
  //                  to="/about"
  //                  className="fw-bold text-white text-decoration-none ms-3"
  //                >
  //                  <FaIcon.FaIdCard />
  //                  &nbsp; About Us
  //                </Link>
  //              </Nav>
  //            </div>
  //          ) : (
  //            <div className="flex-inline">
  //              {role === "Adminstrator" && (
  //                <Nav className="me-auto w-100 flex-inline ">
  //                  {" "}
  //                  <NavDropdown
  //                    title={
  //                      <span className="text-light hover-overlay mb-5 ">
  //                        <FaIcon.FaPlane />
  //                        &nbsp;Manage Flight
  //                      </span>
  //                    }
  //                    id="basic-nav-dropdown"
  //                    className="fw-bold text-white text-decoration-none ms-3   pb-3 "
  //                  >
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/Flight"
  //                        className="fw-bold text-dark text-decoration-none ms-3 mt-2 "
  //                      >
  //                        <FaIcon.FaPlane />
  //                        &nbsp; Flight
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/ManageAirCrafts"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaPlane />
  //                        &nbsp; Assign Flight
  //                      </Link>
  //                    </NavDropdown.Item>
  //                  </NavDropdown>
  //                  <NavDropdown
  //                    title={
  //                      <span className="text-light hover-overlay mb-5 ">
  //                        <FaIcon.FaPlaneDeparture />
  //                        &nbsp;AirCaft
  //                      </span>
  //                    }
  //                    id="basic-nav-dropdown"
  //                    className="fw-bold text-white text-decoration-none ms-3   pb-3 "
  //                  >
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/addAircraft"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaPlaneDeparture />
  //                        &nbsp; Add AirCrafts
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/allrequestedaircrafts"
  //                        className="fw-bold text-dark  text-decoration-none  mt-2  ms-3 "
  //                      >
  //                        <FaIcon.FaPlaneDeparture />
  //                        &nbsp; AirCraft Request
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/aircraft/allaircraft"
  //                        className="fw-bold text-dark  text-decoration-none  mt-2  ms-3 "
  //                      >
  //                        <FaIcon.FaPlaneDeparture />
  //                        &nbsp; AirCrafts
  //                      </Link>
  //                    </NavDropdown.Item>
  //                  </NavDropdown>
  //                  <NavDropdown
  //                    title={
  //                      <span className="text-light hover-overlay">
  //                        <FaIcon.FaUser />
  //                        &nbsp;Users
  //                      </span>
  //                    }
  //                    id="basic-nav-dropdown"
  //                    className="fw-bold text-white text-decoration-none ms-3   "
  //                  >
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/allPilots"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaUser />
  //                        &nbsp; Pilot
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/allCopilots"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaUser />
  //                        &nbsp; CoPilot
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/allCabinCrew"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaUser />
  //                        &nbsp; Cabincrew
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/allTechnican"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaUser />
  //                        &nbsp; Technicain
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item>
  //                      <Link
  //                        to="/admin/admins"
  //                        className="fw-bold text-dark text-decoration-none ms-3"
  //                      >
  //                        <FaIcon.FaUser />
  //                        &nbsp; Admin
  //                      </Link>
  //                    </NavDropdown.Item>
  //                    <NavDropdown.Item className="bg-success">
  //                      <Link
  //                        to="/admin/Registeruser"
  //                        className="fw-bold text-dark text-decoration-none ms-3 s text-light"
  //                      >
  //                        <FaIcon.FaTasks className="text-light" />
  //                        &nbsp; Register User
  //                      </Link>
  //                    </NavDropdown.Item>
  //                  </NavDropdown>
  //                  <Link
  //                    to="/Contactmsg"
  //                    className="fw-bold text-white text-decoration-none  mt-2  ms-3  "
  //                  >
  //                    <FaIcon.FaIdCard />
  //                    &nbsp; Contact
  //                  </Link>
  //                  <Link
  //                    to="/include/medicalrequest"
  //                    className="fw-bold text-white text-decoration-none ms-3  mt-2 "
  //                  >
  //                    <FaIcon.FaHeartbeat />
  //                    &nbsp; Medical Request
  //                  </Link>
  //                  <Link
  //                    to="/logout"
  //                    className="fw-bold text-light text-decoration-none ms-3 mt-2 "
  //                  >
  //                    Logout
  //                  </Link>
  //                </Nav>
  //              )}

  //              {role === "Pilot" && (
  //                <div className=" fluid border w-100">
  //                  <Link
  //                    to="/pilot/flight"
  //                    className="fw-bold text-white text-decoration-none ms-3 "
  //                  >
  //                    <FaIcon.FaPlane />
  //                    &nbsp; Flight{" "}
  //                  </Link>
  //                  <Link
  //                    to="/Pilot/arrivalverfication"
  //                    className="fw-bold text-white text-decoration-none ms-3 "
  //                  >
  //                    <FaIcon.FaPlaneArrival />
  //                    &nbsp; Arrival Verification{" "}
  //                  </Link>
  //                  <Link
  //                    to="/logout"
  //                    className="fw-bold text-light text-decoration-none ms-5  mt-2   "
  //                  >
  //                    <FaIcon.FaRegArrowAltCircleLeft className="fs-5" />
  //                    &nbsp; Logout
  //                  </Link>
  //                </div>
  //              )}

  //              {role === "Cabincrew" && (
  //                <div>
  //                  {" "}
  //                  {/* <Link
  //                       to="/cabin/flights/${CabG}"
  //                       className="fw-bold text-white text-decoration-none ms-3 "
  //                     >
  //                       <FaIcon.FaPlane />
  //                       &nbsp; Flight
  //                     </Link> */}
  //                  <Link
  //                    to="/include/medicalrequest"
  //                    className="fw-bold text-white text-decoration-none ms-3  mt-2 "
  //                  >
  //                    <FaIcon.FaHeartbeat />
  //                    &nbsp; Medical Request
  //                  </Link>
  //                  <Link
  //                    to="/logout"
  //                    className="fw-bold text-light text-decoration-none ms-3 mt-2 "
  //                  >
  //                    Logout
  //                  </Link>
  //                </div>
  //              )}

  //              {role === "Technicain" && (
  //                <Link
  //                  to="/technician/AirCraftMaintenance"
  //                  className="fw-bold text-white text-decoration-none ms-3 "
  //                >
  //                  <FaIcon.FaFirstAid className="fs-5 " />
  //                  &nbsp; Maintenance
  //                </Link>
  //              )}
  //            </div>
  //          )}
  //        </Nav>
  //      </Navbar.Collapse>
  //    </Container>
  //  </Navbar>;
// <div className="flex">
//   <div>
//     {" "}
//     {/* <NavDropdown
//         title={
//           <span className="text-light hover-overlay">
//             <FaIcon.FaPlane />
//             &nbsp;Flight
//           </span>
//         }
//         id="basic-nav-dropdown"
//         className="fw-bold  w-25   "
//       >
//         <NavDropdown.Item>
//           <Link
//             to="/admin/ManageFlight"
//             className="fw-bold text-dark text-decoration-none ms-3"
//           >
//             Manage Flight
//           </Link>
//         </NavDropdown.Item>
//       </NavDropdown> */}
//   </div>
//   <div>
//     <NavDropdown
//       title={
//         <span className="text-light hover-overlay">
//           <FaIcon.FaPlane />
//           &nbsp;AirCaft
//         </span>
//       }
//       id="basic-nav-dropdown"
//       className="fw-bold text-white text-decoration-none ms-3  w-25 "
//     >
//       <NavDropdown.Item>
//         <Link
//           to="/admin/addAircraft"
//           className="fw-bold text-dark text-decoration-none ms-3"
//         >
//           {" "}
//           Add AirCrafts
//         </Link>
//       </NavDropdown.Item>
//       <NavDropdown.Item>
//         <Link
//           to="/admin/ManageAirCrafts"
//           className="fw-bold text-dark text-decoration-none ms-3"
//         >
//           {" "}
//           Manage Flight
//         </Link>
//       </NavDropdown.Item>
//     </NavDropdown>
//   </div>
//   <Link
//     to="/"
//     className="fw-bold text-white text-decoration-none ms-3 mt-2 "
//   >
//     &nbsp; Logout
//   </Link>
// </div>;
// };
// };
// export const Header = ({children}) => {
//        const items = [
//         {
//             label:'Manage Flight',
//             items:[
//                 {
//                     label:'Flight',
//                     icon:<FaIcon.FaPlane/>,
//                     path:'/pilot/Flight'

//                 }
//             ]
//         },
//         {
//             label:'Medical',
//             icon:"",
//             items:[
//                 {
//                     label:'Request',
//                     icon:<FaIcon.FaHeartbeat/>
//                 }
//             ]
//         },
//         {
//             label:'Arrival',
//             icon:'',
//             items:[
//                 {
//                     label:'  Arr.verification',
//                     icon:<FaIcon.FaPlaneArrival/>
//                 }
//             ]
//         },
//         {
//           label:'Logout',

//         }
//     ];
//     const start = <img alt="logo" src={logo}  height="80" width="80" className="p-mr-2"></img>;
//     const end = <InputText placeholder="Search" type="text" />;

//     return (
//         <div className='text-success'>
//             <div className="text-success">
//                 <Menubar model={items} path={items.path} start={start} end={end} className='bg-success text-white fw-bold pb-0' />

//             </div>
//             {children}
//         </div>
//     );

// const navigate = useNavigate();
// const Header = [
//   {
//     label: "Home",
//     icon: PrimeIcons.HOME,
//     command: () => {
//       navigate("/");
//     },
//   },
//   {
//     label: "about",
//     icon: PrimeIcons.ARROW_CIRCLE_RIGHT,
//     command: () => {
//       navigate("/about");
//     },
//   },
//   {
//     label: "contact",
//     icon: PrimeIcons.PHONE,
//     command: () => {
//       navigate("/contact");
//     },
//   },
// ];
// const Pilot = [
//   {
//     label: "Home",
//     icon: PrimeIcons.HOME,
//     command: () => {
//       navigate("/");
//     },
//   },
//   {
//     label: "about",
//     icon: PrimeIcons.ARROW_CIRCLE_RIGHT,
//     command: () => {
//       navigate("/about");
//     },
//   },
//   {
//     label: "contact",
//     icon: PrimeIcons.PHONE,
//     command: () => {
//       navigate("/contact");
//     },
//   },
// ];
// const start = (
//   <img alt="logo" src={logo} height="80" width="80" className="p-mr-2"></img>
// );
// return (
//   <div className="text-success">
//     <div className="text-success">
//       <Menubar
//         model={Header}
//         className="bg-success text-white fw-bold pb-0"
//         start={start}
//       />
//     </div>
//     {children}
//   </div>
// );
