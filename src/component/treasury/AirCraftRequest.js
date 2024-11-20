import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Header } from "../../dashboard/Header";
import { Aircraftnav } from "../Admin/Aircraftnav";
import axios from "axios";

export const AirCraftRequest = () => {
  const [requested, setRequested] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/AircraftRequest").then((res) => {
      setRequested(res.data);
    });
  });

  return (
    <>
      <Header className="">
        <div id="">
          <div id="main">
            <header className="mb-3"></header>
            <div className="page-heading">
              <div className="page-title">
                <div className="row">
                  <div className="col-3 order-md-2 order-first"></div>
                </div>
              </div>
              <section className="section mt-5">
                <div className="card">
                  <div className="card-header fw-bold">
                    Requested AirCraft Information
                  </div>
                  <div className="card-body">
                    <table className="table table-striped " id="table1">
                      <thead className="">
                        <tr className="">
                          <th>AircraftName</th>
                          <th>Model</th>
                          <th>Holding capaciy</th>
                          <th>Amount</th>
                          <th>Requested date</th>
                          <th>Request status</th>
                          <th>Arrival Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requested.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.aircraftName}</td>
                              <td>{items.model}</td>
                              <td>{items.capaciy}</td>
                              <td>{items.amountNeeded}</td>
                              <td>{items.reqDate}</td>
                              <td>{items.reqStatus}</td>
                              <td>{items.arrivalSatus}</td>
                              <td className="fw-bold text-success">
                                <Link
                                  to="/orderaircraft"
                                  className="text-decoration-none text-success"
                                >
                                  {items.status}
                                </Link>
                              </td>
                              <td></td>
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
      </Header>
    </>
  );
};
