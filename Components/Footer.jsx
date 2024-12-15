import { useEffect } from "react";
import AOS from "aos";  // استيراد مكتبة AOS
import "aos/dist/aos.css";  // استيراد CSS الخاص بالمكتبة
import "../components_Css/Footer.css";
import { Link } from "react-router-dom";
// import momaher from "../imgs/Mofite.png"; // يمكنك إضافة الصورة هنا

export default function Footer() {
  useEffect(() => {
    AOS.init();  // تفعيل AOS عند تحميل الكومبوننت
  }, []);

  return (
    <div>
      <footer className="text-center text-lg-start  text-muted" style={{background:"#161B33"}} data-aos="fade-up" data-aos-duration="1000">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light">
          {/* Left */}
          <div className="me-5 d-none d-lg-block text-light">
            <span>Connect with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="https://facebook.com" className="me-4 text-reset">
              <i className="fa fa-facebook-f"></i> {/* Facebook Icon */}
            </a>
            <a href="https://twitter.com" className="me-4 text-reset">
              <i className="fa fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a href="https://google.com" className="me-4 text-reset">
              <i className="fa fa-google"></i> {/* Google Icon */}
            </a>
            <a href="https://instagram.com" className="me-4 text-reset">
              <i className="fa fa-instagram"></i> {/* Instagram Icon */}
            </a>
            <a href="https://linkedin.com" className="me-4 text-reset">
              <i className="fa fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
            <a href="https://github.com" className="me-4 text-reset">
              <i className="fa fa-github"></i> {/* GitHub Icon */}
            </a>
          </div>
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section className="text-light">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 ">
                  <i className="fa fa-gem me-3 "></i> Mofite
                </h6>
                <p className="text-light">
                  Mofite is a platform that helps young individuals reach their potential through a comprehensive training program.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-light d-flex flex-column">
                <h6 className="text-uppercase fw-bold mb-4 text-light">Pages</h6>
                <Link style={{color:"white" ,textDecoration:"none"}} to={'./home'}>Home</Link>
                <Link  style={{color:"white" ,textDecoration:"none"}} to={'./About'}>About</Link>
                <Link  style={{color:"white" ,textDecoration:"none"}} to={'./Package'}>Package</Link>
                <Link  style={{color:"white" ,textDecoration:"none"}} to={'./Shop'}>Shop</Link>
                <Link  style={{color:"white" ,textDecoration:"none"}} to={'./Transfers'}>Transfers</Link>
                <Link  style={{color:"white" ,textDecoration:"none"}} to={'./Shop'}>Shop</Link>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4 text-light">Useful links</h6>
                <p className="text-light">Pricing</p>
                <p  className="text-light">FAQs</p>
                <p  className="text-light">Contact Us</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-light">
                <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
                <p className="text-light"><i className="fa fa-home me-3 "></i> Cairo, Egypt</p>
                <p className="text-light"><i className="fa fa-envelope me-3 text-light"></i> info@mofite.com</p>
                <p className="text-light"><i className="fa fa-phone me-3 text-light"></i> +20 100 234 5678</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
         <div className="text-center p-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Mofite. All rights reserved.
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}
