import { Shield, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not found, navigate to homepage with hash
      window.location.href = `/`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-950 border-t border-secondary-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary-400" />
                <div className="absolute inset-0 h-8 w-8 bg-primary-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
                Gustavo Balaguera
              </span>
            </div>
            <p className="text-secondary-300 mb-8 leading-relaxed">
              Aspiring cybersecurity professional passionate about creating secure digital environments. 
              Currently studying at Stevens Institute of Technology and actively seeking opportunities 
              to apply my skills in real-world cybersecurity challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/gbalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-800/50 rounded-xl text-secondary-400 hover:text-primary-400 hover:bg-secondary-800/70 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gustavobalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-800/50 rounded-xl text-secondary-400 hover:text-primary-400 hover:bg-secondary-800/70 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:gustavobalaguera214@gmail.com"
                className="p-3 bg-secondary-800/50 rounded-xl text-secondary-400 hover:text-primary-400 hover:bg-secondary-800/70 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero', type: 'section' },
    { label: 'About', id: 'about', type: 'section' },
    { label: 'Experience', id: 'experience', type: 'section' },
    { label: 'Projects', id: 'projects', type: 'section' },
    { label: 'Skills', id: 'skills', type: 'section' },
    { label: 'Awards', id: 'awards', type: 'section' },
    { label: 'Blog', id: '/blog', type: 'route' },
    { label: 'Contact', id: 'contact', type: 'section' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-3 text-secondary-400">
              <li>
                <a
                  href="mailto:gustavobalaguera214@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  gustavobalaguera214@gmail.com
                </a>
              </li>
              <li>Stevens Institute of Technology</li>
              <li>Hoboken, NJ</li>
              <li className="pt-3">
                <span className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Open To Work
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Site Smith. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <p className="text-secondary-400 text-sm flex items-center">
                Back to top of page
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-secondary-800/50 rounded-xl text-secondary-400 hover:text-primary-400 hover:bg-secondary-800/70 transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;