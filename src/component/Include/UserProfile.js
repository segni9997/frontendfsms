import React, { useState } from "react";
import { Header } from "../../dashboard/Header";
import axios from "axios";

export const UserProfile = () => {
  const [password, setCurrentP] = useState([]);
  const [newPassword, setnewPassword] = useState([]);
  const [repeatpasword, setreapeatPassword] = useState([]);
  const userEmail = localStorage.getItem("useremail");
  const passworderror = "";
  const id = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");
  const group = localStorage.getItem("Group");
  const joinddate = new Date(localStorage.getItem("joinnedDate"));
  console.log("joined", joinddate);
  const loggedInTime = new Date(localStorage.getItem("loggedin"));
  const loggedOutTime = new Date(localStorage.getItem("loggedout"));

  function handlePasswordChange() {
    axios
      .post("https://localhost:7093/api/User/verifypassword", {
        userEmail,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Correct") {
          if (newPassword !== repeatpasword) {
            alert("password Doesnt Match");
          } else {
            axios
              .put(`https://localhost:7093/api/User/user/${id}`, {
                id,
                userEmail,
                userName,
                password: newPassword,
                group,
                joinddate,
                loggedInTime,
                loggedOutTime,
              })
              .then((res) => {
                alert("Password Updated Succesully");
              })
              .catch(() => {
                alert("unable to update");
              });
          }
        }
      })
      .catch((res) => {
        alert("Your Password is not Correct");
      });
  }
  return (
    <Header>
      <>
        <div
          className="container rounded bg-white mt-5 mb-5 "
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://th.bing.com/th/id/OIP.NWC6Zrnwr0fMxW8hGhQUqAAAAA?pid=ImgDet&rs=1"
                  alt="profilepic"
                />
                <span className="font-weight-bold">{userName}</span>

                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      defaultValue
                      disabled
                      value={localStorage.getItem("pilotName")}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Role</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue
                      placeholder="Role"
                      disabled
                      value={localStorage.getItem("role")}
                    />
                  </div>
                </div>{" "}
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue
                    disabled
                    value={userEmail}
                  />
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Group</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Group"
                      defaultValue
                      disabled
                      value={group}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 border-right ml-5">
              <div className="p-3 py-5">
                <br />
                <div className="col-md-12">
                  <label className="labels fs-4 mb-5">Change password</label>
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text w-25">
                        Current Password
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        required
                        placeholder="Type currently used Password"
                        onChange={(e) => setCurrentP(e.target.value)}
                      />
                    </div>{" "}
                    <div className="input-group mb-3">
                      <span className="input-group-text w-25">
                        New Password
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="inputGroupPrepend2"
                        placeholder="Type your new password"
                        onChange={(e) => setnewPassword(e.target.value)}
                        required
                      />
                      <div className="text-danger">{passworderror}</div>
                    </div>{" "}
                    <div className="input-group mb-3">
                      <span className="input-group-text w-25">
                        Repeate Password
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefaultUsername"
                        placeholder="Repeat the new password"
                        onChange={(e) => setreapeatPassword(e.target.value)}
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                    </div>{" "}
                    <div className="mt-5 text-center mb-2">
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                        onClick={handlePasswordChange}
                      >
                        Save Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Header>
  );
};
