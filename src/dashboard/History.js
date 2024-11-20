import React from "react";
import { Header } from "./Header";

export const History = () => {
  const FlightDatas = [
    { title: "Total Flight", values: 21 },
    { title: "Anual Up Next Flights", values: 45 },
    { title: " Hours you had Flew(hr)", values: 67 },
    { title: "Hours left to fly(Hr)", values: 89 },
  ];
  const Treasury = [
    { title: "Requested New Aircraft", values: 10 },
    { title: "AirCraft On Work", values: 100 },
    { title: " New AirCraft Pending", values: 5 },
    { title: "New AirCraft", values: 3 },
  ];
  const FlightData = [
    { title: "Anual flight performed", values: 21 },
    { title: "Flight on Pending", values: 45 },
    { title: "Ordered AirCraft", values: 2 },
  ];

  const humanresource = [
    { title: " Available Pilots/Total", values: "34/100" },
    { title: "Available cabin Crue/Total", values: "300/600" },
    { title: " Available technician/Total", values: "70/200" },
  ];
  const treasuryinfo = [
    { title: " Ordered AirCrafts", values: 4 },
    { title: " Allowed Aircrafts", values: 2 },
    { title: " Ordered AirCraft", values: 2 },
  ];
  return (
    <>
      <Header>
        <span className=" fw-bolder fs-4 ">Treasury</span>
        <div className="row">
          {Treasury.map((items, index) => (
            <div className="col-xl-2 col-md-4 mb-4 mt-5 ms-5 mx-auto">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-xs font-weight-bold text-success text-uppercase mb-1"
                        key={index}
                      >
                        {items.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {items.values}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
        <span className=" fw-bolder  fs-4 ">sys admin</span> <br />
        <span className=" fw-bolder fs-4 me-5">Flights</span>
        <div className="row">
          {FlightData.map((items, index) => (
            <div className="col-xl-2 col-md-3 mb-4 mt-5  mx-auto">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-xs font-weight-bold text-success text-uppercase mb-1"
                        key={index}
                      >
                        {items.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {items.values}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <span className=" fw-bolder fs-4 ">Human Resource</span>
          {humanresource.map((items, index) => (
            <div className="col-xl-2 col-md-4 mb-4 mt-5 mx-auto">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-xs font-weight-bold text-success text-uppercase mb-1"
                        key={index}
                      >
                        {items.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {items.values}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <span className=" fw-bolder fs-4 ">Treasury</span>
          {treasuryinfo.map((items, index) => (
            <div className="col-xl-2 col-md-4 mb-4 mt-5 mx-auto">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-xs font-weight-bold text-success text-uppercase mb-1"
                        key={index}
                      >
                        {items.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {items.values}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className=" fw-bolder fs-4 ">Technician==</span>
        <div className="row">
          <div className="col-xl-2 col-md-4 mb-4 mt-5 mx-auto">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total Mainteined AirCraft
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      31
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-4 mb-4 mt-5 mx-auto">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      AirCraft pending
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      29
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <span className="fw-bolder ">Pilot</span> */}
        <div className="row">
          {FlightDatas.map((items, index) => (
            <div className="col-xl-2 col-md-4 mb-4 mt-5 ms-5 mx-auto">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="text-xs font-weight-bold text-success text-uppercase mb-1"
                        key={index}
                      >
                        {items.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {items.values}
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </Header>
    </>
  );
};
