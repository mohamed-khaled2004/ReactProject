import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";  // Importing AOS (Animate on Scroll) library
import "aos/dist/aos.css";  // Importing the AOS CSS for styling the animations

export default function Cards() {  // Changed name from 'Cerds' to 'Cards' for clarity
  const [cards, setCards] = useState([]);  // Renamed 'car' to 'cards' for better understanding

  // Function to fetch data from the API
  const fetchData = () => {
    axios.get(`http://localhost:1337/api/cards?populate=*`)  // API endpoint to fetch card data
      .then((res) => {
        setCards(res.data.data);  // Setting the fetched data into state
        console.log(res.data.data);  // Logging the data for debugging
      }).catch((err) => {
        console.error("Error fetching data:", err);  // Error handling
      });
  };

  // useEffect hook to run once on component mount to fetch data and initialize AOS
  useEffect(() => {
    fetchData();  // Calling the fetch function to get data
    AOS.init({
      duration: 1000,  // Animation duration
      once: false,     // Allow animations to play every time they appear in view
      mirror: false    // Prevent reverse animation while scrolling
    });
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="container h-75 pt-1">
      <div className="row" style={{ paddingTop: "80px" }}>
        {cards.map((card, index) => (  // Looping through the 'cards' array and rendering each card
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={card.id || index}  // Using card.id as the unique key, fallback to index if not available
            data-aos="fade-up"  // Animation type on scroll
            data-aos-delay={index * 500}  // Staggering animations for each card
            data-aos-duration="1000"  // Setting the animation duration
          >
            <div className="card container h-100" style={{ width: "100%", border: "none", background:"#799aff17" }}>
              <img
                style={{ width: "50px" }}
                src={`http://localhost:1337/` + card.Img_card?.[0]?.url}  // Dynamic image source from API
                className="card-img-top"
                alt="Training Media"
              />
              <div className="card-body">
                <h5 className="text-primary">{card.text_card || "Default Title"}</h5>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
