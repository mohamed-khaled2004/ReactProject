import { useState, useEffect } from "react";
import "../Components_css/Header.css";
import BackgroundImage2 from "../imgs/Mofite.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [sc_video, setsc_video] = useState([]);

  const getdate = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1337/api/video-cotches?populate=*"
      );
      console.log(res.data); // التحقق من البيانات العائدة
      setsc_video(res.data.data);
    } catch (error) {
      console.error("حدث خطأ في جلب البيانات:", error);
    }
  };

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/ContactUs");
  const handleNavigate2 = () => navigate("/package");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdate().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={BackgroundImage2} alt="Loading" className="loading-image" />
      </div>
    );
  }

  return (
    <div id="landing-page-hero">
      <div className="video-container">
        {sc_video.map((el) => (
          <video
            key={el.id}
            src={`http://localhost:1337${el.camp.url}`}
            autoPlay
            loop
            muted
            className="video-bg"
          />
        ))}

        <div className="text-container">
          <h1 className="text-light">
            {t("Are you ready to start the journey and reach the treasure?")}
          </h1>

          <p
            className="text-primary fs-5"
            style={{ lineHeight: "26px", width: "70vw" }}
          >
            {t(
              "Prepare yourself and join thousands of young people in the most powerful and enjoyable adventure with a comprehensive training program that will help you become the best version of yourself under the supervision of a complete team of specialized doctors"
            )}
          </p>

          <div className="btn-container">
            <button className="btn btn-primary" onClick={handleNavigate}>
              {t("Definition")}
            </button>
            <button className="btn btn-primary" onClick={handleNavigate2}>
              {t("Subscribe")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
