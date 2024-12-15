import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { Navbar, Nav, Container } from "react-bootstrap";
import { faGlobe, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BackgroundImage2 from "../imgs/Mofite.png";

export default function NavBar() {
  const { t, i18n } = useTranslation(); // استخدام hook للحصول على الترجمة

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en"; 
    i18n.changeLanguage(newLang);
  };

  // قراءة الوضع من localStorage أو تعيين الوضع الافتراضي "dark"
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") || "dark");

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    localStorage.setItem("currentMode", theme); // تخزين الوضع في localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  document.body.style.backgroundColor = theme === "dark" ? "#161c24" : "#fff";

  // إضافة state للتحقق من التمرير
  const [scrolled, setScrolled] = useState(false);

  // وظيفة لتحديد إذا كان المستخدم قد قام بالتمرير
  const handleScroll = () => {
    if (window.scrollY > 50) { // عندما يتم التمرير أكثر من 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // إضافة مستمع للتمرير
    window.addEventListener("scroll", handleScroll);

    // تنظيف ال Event Listener عند إلغاء تحميل المكون
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      style={{
        height: "11vh",
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: "1000",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease", 
        background: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(60, 129, 225, 0.2)", // تغيير الخلفية عند التمرير
        backdropFilter: scrolled ? "blur(10px)" : "none", // تأثير الضبابية عند التمرير
        color: "#D92525",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={BackgroundImage2} alt="Logo" style={{ width: "30px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" style={{ color: "#3c81e1",fontSize:"20px",fontWeight:"400" }}>
              {t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#3c81e1" ,fontSize:"20px",fontWeight:"400"}}>
              {t("about")}
            </Nav.Link>
            <Nav.Link as={Link} to="/Programs" style={{ color: "#3c81e1" ,fontSize:"20px",fontWeight:"400"}}>
              {t("programs")}
            </Nav.Link>
            <Nav.Link as={Link} to="/Shop" style={{ color: "#3c81e1" ,fontSize:"20px",fontWeight:"400"}}>
              {t("Shop")}
            </Nav.Link>
            <Nav.Link as={Link} to="/Transfers" style={{ color: "#3c81e1" ,fontSize:"20px",fontWeight:"400"}}>
              {t("Transfers")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" style={{ color: "#3c81e1" ,fontSize:"20px",fontWeight:"400"}}>
              {t("contact")}
            </Nav.Link>

            <button
              className="btn btn-primary ms-3"
              onClick={toggleTheme}
              style={{
                backgroundColor: theme === "dark" ? "#3c81e1" : "#f0ad4e",
                border: "none",
              }}
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </button>
          </Nav>
        </Navbar.Collapse>
        <button
          className="mode flex"
          style={{
            backgroundColor: "#3c81e1",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            marginLeft: "1rem",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={toggleLanguage}
        >
          <FontAwesomeIcon icon={ faGlobe} style={{ marginRight: "8px" }} />
          {i18n.language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
        </button>
      </Container>
    </Navbar>
  );
}
