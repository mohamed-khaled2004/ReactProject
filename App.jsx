import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import ContactUs from "./Pages/ContactUs";
import Package from "./Pages/Package";
import Transfers from "./Pages/Transfers";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import PaymentPage from "./Pages/PaymentPage";
import React from "react";
import ReactDOM from "react-dom/client"; 
import "./i18n"; 
import Shop from "./Pages/Shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "9px",
        cursor: "pointer",
        fontSize: "20px",
      }}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faChevronUp}/>
    </button>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="col-12">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Transfers" element={<Transfers />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
        </Routes>
      </div>
      <ScrollToTopButton /> {/* الزر الثابت */}
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
