import { Header } from "../../dashboard/Header";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
export const Aircraftnav = ({ children }) => {
  const [admin, setAdmin] = useState(true);
  const [Technicain, setTechnician] = useState(true);
  const [treasury, setTreasury] = useState(true);
  const [role, setRole] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let userRole = localStorage.getItem("role");
    if (userRole) {
      setIsAuth(true);
      setRole(userRole);
    }
  }, []);
  return (
    <>
      <Header>
        <div className="">
          {role === "Adminstrator" && (
            <>
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
            </>
          )}
          {role === "Technicain" && (
            <Link to="/technician/AirCraftMaintenance">
              <button
                type="button"
                class="btn btn-outline-secondary mx-2 mt-5 fw-bold"
              >
                On Maintenace Aircraft
              </button>
            </Link>
          )}
          {role === "Treasury" && (
            <>
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
            </>
          )}
        </div>
      </Header>
      {children}
    </>
  );
};
