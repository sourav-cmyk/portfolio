import React from "react";

const Projects = () => (
  <section id="projects" className="py-20 px-4 text-center mx-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Projects</h2>
    <p className="text-text mb-6">Here are some of my recent projects.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Project 1 */}
      <div className=" border border-primary rounded-lg p-6 hover:text-background transition bg-gray-900">
        <h3 className="text-2xl font-semibold mb-2">G3 Architects</h3>
        <p className="mb-4">G3 Architects project built with React and Tailwind CSS.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/sourav-cmyk"
            target="_blank"
            className="border px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://sourav-cmyk.github.io/e-com-repo/"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105 hover:scale-105"
          >
            Live Site
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-background/70 border border-primary rounded-lg p-6 hover:bg-primary hover:text-background transition bg-gray-900">
        <h3 className="text-2xl font-semibold mb-2">Kids
Education</h3>
        <p className="mb-4">Online kids education project built using React and tailwind.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/sourav-cmyk?tab=repositories"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://sourav-cmyk.github.io/assignment-2-repo/"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Project 3 */}
      <div className=" border border-primary rounded-lg p-6 hover:text-background transition bg-gray-900">
        <h3 className="text-2xl font-semibold mb-2">E-com</h3>
        <p className="mb-4">Responsive online shop built using React and tailwind CSS.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/sourav-cmyk"
            target="_blank"
            className="border px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://sourav-cmyk.github.io/fashion-website/"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            Live Site
          </a>
        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-background/70 border border-primary rounded-lg p-6 hover:bg-primary hover:text-background transition bg-gray-900">
        <h3 className="text-2xl font-semibold mb-2">Cafe</h3>
        <p className="mb-4">Awesome cafe built html and tailwind.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/sourav-cmyk?tab=repositories"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://sourav-cmyk.github.io/tea-house-web/"
            target="_blank"
            className="border border-background px-4 py-2 rounded-md hover:bg-background hover:text-primary transition hover:scale-105"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
