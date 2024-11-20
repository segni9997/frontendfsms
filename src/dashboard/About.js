import React from "react";
import { Header } from "./Header";
import { Button } from "react-bootstrap";
import img1 from "../assets/image/Air1.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Header>
      <div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bolder">About ET</h1>
                <p className="lead text-muted mb-0 fw-bold">
                  Ethiopian Airlines is the fastest growing and most profitable
                  airline in Africa.In 2014, IATA ranked Ethiopian as the
                  largest airline in Africa in revenue and profit. In its
                  operations in the past close to seven decades, Ethiopian has
                  been a pioneer of African aviation as an aircraft technology
                  leader providing the first jet service in the continent in
                  1962, and availing the first African B767 in 1984, the first
                  African B777-200LR in 2010 and the first African and second
                  only to Japan B787 Dreamliner in 2012.{" "}
                </p>
                <p className="lead text-muted">
                  <Link to="/more">
                    <Button className="mt-5"> Need more</Button>
                  </Link>
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block ">
                <img
                  src={img1}
                  alt="avatar1"
                  className="img-fluid img-circle"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-4 font-weight-light fw-bold">Team</h2>
              </div>
            </div>
            <div className="row text-center ">
              {/* Team item*/}
    
              {/* End*/}
              {/* Team item*/}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                    alt=" avatar3"
                    width={100}
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Segni Asrat</h5>
                  <span className="small text-uppercase text-muted">
                    Full stack Developer
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="/ddd" className="social-link">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/sdf" className="social-link">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/sdfds" className="social-link">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/sdfds" className="social-link">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End*/}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
