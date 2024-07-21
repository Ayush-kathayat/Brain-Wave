import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/LandingPage";
import Home from "./pages/Home/Home";

import "./App.css";

import Login from "./Auth/Login";
import SignUP from "./Auth/SignUp";

// clamp utility functions below

// function clamp(diffValue, min, max) {
//   return Math.min(Math.max(diffValue, min), max);
// }

// below is the details for the cursor

// let xScale = 1;
// let yScale = 1;

// let xPrev = 0;
// let yPrev = 0;

// let timeout;

// window.addEventListener("mousemove", (event) => {
//   clearTimeout(timeout);

//   let xdiff = event.clientX - xPrev;
//   xPrev = event.clientX;

//   let ydiff = event.clientY - yPrev;
//   yPrev = event.clientY;

//   // console.log(event);

//   if (event.clientY <= 20 || event.clientY >= 710) {
//     document.getElementById(
//       "mini-circle"
//     ).style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(0, 0)`;
//   } else {
//     // Only apply the transform if the condition is not met
//     xScale = clamp(xdiff, 0.6, 1.2);
//     yScale = clamp(ydiff, 0.6, 1.2);
//     document.getElementById(
//       "mini-circle"
//     ).style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xScale}, ${yScale})`;

//     timeout = setTimeout(() => {
//       document.getElementById(
//         "mini-circle"
//       ).style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1 , 1) `;
//     }, 100);
//   }
// });

function App() {
  return (
    <>
   

      {/* <div id="mini-circle"></div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
