import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import { Header } from "../../dashboard/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const PilotsFlight = () => {
  const [flight, setFlight] = useState([]);
  const [alertshow, setalertshow] = useState(false);
  const handleCloseGrant = () => setalertshow(false);
  const [id, setId] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [destination, setdestination] = useState([]);
  const [departureDateTime, setdepartureDateTime] = useState([]);
  const [arrivalDateTime, setarrivalDateTime] = useState([]);
  const [locationStatus, setLocationstatus] = useState([]);
  const [cabingroup, setcabingroup] = useState([]);
  const [technicainGroup, settechnicain] = useState([]);

   useEffect(() => {
     if (localStorage.getItem("role") === "Pilot") {
       axios
         .get(
           `https://localhost:7093/api/Flight/pilotID/${localStorage.getItem(
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
           `https://localhost:7093/api/Flight/CopilotID/${localStorage.getItem(
             "pilotId"
           )}`
         )
         .then((response) => {
           setFlight(response.data);
         });
     }
   }, []);
   function UpdateStatus() {
     axios
       .put(`https://localhost:7093/api/Flight/updateFlight${id}`, {
         id,
         origin,
         destination,
         departureDateTime,
         arrivalDateTime,
         locationStatus,
         cabingroup,
         technicainGroup,
       })
       .then((res) => {
         window.location.reload();
         console.log(res.data);
       })
       .catch((err) => {
         return <h3>Unable to update please try it Again</h3>;
       });
   }

   const handleOpengrant = (item) => {
     setalertshow(true);
     setId(item.id);
     setOrigin(item.origin);
     setdestination(item.destination);
     setdepartureDateTime(item.departureDateTime);
     setarrivalDateTime(item.arrivalDateTime);
     var location = "Departed";
     setLocationstatus(location);
     setcabingroup(item.cabingroup);
     settechnicain(item.technicainGroup);
   };

   return (
     <>
       <Header>
         <Modal
           show={alertshow}
           onHide={handleCloseGrant}
           backdrop="static"
           keyboard={false}
         >
           <Modal.Body>
             <h4>Are You Leaved your origin </h4>
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
                                 {new Date(items.departureDateTime) <
                                   Date.now() && (
                                   <Link>
                                     <button
                                       className="btn btn-outline-danger text-light fw-bold"
                                       onClick={() => handleOpengrant(items)}
                                     >
                                       Departed
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
                               You have No UpComing flight
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
     </>
   );
};
