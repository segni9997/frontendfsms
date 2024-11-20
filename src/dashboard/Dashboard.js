import React, { useState } from 'react';
import {Header} from './Header';

export const Dashboard=()=> {
  const {allFlight} =useState([])
  return (
    <Header>
      <div className="row">
        <div className="col-xl-3 col-md-4 mb-4 mt-5 ms-5">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                   All Flight
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 mb-4 mt-5 ms-5">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Anual Up Next Flights
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    25
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 mb-4 mt-5 ms-5">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Hours you had Flew(hr)
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    40
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 mb-4 mt-5 ms-5">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Hours left to fly(Hr)
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
    </Header>
  );
}

export default Dashboard