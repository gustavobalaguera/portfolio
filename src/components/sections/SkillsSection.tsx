import { Shield, Code, Wrench, ShoppingBag } from "lucide-react";

interface SkillsSectionProps {
  cybersecurity: string[];
  programming: Record<string, number>;
  tools: Record<string, number>;
  shopify: string[];
}

const SkillsSection = ({ cybersecurity, programming, tools, shopify }: SkillsSectionProps) => {
  return (
    <section id="skills-detail" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-foreground mb-16 text-center mx-auto block">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cybersecurity Skills */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground geist-font">Cybersecurity</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cybersecurity.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge px-3 py-1.5 rounded-lg text-sm text-foreground mono-font"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-foreground geist-font">Programming</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(programming).map(([lang, level]) => (
                <div key={lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground mono-font">{lang}</span>
                    <span className="text-xs text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground geist-font">Tools & Technologies</h3>
            </div>
            <div className="space-y-4">
              {Object.entries(tools).map(([tool, level]) => (
                <div key={tool}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground mono-font">{tool}</span>
                    <span className="text-xs text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Shopify Skills */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-medium text-foreground geist-font">Shopify Partner</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {shopify.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge px-3 py-1.5 rounded-lg text-sm text-foreground mono-font"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
