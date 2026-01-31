import React from "react";
import { BookOpen, Award, Code, Home } from "lucide-react";

const AboutSection: React.FC = () => (
  <section id="about" className="relative py-24 px-6 lg:px-8">
    <div className="relative max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          A passionate cybersecurity practitioner with sharp technical skills and a forward-thinking mindset, dedicated to protecting digital systems and driving innovative, secure solutions.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
        {/* Left Column: Image and Text */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Image */}
            <div className="relative group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src="/Gustavo_Balaguera_Cybersecurity_Enthusiast.jpg"
                alt="Gustavo Balaguera - Professional Photo"
                className="relative w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-2xl border-2 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a cybersecurity student at <a href="https://www.stevens.edu/" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">Stevens Institute of Technology</a> with hands-on experience in ethical hacking and penetration testing. My technical foundation is strengthened through training from the <a href="https://www.sans.org/about/" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">SANS Institute</a> and recognition from the <a href="https://www.nationalcyberscholarship.org/" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">National Cyber Scholarship Foundation</a>.

              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                 I actively sharpen my offensive security skills through <a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">PortSwigger Web Security Academy</a>, CTF competitions like <a href="https://picoctf.org/" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">PicoCTF</a>, and real-world bug bounty testing. These efforts have led to identifying and reporting multiple SQL injection vulnerabilities in production environments.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Outside of cybersecurity, I'm a <a href="https://www.shopify.com/partners" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline hover:text-primary/80 transition-colors">Shopify Partner</a> offering part-time web development services, including theme customization, performance optimization, and SEO improvements. I enjoy helping businesses strengthen both their security and their online presence.

              </p>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Cloud Security
            </span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Network Defense
            </span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Secure Coding
            </span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Penetration Testing
            </span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-sm font-medium">
              Shopify Development
            </span>
          </div>
        </div>

        {/* Right Column: Info Cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Education Card */}
          <div className="group bg-card/50 backdrop-blur-sm border border-card hover:bg-card/80 transition-all duration-300 rounded-2xl p-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
            <p className="text-primary text-sm font-medium mb-1">Stevens Institute of Technology</p>
            <p className="text-foreground/60 text-sm">Cybersecurity Major</p>
          </div>

          {/* Certifications Card */}
          <div className="group bg-card/50 backdrop-blur-sm border border-card hover:bg-card/80 transition-all duration-300 rounded-2xl p-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Award className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Certifications</h3>
            <p className="text-primary text-sm font-medium mb-1">GIAC GFACT, HubSpot SEO</p>
            <p className="text-foreground/60 text-sm">SANS Security Essentials</p>
          </div>

          {/* Programming Card */}
          <div className="group bg-card/50 backdrop-blur-sm border border-card hover:bg-card/80 transition-all duration-300 rounded-2xl p-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Code className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Programming</h3>
            <p className="text-primary text-sm font-medium mb-1">Python, Java, JavaScript, C/C++, SQL</p>
            <p className="text-foreground/60 text-sm">Security-focused Development</p>
          </div>

          {/* Shopify Partner Card */}
          <div className="group bg-card/50 backdrop-blur-sm border border-card hover:bg-card/80 transition-all duration-300 rounded-2xl p-6">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Home className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Shopify Partner</h3>
            <p className="text-primary text-sm font-medium mb-1">Web Development Services</p>
            <p className="text-foreground/60 text-sm">Themes & SEO Optimization</p>
          </div>
        </div>
      </div>

      {/* Shopify Services CTA */}
      <div className="bg-gradient-to-r from-primary rounded-2xl p-12 text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Home className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Shopify Partner Services</h3>
          <p className="text-xl opacity-90 mb-6">Professional Web Development & SEO Optimization</p>
          <p className="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            As a Shopify Partner, I offer part-time web development services including theme customization, website appearance optimization, and comprehensive SEO recommendations. I'm not limited to Shopify - I work with various static websites to enhance your online presence. Let's discuss your website needs and find a solution that fits your budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              Theme Customization
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              SEO Optimization
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              Performance Enhancement
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              Page Indexing
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              Custom Development
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
