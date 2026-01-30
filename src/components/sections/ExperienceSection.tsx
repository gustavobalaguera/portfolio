import { Briefcase, Shield, GraduationCap } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  achievements: string[];
  icon?: "work" | "security" | "education";
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const iconMap = {
  work: Briefcase,
  security: Shield,
  education: GraduationCap,
};

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-header text-foreground mb-16 text-center mx-auto block">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon || "work"];
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />
                  
                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="glass-card rounded-xl p-6 group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-foreground geist-font">{exp.role}</h3>
                          <p className="text-primary text-sm inter-font">{exp.company}</p>
                          <p className="text-muted-foreground text-xs inter-font mt-1">
                            {exp.location} • {exp.dates}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground inter-font">
                            <span className="text-primary mt-1.5 text-xs">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
