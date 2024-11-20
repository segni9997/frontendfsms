import React, { useEffect, useState } from "react";

import { Header } from "../../dashboard/Header";
import axios from "axios";

export default function Message() {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7093/api/ContactUs").then((res) => {
      setmessages(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Header>
      <div className="fluid mt-5 ms-5 ">
        <div className="">
          {/* <Link to='/add' className='button me-auto'>Add AirCraft </Link> */}

          <h3 className="mb-5">User Messages</h3>

          <table className="table">
            <thead className="table-success ">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((data, i) => (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Header>
  );
}
