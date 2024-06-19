import React, { useState } from "react";
import "./signin.css";
import { Outlet, Link } from "react-router-dom";

export default function SignInPage() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signupData.email || !signupData.password) {
      setError("All Fields are Required");
      return;
    }
    if (!signupData.email.includes("@")) {
      setError("A valid email is required");
      return;
    }
    if (signupData.password.length <= 5) {
      setError("Password should be greater than 5 characters");
      return;
    }
    // Submit logic here
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container-image">
          <h1>Sign In</h1>
          <img
            src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704642606/image_123986672__1_-removebg-preview_j9nuhv.png"
            className="image-elemenet"
            alt="name"
          />
        </div>

        <div className="input-container">
          <label className="label-element-email">Email</label>
          <input
            className="input-element"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label-element-password">Password</label>
          <input
            className="input-element"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <button className="button-css" type="submit">
            Sign In
          </button>
          <Link to="/signup">
            <button className="button-css">Sign up</button>
          </Link>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
