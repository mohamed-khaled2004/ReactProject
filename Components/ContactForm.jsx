import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";  // Importing AOS (Animate on Scroll) library
import "aos/dist/aos.css";  // Importing AOS CSS for animation styling
import b1 from "../imgs/Mail sent-rafiki.png"; // Ensure the correct image path
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications

export default function ContactForm() {
  const [cards, setCards] = useState([]);  // Renamed 'car' to 'cards' for clarity
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    message: ''
  });

  // Function to fetch data from API
  const fetchData = () => {
    axios.get(`http://localhost:1337/api/cards?populate=*`)  // API call to fetch cards data
      .then((res) => {
        setCards(res.data.data);  // Storing the response data in state
      })
      .catch((err) => {
        console.error("Error fetching data:", err);  // Error handling
      });
  };

  useEffect(() => {
    fetchData();  // Fetch data on component mount
    AOS.init();  // Initialize AOS animations
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Store form data in LocalStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Show SweetAlert2 confirmation message
    Swal.fire({
      title: 'Form Submitted!',
      text: 'Thank you for contacting us.',
      icon: 'success',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#3085d6',
      backdrop: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Reset form data after submission
        setFormData({
          userName: '',
          phoneNumber: '',
          message: ''
        });
      }
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className="container-fluid p-0">
      {/* Main container for the form */}
      <div
        className="form-card mb-3 position-relative"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "linear-gradient(10deg, rgba(15,224,236,1) 0%, rgba(6,11,129,1) 100%)",
        }}
        data-aos="fade-up"  // Animation trigger on scroll
        data-aos-duration="1000"  // Duration of the animation
        data-aos-delay="200"  // Delay before animation starts
      >
        <div className="row g-0 w-100">
          {/* Animation section on the left */}
          <div className="col-lg-6 col-12 position-relative">
            <img 
              className="d-none d-lg-block col-" 
              src={b1} // Ensure correct path for image
              alt="Mail Sent Illustration"
              style={{ width: "100%" }}
            />
            <dotlottie-player 
              src="https://assets7.lottiefiles.com/packages/lf20_j5qv3ayq.json" 
              speed="1" 
              style={{ width: "300px", height: "300px" }} 
              loop 
              autoplay
            ></dotlottie-player>
            <div className="position-absolute top-0 start-0 w-100 h-100"></div>
          </div>

          {/* Form section on the right */}
          <div
            className="col-lg-6 col-12 d-flex align-items-center justify-content-center"
            style={{ zIndex: 2, padding: "20px" }}
          >
            <div className="w-100" style={{ maxWidth: "500px" }}>
              <h5 className="text-center mb-4 text-white">Contact Us</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label" style={{ color: "#3d7dd8" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={{ border: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label" style={{ color: "#3d7dd8" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    style={{ border: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label" style={{ color: "#3d7dd8" }}>
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows="5"
                    required
                    style={{ border: "none", resize: "none" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#007bff", color: "white" }} // White text color for the button
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
