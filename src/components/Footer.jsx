import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-bg text-text-primary dark:bg-darkbg dark:text-text-dark px-6 py-12">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* LEFT TEXT */}
        <div className="text-sm leading-relaxed">
          <p>developer | self-proclaimed artist |</p>
          <p>tech passionated | curious | trying</p>
          <p>things</p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="text-lg text-left">
          <p className="mb-2 font-medium">Social</p>

          <div className="flex gap-4 md:justify-end">
            <a
              href="#"
              className="flex items-center gap-1 hover:underline transition"
            >
              <FaGithub /> github
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:underline transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:underline transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-sm mt-12">
        all rights belong to creator @ 2026
      </div>
    </footer>
  );
};

export default Footer;