import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// imports for react-toastify
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// importing loader
import { LineWave } from "react-loader-spinner";

import { Link } from "react-router-dom";

//! importing nav component
import Nav from "../components/Navbar";

import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInputPassword, setActiveInputPassword] = useState(false);
  const auth = "login";

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    // Removed resolver as zod is not available in JS
  });

  const onSubmit = async (data) => {
    const response = await loginAPI(data);

    if (!response.ok) {
      console.log(response.statusText); // Log the status text instead of trying to parse the response as JSON
      notifyError("Not Authorized");
    } else {
      const responseData = await response.json();
      console.log(responseData.name);

      // const nameParts = seperateName(responseData.name);
      // if (nameParts) {
      //   const { first, last } = nameParts; //? now i have the first and the last name now i will hit a the api with both the name
      //   console.log(first, last);
      //   const avatarResponse = await fetch(
      //     `https://ui-avatars.com/api/?name=${first}+${last}&background=random&rounded=true&size=50&bold=true&color=fff`
      //   );
      //   const avatarUrl = avatarResponse.url; // Extract the URL from the Response object
      //   setAvatar(avatarUrl); // Pass the URL string to setAvatar
    }
    reset();
    notifySuccess("Login Successful");

    // Delay the navigation by 2.5 seconds to allow the toast to be displayed
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="logo-title-login">
        <Link to="/">
          <h1 className="app-name-login">Brain Wave</h1>
        </Link>
      </div>
      <div className="login">
        <div className="login-left">
          <form
            noValidate
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Your input fields and submit button */}
            <h2 className="form-title">LOGIN</h2>
            <input
              className="input-email"
              type="email"
              id="email"
              placeholder="Email"
              {...register("username", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.username && (
              <p className="form-errors">{errors.username.message}</p>
            )}
            <div className="psswd-input">
              <input
                className="input input-pass"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                onChange={() => setActiveInputPassword(true)}
              />

              {activeInputPassword &&
                (showPassword ? (
                  <img
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                    src="./eye.svg"
                    alt="Hide password"
                  />
                ) : (
                  <img
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                    src="./eye-off.svg"
                    alt="Show password"
                  />
                ))}
            </div>
            {errors.password && (
              <p className="form-errors">{errors.password.message}</p>
            )}
            {isSubmitting ? (
              <LineWave
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              <button
                className="login-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            )}
            <Link to="/signup" className="auth-link">
              <p>Don't have an account?</p>
            </Link>
          </form>
        </div>
        <div className="login-right"></div>
      </div>
    </>
  );
};

export default Login;
