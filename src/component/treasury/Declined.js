import React from "react";

import { Link } from "react-router-dom";
import { Header } from "../../dashboard/Header";
import { Aircraftnav } from "../Admin/Aircraftnav";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const Declined = () => {
  const [color, setColor] = useState("");
  const [declinedrequest, setdeclinedrequest] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7093/api/AircraftRequest/Declined")
      .then((res) => {
        setdeclinedrequest(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
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
                        </tr>
                      </thead>
                      <tbody>
                        {declinedrequest.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>
                              <td className="text-danger fw-bold">
                                {items.reqStatus}
                              </td>
                              <td className="text-danger fw-bold">
                                {items.arrivalSatus}
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
