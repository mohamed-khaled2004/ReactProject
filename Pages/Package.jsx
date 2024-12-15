import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Packages from '../Components/Packages'
import NavBar from "../sections/NavBar";

export default function Package() {
  return (
    <div >
      <NavBar />
      <div style={{paddingTop:"80px"}}>
        <Packages/>
        </div>
        <ContactForm/>
        <Footer />
    </div>
  )
}
