import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Project />
      <Experience />
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <Toaster />
      <Footer />
    </>
  )

}

export default App;
