import React, { useState } from "react";
import "../CSS/Sign.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp({ openModal }) {
  const [formData, setFormData] = useState({
    fullnames: "",
    phoneNumber: "",
    email: "",
    password: "",
    password: "",
    location: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      formIsValid = false;
    }

    // if (formIsValid) {
    //   axios
    //     .post("https://holidayplanner.onrender.com", formData)
    //     .then((response) => {
    //       console.log("Form data submitted ", response);
    //     })
    //     .catch((error) => {
    //       console.error("An error occurred:", error);
    //     });
    // } else {
    //   setErrors(newErrors);
    // }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      formIsValid = false;
    }

    if (formData.email.trim() === "" || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
      formIsValid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      formIsValid = false;
    }

    if (formIsValid) {
      console.log("Form data submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-form">
      <div className="header-form">
        <div className="text-form">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-form">
        <div className="input-one">
          <input type="text" placeholder="Full names"></input>
        </div>

        <div className="input-one">
          <input type="email" placeholder="Enter your email"></input>
        </div>

        <div className="input-one">
          <input type="password" placeholder="Enter password"></input>
        </div>

        <div className="submit-button1">
          <div className="forgot-password">
            {" "}
            Forgot Password<span>Click Here</span>
          </div>
          <div className="submitting">
            <div className="submit1">Sign Up</div>
            <div className="submit1">login</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
