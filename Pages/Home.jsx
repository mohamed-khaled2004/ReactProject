import Accordions from "../Components/Accordions";
import Cerds from "../Components/Cerds";
import Footer from "../Components/Footer";
// import Journey from "../Components/Journey";
import Counters from "../sections/Counters";
import Header from "../sections/Header";
import NavBar from "../sections/NavBar";
import ContactForm from "../Components/ContactForm";
import ConversionImages from "../Components/ConversionImages";
import "../pages_css/Home.css";
import TrainingProgram from "../Components/TrainingProgram";
import Journey from "../Components/Journey";
export default function Home() {
  return (
    <div className=" col-12">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div>
          <NavBar />
        </div>
        <Header />
        <Counters />
        <ConversionImages />
        <Journey />

        <Cerds />
        <TrainingProgram />
        <Accordions />

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
Home();
