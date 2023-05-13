import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../assets/bishal.jpg'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder"/>

        <h2>Bishal Ghosh</h2>
        <p>Experience is the name everyone gives to their mistakes.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://wa.me/8274937670" style={{color:'#25D366'}} target={"blank"}>
            <AiOutlineWhatsApp />
          </a>
          <a href="https://www.linkedin.com/in/bishal-ghosh-282630246/" style={{color:'#0077B5'}} target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://www.instagram.com/_bishal.gh/" style={{color:'#DB4273'}} target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Bishal-Ghosh4" style={{color:'white'}} target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
