import logo from "../assets/kevinRushLogo.png/";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gfg from "../assets/gfg.svg";
const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-7 hidden" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhay-karena-b7765a253/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/abhaykarena11/abhaykarena11"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/abhaykarena11/" target="_blank">
          <SiLeetcode />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/abhaykadbsq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gfg} alt="GFG" className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
