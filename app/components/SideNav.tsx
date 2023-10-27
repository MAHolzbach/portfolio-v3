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
    <Image
      alt="Me"
      src={mePic}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "200px",
        maxWidth: "200px",
      }}
    />
    <div>
      <h3 className="navText">
        A front-end developer with a focus on React and a passion for life
        abroad.
      </h3>
    </div>
    <div className="socialLinks">
      <a
        className="socialLink"
        href="https://www.dropbox.com/s/tglsuyx7z5zvy04/Mike%20Holzbach%20Resume.pdf?dl=0"
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
