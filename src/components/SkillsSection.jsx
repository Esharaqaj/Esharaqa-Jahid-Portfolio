import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // languages
  { name: "C/C++", level: 95, category: "languages" },
  { name: "Python", level: 93, category: "languages" },
  { name: "System Verilog", level: 90, category: "languages"},
  { name: "Matlab", level: 90, category: "languages" },
  { name: "Risc-V assembly", level: 90, category: "languages" },
  { name: "x86 assembly", level: 90, category: "languages" },
  { name: "HTML/CSS", level: 88, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "React", level: 90, category: "languages" },

  

  



 //Frameworks:
  { name: "Git/GitHub", level: 80, category: "frameworks" },
  { name: "UVM", level: 75, category: "frameworks" },
  { name: "Xilinx Vivado", level: 70, category: "frameworks" },
  { name: "Cadence Virtuoso", level: 60, category: "frameworks" },
  { name: "Altruim", level: 60, category: "frameworks" },
  { name: "Fusion 360", level: 60, category: "frameworks" },
  { name: "KiCAD", level: 60, category: "frameworks" },
  { name: "Bare-Metal programming", level: 65, category: "frameworks" },
  { name: "USB/I2C/SPI/UART", level: 60, category: "frameworks" },
  { name: "STM32", level: 60, category: "frameworks" },
  { name: "SolidWorks", level: 60, category: "frameworks" },



  // Development Areas
  { name: "Object-Oriented Programming", level: 90, category: "Development Areas" },
  { name: "Embedded Systems", level: 70, category: "Development Areas" },
  { name: "RTL Design & Computer Architecture", level: 85, category: "Development Areas" },
  { name: "Design Verification", level: 95, category: "Development Areas" },
  { name: "PCB Design", level: 95, category: "Development Areas" },
  { name: "Woodworking", level: 95, category: "Development Areas" },

];

const categories = ["all", "languages", "frameworks", "Development Areas"];

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

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize hover:bg-primary-foreground",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover hover:text-primary"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
