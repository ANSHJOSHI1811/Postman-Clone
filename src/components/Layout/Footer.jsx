import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-4 text-center">
      <div className="text-white font-bold">
        Created by{" "}
        <a
          href="https://www.anshjoshi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400"
        >
          <span className="text-xl">ANSH JOSHI</span>
         
        </a>
      </div>
      <br/>
      <div className="flex justify-center mt-2">
        <a
          href="https://github.com/ANSHJOSHI1811"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mr-4"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ansh-joshi-6162951b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mr-4"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="mailto:anshsjoshi@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
