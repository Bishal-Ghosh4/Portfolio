import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import name from '../assets/download (1).png';

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    {/* <h2>Bishal.</h2> */}
    <img src={name} alt="Bishal" />
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About Me
      </a>
      <a onClick={() => setMenuOpen(false)} href="#project">
        Projects
      </a>
      <a onClick={() => setMenuOpen(false)} href="#experience">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#skills">
        Skills
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>

    <a href="mailto:bishalghosh40422@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
