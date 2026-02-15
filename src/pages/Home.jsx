import { Suspense, lazy } from "react";
import LanguagesSwitcher from "../components/LanguagesSwitcher";
import Header from "../components/left/Header";
import Navbar from "../components/left/Navbar";
import Social from "../components/left/Social";
import About from "../components/right/About";
import Footer from "../components/right/Footer";
import "../css/Home.css";

const Experience = lazy(() => import("../components/right/Experience"));
const Projects = lazy(() => import("../components/right/Projects"));

function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between relative pt-[3%] mx-[10%]">
      <div className="w-[100%]">
        <div className="sticky top-12 flex flex-col items-start justify-between pb-[3%] lg:h-[80vh]">
          <LanguagesSwitcher />
          <Header />
          <Navbar />
          <Social />
        </div>
      </div>
      <div className="w-[100%] flex flex-col gap-15 lg:gap-30 lg:pb-30">
        <About />
        <Suspense fallback={<div className="text-slate-200">Loading...</div>}>
          <Experience />
          <Projects />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
