import axios from "axios";
import "../Components_css/TrainingProgram.css";
import { useState, useEffect } from "react";
import AOS from "aos";  // استيراد مكتبة AOS
import "aos/dist/aos.css";  // استيراد CSS الخاص بالمكتبة
import { Link } from "react-router-dom";

export default function TrainingProgram() {
  const [Training, setTraining] = useState([]);

  // Function to fetch training program data
  const GetDateTraingProgram = () => {
    axios
      .get("http://localhost:1337/api/trainingprograms?populate=*")
      .then((res) => {
        console.log("API Response:", res.data); // Log API response to check structure
        setTraining(res.data.data); // Update state with fetched data
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log error if fetching fails
      });
  };

  // Call GetDateTraingProgram when the component loads
  useEffect(() => {
    GetDateTraingProgram();
    AOS.init();  // تفعيل AOS
  }, []);

  return (
    <div className="container h-75 pt-1">
      <div className="row" style={{ paddingTop: "80px" }}>
        {
          Training.map((el, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              style={{}}
              key={el.documentId}
              data-aos="fade-up"  // تعيين نوع الأنيميشن
              data-aos-delay={index * 200}  // تقليل التأخير بين العناصر
              data-aos-duration="500"  // تحديد مدة الأنيميشن (500 ملي ثانية)
            >
              <div className="card container" style={{ width: "100%", border: "none",background:"#ffffff00" }}>
                <img
                  src={`http://localhost:1337/` + el.TrainingMedia[0].url}
                  className="card-img-top"
                  alt="Training Media"
                />
                <div className="card-body">
                  <h5 className="trainingCardTitle">{el.TrainingText}</h5>
                  <small className="trainingTextBodySecondary">
                    {el.TrainingParagraph}
                  </small>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "20px" }}>
        <button className="btn btn-primary">
          <Link 
            className="text-light" 
            style={{ textDecoration: "none" }} 
            to={'./Programs'}
          >
            Subscribe
          </Link>
        </button>
      </div>
    </div>
  );
}
