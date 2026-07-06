import { ArrowDown } from "lucide-react";
import Lanyard from './Lanyard';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
       <div className="absolute inset-0 z-0 pointer-events-none">
        <Lanyard
          /* camera start‑position, unchanged */
          position={[0, 0, 15]}
          /* 0 g ⇒ badge no longer drops */
          gravity={[0, -40, 0]}
          /* new prop in recent versions that welds 
             the rope to an immovable body */
          anchor={[0, 10, 4]}          // or  fixed={true}  on <0.17
        />
      </div>
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Esharaqa
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Jahid
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a Computer Engineering Graduate in Purdue University!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
