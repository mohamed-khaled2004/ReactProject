import Footer from "../Components/Footer";
import TrainingProgram from "../Components/TrainingProgram";
import NavBar from "../sections/NavBar";
import Packages from "../Components/Packages";


export default function Programs() {
  return (
    <div>
      {" "}
      <NavBar />
      <TrainingProgram/>
      <Packages/>
          
      <Footer/>
    </div>
  );
}
Programs()