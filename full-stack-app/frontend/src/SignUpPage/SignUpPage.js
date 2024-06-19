import React, { useState } from "react";
import "./signup.css";
import { Outlet, Link } from "react-router-dom";

export default function SignUpPage() {
  const [signupData, setSignupData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    setError("");
  };
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !signupData.name ||
      !signupData.phoneNumber ||
      !signupData.email ||
      !signupData.password
    ) {
      setError("All Fields are Required");
      return;
    }

    if (!/^\d+$/.test(signupData.phoneNumber)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!signupData.email.includes("@")) {
      setError("email Required");
      return;
    }
    if (signupData.password.length <= 5) {
      setError("password should be Greater than 5");
      return;
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container-image">
          <h1>Sign Up</h1>
          <img
            src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704642606/image_123986672__1_-removebg-preview_j9nuhv.png"
            className="image-elemenet"
            alt="name"
          />
        </div>
        <div className="input-container">
          <label className="label-element-name">Name</label>
          <input
            className="input-element"
            type="text"
            placeholder="name"
            onChange={handleChnage}
            name="name"
          />
        </div>
        <div className="input-container">
          <label className="label-element-phone">Phone Number</label>
          <input
            className="input-element"
            name="phoneNumber"
            type="text"
            placeholder="phone number"
            onChange={handleChnage}
          />
        </div>
        <div className="input-container">
          <label className="label-element-email">Email</label>
          <input
            className="input-element"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChnage}
          />
        </div>
        <div className="input-container">
          <label className="label-element-password">Password</label>
          <input
            className="input-element"
            type="text"
            placeholder="password"
            name="password"
            onChange={handleChnage}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <button className="button-css" type="submit">
            Sign Up
          </button>
          <Link to="/signin">
            <button className="button-css">Sign In</button>
          </Link>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
