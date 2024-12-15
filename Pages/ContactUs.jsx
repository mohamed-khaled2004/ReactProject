import { useState, useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import NavBar from "../sections/NavBar";
import "../Components_css/Header.css"; // لتحميل CSS الخاص بشاشة التحميل
import BackgroundImage2 from "../imgs/Mofite.png"; // صورة شاشة التحميل

export default function ContactUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // شاشة التحميل لمدة 5 ثوانٍ
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={BackgroundImage2} alt="Loading" className="loading-image" />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
}
