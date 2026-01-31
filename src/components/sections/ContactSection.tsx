import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

interface ContactSectionProps {
  email: string;
  location: string;
  status: string;
  linkedin?: string;
  github?: string;
}

const ContactSection = ({ email, location, status, linkedin, github }: ContactSectionProps) => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-header text-foreground mb-6 mx-auto inline-block">
          Let's Connect
        </h2>
        
        <p className="text-muted-foreground inter-font text-lg mb-12 max-w-2xl mx-auto">
          {status}
        </p>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="inter-font">{email}</span>
            </a>
            
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="inter-font">{location}</span>
            </div>
          </div>
          
          {(linkedin || github) && (
            <>
              <div className="divider my-8" />
              
              <div className="flex items-center justify-center gap-4">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button p-4 rounded-xl hover:border-primary/50 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button p-4 rounded-xl hover:border-primary/50 transition-all group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )}
              </div>
            </>
          )}
        </div>
        
        <a
          href={`mailto:${email}`}
          className="primary-button inline-flex items-center gap-2 px-8 py-4 rounded-xl text-foreground font-medium"
        >
          <span>Get In Touch</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
