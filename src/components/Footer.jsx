import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="py-8 text-center border-t border-primary mt-10 bg-gray-500">
    {/* Copyright */}
    <p className="text-text mb-4 text-sm md:text-base">
      &copy; {new Date().getFullYear()} Sourav Mondal. All rights reserved.
    </p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-primary text-xl md:text-3xl">
      <a
        href="https://www.facebook.com/sourav.mondal.524610/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary/70 transition-transform transform hover:scale-150"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://github.com/sourav-cmyk"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary/70 transition-transform transform hover:scale-150"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sourav-mondal-285959354/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary/70 transition-transform transform hover:scale-150"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  </footer>
);

export default Footer;
