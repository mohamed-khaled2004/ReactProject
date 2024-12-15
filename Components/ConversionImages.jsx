import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  Zoom, // Import Zoom effect
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom"; // Adding Zoom style

export default function ConversionImages() {
  const [products, setProducts] = useState([]);

  // Function to fetch the images from the API
  const getData = () => {
    axios
      .get("http://localhost:1337/api/conversion-images?populate=*")
      .then((res) => {
        setProducts(res.data.data); // Store the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Error handling
      });
  };

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      {/* Title Section */}
      <div className="col-12 d-flex justify-content-center pt-2">
        <p className="fs-3 fw-bold text-primary">We got no fans, we got Mofite</p>
      </div>

      {/* Swiper Component for Image Gallery */}
      <SwiperComponent
        modules={[Pagination, A11y, Autoplay, Zoom]} // Using necessary modules (Pagination, Autoplay, Zoom)
        pagination={{ clickable: true }} // Enable clickable pagination
        scrollbar={{ draggable: true }} // Enable draggable scrollbar
        spaceBetween={20} // Space between slides
        autoplay={{
          delay: 2000, // Slide delay time (2 seconds)
          disableOnInteraction: false, // Keep autoplay active even after interaction
        }}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide per view on small screens
            spaceBetween: 20, // Space between slides on small screens
          },
          480: {
            slidesPerView: 2, // 2 slides per view on medium screens
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1, // 1 slide per view on larger screens
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1, // 1 slide per view on desktops
            spaceBetween: 50,
          },
        }}
        zoom={true} // Enable Zoom effect
      >
        {/* Mapping through products to create slides */}
        {products.map((el) => (
          <SwiperSlide key={el.documentId}>
            <div
              style={{
                height: "50vh", // Container height
                display: "flex", // Flexbox layout for centering content
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "15px",
                padding: "10px",
                gap: "1rem",
              }}
            >
              {/* Image inside each slide */}
              <img
                className="col-12"
                style={{
                  width: "20vw", // Set width relative to viewport width
                  height: "40vh", // Set height relative to viewport height
                  objectFit: "contain", // Ensure the image doesn't stretch
                }}
                src={`http://localhost:1337/` + el.Conversion[0].url} // Image URL from API
                alt="Conversion"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
