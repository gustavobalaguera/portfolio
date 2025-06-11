import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero', type: 'section' },
    { label: 'About', id: 'about', type: 'section' },
    { label: 'Experience', id: 'experience', type: 'section' },
    { label: 'Projects', id: 'projects', type: 'section' },
    { label: 'Skills', id: 'skills', type: 'section' },
    { label: 'Awards', id: 'awards', type: 'section' },
    { label: 'Blog', id: '/blog', type: 'route' },
    { label: 'Contact', id: 'contact', type: 'section' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-secondary-950/80 backdrop-blur-md border-b border-secondary-800/50' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Shield className="h-8 w-8 text-primary-400 animate-glow" />
              <div className="absolute inset-0 h-8 w-8 bg-primary-400/20 rounded-full blur-md"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Gustavo Balaguera
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => item.type === 'section' ? scrollToSection(item.id) : handleNavigation(item.id)}
                className="relative text-sm font-medium text-secondary-300 hover:text-white transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-secondary-900/95 backdrop-blur-md border-b border-secondary-800/50">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.type === 'section' ? scrollToSection(item.id) : handleNavigation(item.id)}
                  className="block w-full text-left text-secondary-300 hover:text-white transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;