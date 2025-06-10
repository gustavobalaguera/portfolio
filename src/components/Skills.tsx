import React from 'react';
import { Code, Cloud, Shield, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "PHP", level: 64 },
        { name: "HTML/CSS", level: 85 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      title: "Cloud Technologies",
      icon: Cloud,
      skills: [
        { name: "AWS EC2", level: 85 },
        { name: "AWS S3", level: 80 },
        { name: "AWS IAM", level: 90 },
        { name: "CloudWatch", level: 85 },
        { name: "Secrets Manager", level: 80 },
        { name: "AWS QuickSight", level: 75 }
      ]
    },
    {
      title: "Networking & Security",
      icon: Shield,
      skills: [
        { name: "TCP/IP", level: 93 },
        { name: "NIST Framework", level: 90 },
        { name: "Defense in Depth", level: 85 },
        { name: "WireShark", level: 85 },
        { name: "Burp Suite", level: 82 },
        { name: "SIEM", level: 80 }
      ]
    },
    {
      title: "Software & Tools",
      icon: Wrench,
      skills: [
        { name: "Scripting", level: 92 },
        { name: "Computer Hardware", level: 85 },
        { name: "OS Fundamentals", level: 70 },
        { name: "Git", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "Microsoft Office", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Comprehensive expertise across programming languages, cloud platforms, 
            cybersecurity tools, and industry frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/50 transition-all duration-500 animate-slide-${index % 2 === 0 ? 'left' : 'right'} animate-delay-${(index + 4) * 100}`}>
              <div className="flex items-center mb-8">
                <div className="bg-primary-500/10 p-3 rounded-xl mr-4">
                  <category.icon className="h-7 w-7 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-700/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-24 animate-slide-bottom animate-delay-800">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Certifications & Training
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GFACT Certified",
                subtitle: "GIAC Foundational Cybersecurity Technologies",
                gradient: "from-primary-500 to-primary-600"
              },
              {
                title: "SANS SEC401",
                subtitle: "Security Essentials Bootcamp",
                gradient: "from-primary-600 to-secondary-600"
              },
              {
                title: "National Cyber Scholar",
                subtitle: "Top 2% Nationally - CyberStart America",
                gradient: "from-secondary-500 to-primary-500"
              }
            ].map((cert, index) => (
              <div key={index} className={`bg-gradient-to-br ${cert.gradient} text-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 animate-rotate-in animate-delay-${(index + 9) * 100}`}>
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
                <p className="text-sm opacity-90">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mt-20 animate-slide-bottom animate-delay-1200">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Relevant Coursework
            </span>
          </h3>
          <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Object-Oriented Programming",
                "Data Structures And Algorithms",
                "Discrete Structures",
                "Computer, Technology, And Security Foundations",
                "Network, Endpoint, And Cloud",
                "Web Programming And Project Development",
                "Computer Hardware, Exploitation, & Operating Systems Fundamentals"
              ].map((course, index) => (
                <div key={index} className={`bg-secondary-700/50 rounded-xl p-4 hover:bg-secondary-700/70 transition-colors duration-300 animate-scale-in animate-delay-${(index + 13) * 50}`}>
                  <p className="text-secondary-200 font-medium text-sm">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;