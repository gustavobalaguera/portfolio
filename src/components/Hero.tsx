import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-8 animate-slide-top">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Open to Work - Cybersecurity Internships
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-bottom animate-delay-200">
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              Gustavo Balaguera
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-200 mb-4 font-light animate-slide-left animate-delay-400">
            Aspiring Cybersecurity Professional
          </p>
          
          <p className="text-lg text-secondary-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-right animate-delay-600">
            Full-time student at Stevens Institute of Technology specializing in ethical hacking, 
            network defense, and penetration testing. Top 2% nationally in cybersecurity competitions from CyberStart America.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-scale-in animate-delay-800">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-primary-500/25"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group border-2 border-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-800/50 transition-all duration-300 flex items-center gap-3"
            >
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-slide-bottom animate-delay-1000">
            <a
              href="https://linkedin.com/in/gbalaguera"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-secondary-800/50 rounded-xl hover:bg-secondary-700/50 transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-secondary-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/gustavobalaguera"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-secondary-800/50 rounded-xl hover:bg-secondary-700/50 transition-all duration-300"
            >
              <Github className="h-6 w-6 text-secondary-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:gustavobalaguera214@gmail.com"
              className="group p-3 bg-secondary-800/50 rounded-xl hover:bg-secondary-700/50 transition-all duration-300"
            >
              <Mail className="h-6 w-6 text-secondary-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary-400 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;