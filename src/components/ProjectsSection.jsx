import { ArrowRight } from "lucide-react";

// import images from src/assets/projects/*
const withBase = (p) => `${import.meta.env.BASE_URL}${p}`;

const projects = [
  {
    id: 1,
    title: "TARS",
    description:
      "Built a voice-controlled AI assistant using an ESP32 microcontroller and TFT display, simulating the TARS robot from Interstellar.",
     image: withBase("projects/tars_project.webp"),
    tags: ["Embedded Systems", "TFT Display", "Microcontrollers", "C"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Object-oriented Chess Game",
    description:
      "Developed a fully functional chess engine in C++ using object-oriented design principles.",
    image: withBase("projects/CHESS_PROJECT.png"),
    tags: ["C++", "Object-Oriented Programming", "Hash List", "Test-Driven Development"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AHB Protocol",
    description:
      "Designed and verified a custom AHB protocol-based interface for USB communication in SystemVerilog.",
    image: withBase("projects/CDL-Hierarchal_RESUB.drawio.png"),
    tags: ["SystemVerilog", "RTL Design", "Pipelining"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is an extension
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover [object-position:50%_70%] transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">{/* links/buttons here */}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Esharaqaj"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
