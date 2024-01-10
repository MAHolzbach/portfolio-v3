import Image from "next/image";
import Link from "next/link";
import "./side-nav.scss";
import mePic from "../../public/me.png";
import { FaLinkedin, FaRegFilePdf, FaGithub } from "react-icons/fa";

const SideNav = () => (
  <div className="navWrapper">
    <h1>
      <Link href="/" className="sideNavLink">
        Mike Holzbach
      </Link>
    </h1>
    <Image alt="Me" src={mePic} className="mePic" />
    <div>
      <h3 className="navText">
        A front-end developer with a focus on React and a passion for life
        abroad.
      </h3>
    </div>
    <div className="socialLinks">
      <a
        className="socialLink"
        href="https://www.dropbox.com/scl/fi/6w57ap8jwrica3fu2jg9d/Mike-Holzbach-Resume.pdf?rlkey=u560n0ywz8au4shimb6umnvyk&dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFilePdf />
      </a>
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/michaelholzbach/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="socialLink"
        href="https://github.com/MAHolzbach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SideNav;
