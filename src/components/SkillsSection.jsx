import React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BallCanvas from "./BallCanvas";

const skills = [
  { name: "HTML", icon: "/tech/html.png", category: "frontend" },
  { name: "CSS", icon: "/tech/css.png", category: "frontend" },
  { name: "JavaScript", icon: "/tech/javascript.png", category: "frontend" },
  { name: "TypeScript", icon: "/tech/typescript.png", category: "frontend" },
  { name: "React", icon: "/tech/reactjs.png", category: "frontend" },
  { name: "Redux", icon: "/tech/redux.png", category: "frontend" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png", category: "frontend" },
  { name: "Three.js", icon: "/tech/threejs.svg", category: "frontend" },
  { name: "Node.js", icon: "/tech/nodejs.png", category: "backend" },
  { name: "MongoDB", icon: "/tech/mongodb.png", category: "backend" },
  { name: "Git/GitHub", icon: "/tech/git.png", category: "tools" },
  { name: "Docker", icon: "/tech/docker.png", category: "tools" },
  { name: "Figma", icon: "/tech/figma.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center"
            >
              <div className="mb-4" style={{ width: 64, height: 64 }}>
                <BallCanvas icon={skill.icon} />
              </div>
              <div className="text-left mb-4 w-full">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
