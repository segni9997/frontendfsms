import React from "react";
import { Header } from "./Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function AddMessage() {
    axios
      .post("https://localhost:7093/api/ContactUs/submit", {
        name,
        email,
        message,
      })
      .then((res) => {
        console.log(res);
        navigate("/contact");
      })
      .catch((err) => console.log(err));
  }
  return (
    <Header>
      <div className="container-fluid px-5 my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-sm-6 d-none d-sm-block bg-image text-white">
                    <div className="mt-5 mx-3">
                      <h4 className="fw-bold">Contact US</h4>
                      <span className="mt-5 fs-4">
                        Ethiopian Tel : (251-011) 665 6666
                      </span>{" "}
                      <br />
                      <span className="mt-5 fs-4">
                        Fax : (251-011) 661 1474
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="col-sm-6 p-4">
                    <div className="text-center">
                      <div className="h3 fw-light">Contact Form</div>
                    </div>

                    <form id="contactForm" onSubmit={AddMessage}>
                      {/* Name Input */}
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Name"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                        <div className="invalid-feedback" required>
                          Name is required.
                        </div>
                      </div>
                      {/* Email Input */}
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="emailAddress"
                          type="email"
                          placeholder="Email Address"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="emailAddress">Email Address</label>

                        <div
                          className="invalid-feedback"
                          data-sb-feedback="emailAddress:email"
                        >
                          Email Address Email is not valid.
                        </div>
                      </div>
                      {/* Message Input */}
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Message"
                          style={{ height: "10rem" }}
                          data-sb-validations="required"
                          required
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message">Your Message</label>
                        <div
                          className="invalid-feedback"
                          data-sb-feedback="message:required"
                        >
                          Message is required.
                        </div>
                      </div>
                      {/* Submit success message */}
                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">
                            Form submission successful!
                          </div>
                        </div>
                      </div>
                      {/* Submit error message */}
                      <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">
                          Error sending message!
                        </div>
                      </div>
                      {/* Submit button */}
                      <div className="d-grid">
                        <button
                          className="btn btn-success btn-lg "
                          id="submitButton"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    {/* End of contact form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
