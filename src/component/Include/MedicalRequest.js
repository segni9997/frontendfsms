import React, { useEffect, useState } from "react";
import { Header } from "../../dashboard/Header";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const MedicalRequest = () => {
  const [AddfullName, setFullname] = useState("");
  const [id, setID] = useState("");
  const [reason, setReason] = useState("");
  useEffect(() => {
    axios
      .post("")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Header>
      <form className="bg-success container mt-5 mx-auto">
        <div className="form-row mt-3 mx-auto">
          <div className="form-group text-white pt-5 pb-3 mx-auto w-75">
            <h5>
              Ethiopian AirLines Human Resource management Medical Services &
              safety Eng. Div
            </h5>
            <h6>
              <u>Visit Slip </u>
            </h6>
          </div>
          <div className=" col-md-12 d-flex ms-5 ">
            <div className="col-md-4 me-3">
              <input
                type="text "
                className="form-control  "
                placeholder="Full Name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className=" col-md-4 d-block">
              <input
                type="number"
                className="form-control "
                id=""
                placeholder="Registration Number"
                onChange={(e) => setID(e.target.value)}
              />
            </div>
          </div>
          <div className=" col-md-11 d-flex ms-5 mt-3">
            <div className="col-md-11 d-flex">
              <input
                type="text "
                className="form-control "
                placeholder="Reason to go to medical services..."
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </div>
          <div className=" w-25 mx-auto">
            <Button
              type="submit"
              className="btn btn-light fw-bold mt-3 mb-3 mx-auto  "
            >
              {" "}
              <Link
                to="/"
                className="fw-bold text-dark  fs-5 text-decoration-none "
              >
                Request
              </Link>
            </Button>
          </div>
        </div>
      </form>
    </Header>
  );
};

export default MedicalRequest;
