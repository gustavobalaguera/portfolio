import { Award, Trophy, Medal } from "lucide-react";

interface Award {
  title: string;
  year?: string;
  years?: string[];
  value?: string;
  note?: string;
}

interface CertificationsSectionProps {
  certifications: string[];
  awards: Award[];
}

const CertificationsSection = ({ certifications, awards }: CertificationsSectionProps) => {
  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-foreground mb-16 text-center mx-auto block">
          Certifications & Awards
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground geist-font">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground inter-font text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-medium text-foreground geist-font">Awards & Honors</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Medal className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-foreground font-medium inter-font text-sm">{award.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {award.year && (
                          <span className="text-xs text-muted-foreground">{award.year}</span>
                        )}
                        {award.years && (
                          <span className="text-xs text-muted-foreground">{award.years.join(", ")}</span>
                        )}
                        {award.value && (
                          <span className="text-xs text-primary font-medium">{award.value}</span>
                        )}
                      </div>
                      {award.note && (
                        <p className="text-xs text-muted-foreground mt-1">{award.note}</p>
                      )}
                    </div>
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

export default CertificationsSection;
