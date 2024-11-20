import React, { useEffect } from "react";
import { Header } from "../../dashboard/Header";
import { Link } from "react-router-dom";
import "../../assets/css/Name.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
export default function ManageAirCrafts() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/Aircraft/ArrivedWell").then((res) => {
      setResult(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <Header>
        <>
          <div className="fluid mt-5 ms-5 ">
            <div className="">
              {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

              <h3 className="mb-5">Available AirCrafts</h3>

              <table className="table">
                <thead className="table-success">
                  <tr>
                    <th>AirCaft Name</th>
                    <th>Model</th>
                    <th>AircraftID</th>
                    <th>Capacity</th>
                    <th>Technician Response</th>
                    <th>Assign Flight</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((key, index) => (
                    <tr key={index}>
                      <td>{key.airCraftName} </td>
                      <td>{key.airCraftModel} </td>
                      <td>{key.aircraftNo} </td>
                      <td>{key.aircrftCapacity}</td>

                      <td>{key.technicianresult}</td>
                      <td>
                        <Button className="bg-success">
                          <Link
                            to={`/admin/ManageFlight/${key.id}`}
                            className="text-light fw-bold text-decoration-none"
                          >
                            Assign Flight
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      </Header>
    </>
  );
}
