import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/nav";
import "bootstrap/dist/css/bootstrap.css";
import Photo from "./mainPhoto/photo";
import About from "./about/about";
import Skill from "./skill/skill";
import Resume from "./resume/resume";
import Port from "./port/port";
import Testy from "./testimony/testy";
import Contact from "./contact/contact";

function App() {
  return (
    <>
      <div className=" container row m-0">
        <Navbar />
        <div className=" col-9" style={{overflow:"auto",height:"500px"}}>
          <Photo />
          <About />
          <Skill />
          <Resume />
          <Port/>
          <Testy/>
          <Contact/>
          
        </div>
      </div>
    </>
  );
}

export default App;
