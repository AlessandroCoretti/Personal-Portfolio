import Snowfall from "react-snowfall";
import LanguagesSwitcher from "../components/LanguagesSwitcher";
import Header from "../components/left/Header";
import Navbar from "../components/left/Navbar";
import Social from "../components/left/Social";
import About from "../components/right/About";
import Experience from "../components/right/Experience";
import Footer from "../components/right/Footer";
import Projects from "../components/right/Projects";
import "../css/Home.css";
import OpenInBrowserButton from "../components/left/Prova";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between relative pt-[3%] mx-[10%]">
      <div className="w-[100%]">
        <Snowfall />
        <div className="sticky top-12 flex flex-col items-start justify-between pb-[3%] lg:h-[80vh]">
          <LanguagesSwitcher />
          <Header />
          <Navbar />
          <Social />
          <OpenInBrowserButton />
        </div>
      </div>
      <div className="w-[100%] flex flex-col gap-15 lg:gap-30 lg:pb-30">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
