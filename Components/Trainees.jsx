import axios from "axios";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Trainees() {
  const [Hero, setHero] = useState([]); // State to store the fetched hero data

  // Function to fetch hero data from the API
  const getHero = () => {
    axios
      .get("http://localhost:1337/api/heroes?populate=*") // API endpoint to fetch hero data
      .then((res) => {
        console.log(res.data); // Log the response to check the structure
        setHero(res.data.data); // Update the state with fetched hero data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Error handling
      });
  };

  useEffect(() => {
    getHero(); // Fetch data when the component is mounted
  }, []); // Empty dependency array means it only runs once when the component mounts

  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      {/* Main container for the hero cards */}
      <div className="row">
        {Hero.map((el) => (
          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4" // Bootstrap grid system
            key={el.id} // Use unique id as key for efficient rendering
          >
            <div className="card" style={{ border: "none" }}>
              {/* Check if hero image exists */}
              {el.Heroes?.[0]?.url ? (
                <img
                  src={`http://localhost:1337${el.Heroes[0].url}`} // Dynamic image URL from API
                  alt="Hero" // Alt text for accessibility
                  className="card-img-top" // Apply card image top styling
                  style={{
                    width: "100%", // Make image take full width of the card
                    height: "40vh", // Set fixed height for images
                    objectFit: "cover", // Ensure image covers the space without stretching
                    borderRadius: "15px", // Rounded corners for the image
                  }}
                />
              ) : (
                <p className="text-center">No Image Available</p> // Placeholder text if image is unavailable
              )}
              <div className="card-body">
                <h5 className="card-title text-center">Hero Title</h5>
                <p className="card-text text-center">Hero Description</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
