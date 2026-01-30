import { GraduationCap, BookOpen } from "lucide-react";

interface EducationSectionProps {
  degree: string;
  institution: string;
  dates: string;
  coursework: string[];
}

const EducationSection = ({ degree, institution, dates, coursework }: EducationSectionProps) => {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-header text-foreground mb-16 text-center mx-auto block">
          Education
        </h2>
        
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-foreground geist-font mb-2">{institution}</h3>
              <p className="text-primary inter-font text-lg">{degree}</p>
              <p className="text-muted-foreground text-sm mt-1">{dates}</p>
            </div>
          </div>
          
          <div className="divider mb-8" />
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-medium text-foreground geist-font">Relevant Coursework</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                >
                  <span className="text-primary text-xs">▹</span>
                  <span className="text-sm text-foreground inter-font">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
