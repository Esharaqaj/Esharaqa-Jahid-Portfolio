import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-12 items-center">
          <div className="md:col-span-4 space-y-10">
            <h3 className="text-3xl font-bold">
              My North Star
            </h3>

            <p className="text-[19px] italic text-muted-foreground">
            “Don’t bother chasing success. If you achieve excellence, success will run after you.”{"  "} 
            <a
          href="https://www.youtube.com/watch?v=Ijp_fDwv-IQ&t=60s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground not-italic hover:underline hover:text-primary transition-colors"
        >
          – Ranchoddas, 3 Idiots
        </a>
          </p>

            <p className="text-muted-foreground">
              Whenever I feel overwhelmed or uncertain about my next step, I rely on this quote to guide me. It is a quote from my favorite movie, which played a major role in shaping my decision to pursue engineering. The movie portrays an engineer who isn’t extraordinary just because of his skill—but because of his genuine love for learning and innovation. That distinction stayed with me. I chose this field not only because it’s one of the most innovative in the world, but because I truly love what I do. In moments of doubt, I remind myself that passion, not pressure, is what drives lasting impact.


            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

                <a
                href="EsharaqaJahid_IBM_Resume2026.pdf"
                download="EsharaqaJahid_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download my resume as PDF"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 col-span-4">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Fusion Semiconductor- Remote Intern</h4>
                  <p className="text-muted-foreground">
                    Developed proficiency in Cadence Virtuoso, designing basic logic gates at the transistor level and progressing from schematic capture to physical layout. I gained hands-on experience in simulation workflows, tap cell integration, and performing DRC and LVS checks to ensure design compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">ECE362- Teaching Assistant</h4>
                  <p className="text-muted-foreground">
                    Assist students in developing microcontroller-based embedded systems through hands-on labs in assembly and C programming, hardware interfacing, and processor simulation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Research Intern- MLM</h4>
                  <p className="text-muted-foreground">
                    Developed a real-time 3D human detection and motion-tracking system using machine learning and front-end web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
