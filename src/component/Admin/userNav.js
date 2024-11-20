import { Header } from "../../dashboard/Header";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import ReactDOM from "react-dom";

import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

export const UserNav = ({ children }) => {
  return (
    <>
      <Header>
        {/* <div className="mt-5 fw-bolder ml-3">
          <h3>Exist Aircraft Information</h3>
        </div> */}
        <div className="">
          <Link to="/aircraft/allaircraft">
            <button
              type="button"
              class="btn btn-outline-primary mx-2 mt-5 fw-bold"
            >
              All Aircraft
            </button>
          </Link>
          <Link to="/aircraft/pendingaircraft">
            <button
              type="button"
              class="btn btn-outline-warning mx-2 mt-5 fw-bold"
            >
              Pending AirCraft
            </button>
          </Link>
          <Link to="/aircraft/readyaircraft">
            <button
              type="button"
              class="btn btn-outline-success ms-auto mt-5 fw-bold"
            >
              Ready
            </button>
          </Link>
          <Link to="/treasury/allrequestedairCraft">
            <button
              type="button"
              class="btn btn-outline-primary mx-2 mt-5 fw-bold"
            >
              All Requested AirCraft
            </button>
          </Link>
          <Link to="/aircraft/requestaccpted">
            <button
              type="button"
              class="btn btn-outline-success mx-2 mt-5 fw-bold"
            >
              Request accepted Aircraft
            </button>
          </Link>
          <Link to="/aircraft/requestdeclined">
            <button
              type="button"
              class="btn btn-outline-danger ms-auto mt-5 fw-bold"
            >
              Declined Requests
            </button>
          </Link>
          <Link to="/technician/AirCraftMaintenance">
            <button
              type="button"
              class="btn btn-outline-secondary mx-2 mt-5 fw-bold"
            >
              On Maintenace Aircraft
            </button>
          </Link>
        </div>
      </Header>
      {children}
    </>
  );
};
