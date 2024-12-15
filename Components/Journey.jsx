import { useEffect, useState } from "react";
import "../components_Css/Journey.css";
import axios from "axios";
import { useTranslation } from "react-i18next"; // استيراد useTranslation
import AOS from "aos"; // استيراد AOS
import "aos/dist/aos.css"; // استيراد CSS الخاص بالمكتبة

export default function Journey() {
  const { t } = useTranslation(); // استخدام الترجمة
  const [Journeys, setJourneys] = useState([]);

  const getDataJourneys = () => {
    axios
      .get("http://localhost:1337/api/journeys")
      .then((res) => {
        setJourneys(res.data.data); // تأكد من شكل البيانات هنا
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getDataJourneys();
    AOS.init(); // تفعيل AOS عند تحميل الكومبوننت
  }, []);

  return (
    <div className="col-12" style={{
      background: "linear-gradient(10deg, rgba(15,224,236,1) 0%, rgba(6,11,129,1) 100%)",
      color: "white",
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="container text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1>{t('Journey')}</h1> {/* ترجم النص هنا */}
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <h3>{t('For a long time, I’ve had a philosophy and a personal vision for achieving the ideal form.')}</h3> {/* ترجم النص هنا */}
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          {Journeys.map((el, index) => (
            <div key={index} className="journey-card" data-aos="zoom-in" data-aos-duration="500">
              <p style={{ color: "white" }}>
                {el.journeyn} {/* تأكد من اسم الحقل هنا */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
