import { useEffect, useRef } from "react";
import "odometer/themes/odometer-theme-default.css";
import "../Components_css/Counters.css";
import insta from "../imgs/15707869.png";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Counters() {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting(); // بدء العد عند ظهور العنصر في الشاشة
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer && counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  function startCounting() {
    const odometers = document.querySelectorAll(".odometer");
    odometers.forEach((odometer) => {
      let startValue = 100000; // بداية العداد من 100,000
      const targetValue = 1000000; // الهدف هو 1,000,000
      const duration = 5000; // مدة الأنيميشن (5 ثواني)
      const startTime = Date.now(); // وقت البدء

      function animate() {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // النسبة المئوية للتقدم
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // دالة ease-out للتباطؤ

        let currentValue = Math.round(
          startValue + easeOutProgress * (targetValue - startValue)
        );

        // إذا وصلت القيمة إلى المليون، يتم عرض "1M"
        if (currentValue >= 1000000) {
          currentValue = 1000000; // تأكد من أن القيمة لا تتجاوز المليون
          odometer.innerHTML = "1M"; // عرض "1M" بدلاً من الرقم الكامل
        } else {
          odometer.innerHTML = currentValue.toLocaleString(); // عرض القيم من 100,000 إلى 1,000,000 بدون "M"
        }

        if (elapsedTime < duration) {
          requestAnimationFrame(animate); // استدعاء animate من جديد لخلق حركة سلسة
        }
      }

      animate(); // بدء الأنيميشن
    });
  }

  return (
    <div ref={counterRef}>
      <div className="col-12 d-flex justify-content-center fs-3 fw-bold">
        <p className="text-primary">We got no fans, we got Mofite!</p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "40vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
          className="counter-container"
        >
          {/* Counter Box 1 - Facebook */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon style={{ color: "#3c7cd7", fontWeight: "500", fontSize: "40px" }} icon={faFacebook} />
            </div>
            <div className="counter-box">
              <div className="odometer" style={{ color: "#3c82e5", fontWeight: "700" }}></div>
            </div>
          </div>

          {/* Counter Box 2 - Twitter */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon style={{ color: "#3c7cd7", fontWeight: "500", fontSize: "40px" }} icon={faTwitter} />
            </div>
            <div className="counter-box">
              <div className="odometer" style={{ color: "#3c82e5", fontWeight: "700" }}></div>
            </div>
          </div>

          {/* Counter Box 3 - Instagram */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center">
              <img src={insta} style={{ width: "40px", borderRadius: "10px" }} alt="Instagram" />
            </div>
            <div className="counter-box">
              <div className="odometer" style={{ color: "#3c82e5", fontWeight: "700" }}></div>
            </div>
          </div>

          {/* Counter Box 4 - Youtube */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon style={{ color: "red", fontWeight: "500", fontSize: "40px" }} icon={faYoutube} />
            </div>
            <div className="counter-box">
              <div className="odometer" style={{ color: "#3c82e5", fontWeight: "700" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
