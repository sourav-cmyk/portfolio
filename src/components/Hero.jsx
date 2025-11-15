import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="hero" className="relative">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center bg-black/40 backdrop-blur-md py-4 px-10 shadow-md text-white z-50 font-mon">
        <div className="text-3xl font-bold text-primary my-auto">
         <h1 className="text-3xl font-extrabold text-primary tracking-wide hover:drop-shadow-lg transition-all">
  Sourav<span className="text-2xl text-yellow-600">.</span>
</h1>



        </div>
        <div className="hidden md:flex gap-10 text-text font-md">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-black/80 flex flex-col items-center gap-4 py-4 md:hidden z-40 ">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-4">
        {/* Profile Image */}
<img  src="/images/profile.jpg" alt="Loading..."
className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full mb-6 border-4 border-primary shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
/>

        {/* Typing Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ["Hi, I’m Sourav Mondal"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>

        <h2 className="text-2xl md:text-3xl text-primary mb-6">Front-End Developer</h2>

        <p className="max-w-xl mb-6">
          Passionate about creating modern, responsive, and efficient web experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-primary text-background px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition  hover:scale-105">Contact Me</a>
          <a href="/Sourav_CV.pdf" className="border border-primary text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-800 text-white transition hover:scale-105">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
