import { GraduationCap, Award, Code, Store } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 to-secondary-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            A passionate cybersecurity practitioner with sharp technical skills and a forward-thinking mindset, 
            dedicated to protecting digital systems and driving innovative, secure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 items-center">
          {/* Profile Image and Text */}
          <div className="space-y-8 animate-slide-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src="/portfolio/Me_Background.png"
                  alt="Gustavo Balaguera - Professional Photo"
                  className="relative w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-2xl border-2 border-primary-500/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1 space-y-6">
                <p className="text-lg text-secondary-200 leading-relaxed">
                  I'm a dedicated cybersecurity student at <a
                    href="https://assets.stevens.edu/mviowpldu823/x6i3pe1XhnWKDOxDxmN0d/241246339b921f337906ff79cefd123d/2025_Spring_Dean-s_List_2025.06.09.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                    Stevens Institute of Technology
                  </a>, 
                  with specialized knowledge gained through the <a
                    href="https://www.sans.org/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                    SANS Institute
                  </a> and the <a
                    href="https://www.nationalcyberscholarship.org/ncsf-winners-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                     National Cyber Scholarship Foundation
                  </a>. 
                  My passion lies in penetration testing and uncovering vulnerabilities in systems and applications to strengthen digital defenses from the inside out.
                </p>
                
                <p className="text-lg text-secondary-200 leading-relaxed">
                  I continue to develop my skills with <a
                    href="https://portswigger.net/web-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                    PortSwigger
                  </a>, constantly applying my learnings in CTF challenges like <a
                    href="https://picoctf.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                    PicoCTF
                  </a> and bug bounty programs. 
                  Through these real world tests, I've successfully identified and reported a (repeat 🤷‍♂️) SQL injection vulnerability in a website's search query.
                </p>

                <p className="text-lg text-secondary-200 leading-relaxed">
                  As a <a
                    href="https://www.shopify.com/partners"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 font-semibold underline hover:text-primary-200 transition-colors"
                  >
                    Shopify Partner
                  </a>, I also offer part-time web development services, 
                  specializing in theme customization, website optimization, and <a
              href="https://app-na2.hubspot.com/academy/achievements/kl9n2d6y/en/1/gustavo-balaguera/seo-ii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 underline hover:text-primary-200 transition-colors"
            >
              SEO recommendations</a>. I'm always open to discussing 
                  your website needs and negotiating competitive pricing.
                </p>

                <p className="text-lg text-secondary-200 leading-relaxed">
                  I'm actively seeking internships and programs where I can contribute to cybersecurity 
                  initiatives while continuing to grow my technical skills in ethical hacking and related topics.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 animate-slide-bottom animate-delay-400">
              {['Cloud Security', 'Network Defense', 'Secure Coding', 'Penetration Testing', 'Shopify Development'].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-right">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                subtitle: "Stevens Institute of Technology",
                description: "Cybersecurity Major",
                color: "primary"
              },
              {
                icon: Award,
                title: "Certifications",
                subtitle: "GIAC Foundational Cybersecurity Technologies (GFACT), HubSpot SEO I & II",
                description: "SANS Security Essentials",
                color: "primary"
              },
              {
                icon: Code,
                title: "Programming",
                subtitle: "Python, Java, JavaScript, C, C++",
                description: "Security-focused Development",
                color: "primary"
              },
              {
                icon: Store,
                title: "Shopify Partner",
                subtitle: "Web Development Services",
                description: "Themes & SEO Optimization",
                color: "primary"
              }
            ].map((item, index) => (
              <div key={index} className={`group bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-6 hover:bg-secondary-800/50 transition-all duration-300 animate-scale-in animate-delay-${(index + 2) * 100}`}>
                <div className="bg-primary-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-primary-300 text-sm font-medium mb-1">{item.subtitle}</p>
                <p className="text-secondary-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shopify Services Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white relative overflow-hidden animate-slide-bottom animate-delay-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Store className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Shopify Partner Services</h3>
            <p className="text-xl opacity-90 mb-6">Professional Web Development & SEO Optimization</p>
            <p className="text-sm opacity-75 max-w-3xl mx-auto leading-relaxed mb-8">
              As a Shopify Partner, I offer part-time web development services including theme customization, 
              website appearance optimization, and comprehensive SEO recommendations. I'm not limited to Shopify - 
              I work with various static websites to enhance your online presence. Let's discuss your website needs and 
              find a solution that fits your budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Theme Customization', 'SEO Optimization', 'Performance Enhancement', 'Page Indexing', 'Custom Development'].map((service, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;