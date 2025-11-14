import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Bootstrap", "DaisyUI", "Git & GitHub"];
  return (
    <section id="skills" className="py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <div key={skill} className="bg-background/70 border border-primary rounded-lg px-4 py-2 font-medium hover:bg-primary hover:text-background transition bg-gray-900">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
