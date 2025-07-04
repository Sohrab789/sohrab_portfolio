import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Centific",
      period: "July 2025 - Present",
      type: "Full-time",
      description: "Working on cutting-edge AI solutions and machine learning implementations for enterprise clients."
    },
    {
      title: "Research Scholar",
      company: "MAV LAB, IIT Madras",
      period: "Jan 2023 - June 2025",
      type: "Research",
      description: "Conducting advanced research in Marine Autonomous Vehicles, focusing on AI-driven control systems and reinforcement learning applications."
    },
    {
      title: "Digital Learning Solutions Developer",
      company: "Magic EdTech",
      period: "Jan 2022 - June 2022",
      type: "Contract",
      description: "Developed innovative digital learning solutions for educational platforms, enhancing user engagement and learning outcomes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through AI research, education technology, and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  <div className="ml-20">
                    <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover-lift">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                          <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">{exp.type}</span>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;