import React, { useState } from "react";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //* ayrı stateler
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  //* birleştirilmiş state
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { firstName, lastName, email, password } = info;

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
    console.log(email, password);
  };
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              // onChange={(e) => setFirstName(e.target.value)}
              onChange={handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter your first name.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              // onChange={(e) => setLastName(e.target.value)}
              onChange={handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter your last name.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password.."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary form-control">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
