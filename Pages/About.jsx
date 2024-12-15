//  eslint-disable react/display-name */
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../sections/NavBar";
import "../pages_css/Abuot.css"; // Load CSS for the loading screen
import BackgroundImage2 from "../imgs/Mofite.png"; // Loading screen image
import ContactForm from "../Components/ContactForm";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import axios from "axios";

//  eslint-disable-next-line react-refresh/only-export-components
export default function AboutPage() {
  const [loading, setLoading] = useState(true); // State to control loading screen visibility
  const [AboutMoamen, setAboutMoamen] = useState([]); // State to store API data

  // Fetch data from the API
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/abouts?populate=*`);
      setAboutMoamen(res.data.data); // Update state with fetched data
      setLoading(false); // Hide the loading screen
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
  };

  // Initial setup: fetch data and initialize AOS
  useEffect(() => {
    getData();
    AOS.init(); // Initialize AOS for animations
  }, []);

  // Render loading screen while data is being fetched
  if (loading) {
    return (
      <div className="loading-screen">
        <img src={BackgroundImage2} alt="Loading" className="loading-image" />
      </div>
    );
  }

  return (
    <div >
      {/* Navigation Bar */}
      <NavBar />

     
      <div
        style={{
          minHeight: "70vh",
          padding: "2rem",
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className=" mb-3"
          style={{
            maxWidth: "95vw",
            width: "100%",
            border: "none",
            
            color: "#3d7dd8",
          }}
          data-aos="fade-up" // AOS animation for the card
          data-aos-duration="1500"
        >
          <div
            className="text-center m-5"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Who is Moamen Maher?
          </div>

          {/* Card content */}
          <div className="row g-0">
            
            <div
              className="col-md-4 col-12"
              data-aos="fade-left" 
              data-aos-duration="1500"
            >
              {AboutMoamen.map((el) => (
                <img
                  key={el.id}
                  src={`http://localhost:1337` + el.About_img.url} 
                  className="img-fluid rounded-start"
                  alt="About Moamen"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              ))}
            </div>

            {/* Right section: Text */}
            <div
              className="col-md-8 col-12 d-flex align-items-center"
              data-aos="fade-right" // AOS animation for the text
              data-aos-duration="1500"
            >
              <div className="card-body">
                {AboutMoamen.map((el) => (
                  <p
                    className="card-text"
                    key={el.id} // Ensure a unique key for each item
                    style={{
                      fontSize: "25px",
                      lineHeight: "37px",
                      fontWeight: "400",
                      color: "#3d7dd8",
                    }}
                  >
                    {el.About_p} {/* Display paragraph data */}
                  </p>
                ))}
              </div>
            </div>
            <div className=" d-flex justify-content-center align-content-center pt-2" >
  <iframe
    width="80%"
    height="750"
    src="https://www.youtube.com/embed/5t4jP-ot04g?si=lAsDSbiE9Suo2F8n"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

          </div>
        </div>
      </div>

    
      <ContactForm />
      <Footer />
    </div>
  );
}
