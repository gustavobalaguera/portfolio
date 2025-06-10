import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Strategist",
      company: "Riflessi | Luxury Italian Menswear",
      period: "Oct. 2024 - May 2025",
      location: "Remote",
      achievements: [
        "Automated product entry in Shopify, cutting processing time by 47% through scripting",
        "Provided technical support and troubleshooting, ensuring seamless in-store operations",
        "Customized Shopify store using Liquid, JavaScript, and CSS, aligning with managerial needs",
        "Strengthened website security by implementing input validation against XSS vulnerabilities"
      ],
      type: "current",
      color: "primary"
    },
    {
      title: "Program Development",
      company: "Personal Projects",
      period: "June 2024 - Current",
      location: "Remote",
      achievements: [
        "Automated AI bot access and reservation booking systems",
        "Developed secure authentication mechanisms",
        "Implemented robust error handling and logging"
      ],
      type: "current",
      color: "primary"
    },
    {
      title: "Cyberstart America Member",
      company: "National Cyber Scholarship Foundation",
      period: "Oct. 2022 - May 2023",
      location: "National Program",
      achievements: [
        "Achieved Top 2% ranking nationally in cybersecurity competitions",
        "Completed advanced cybersecurity challenges and assessments",
        "Demonstrated proficiency in various cybersecurity domains"
      ],
      type: "past",
      color: "secondary"
    },
    {
      title: "Student Intern",
      company: "Hicksville School District",
      period: "Sept. 2022 - June 2023",
      location: "Hicksville, NY",
      achievements: [
        "Focused on data organization and accessibility improvements",
        "Assisted with IT infrastructure and support tasks",
        "Gained experience in educational technology environments"
      ],
      type: "past",
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Building expertise through hands-on roles in IT strategy, cybersecurity, 
            and secure application development.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-secondary-600 hidden md:block animate-slide-left animate-delay-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative animate-slide-right animate-delay-${(index + 5) * 100}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-primary-500 rounded-full border-4 border-secondary-950 shadow-lg hidden md:block">
                  <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-75"></div>
                </div>
                
                <div className="md:ml-20">
                  <div className="group bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-400 font-semibold mb-3">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center text-secondary-400 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-secondary-400 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        {exp.type === 'current' && (
                          <span className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-medium">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start group/item">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:bg-primary-400 transition-colors duration-300"></div>
                          <span className="text-secondary-200 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24 animate-slide-bottom animate-delay-800">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Education & Training
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/50 transition-all duration-300 animate-scale-in animate-delay-900">
              <div className="flex items-center mb-6">
                <div className="bg-primary-500/10 p-3 rounded-xl mr-4">
                  <Briefcase className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Stevens Institute of Technology</h4>
                  <p className="text-primary-400 font-medium">Bachelor's Degree - Cybersecurity Major</p>
                </div>
              </div>
              <p className="text-secondary-400">Sept. 2023 - Current</p>
            </div>

            <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/50 transition-all duration-300 animate-scale-in animate-delay-1000">
              <div className="flex items-center mb-6">
                <div className="bg-primary-500/10 p-3 rounded-xl mr-4">
                  <Briefcase className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">SANS Technology Institute</h4>
                  <p className="text-primary-400 font-medium">SEC401: Security Essentials</p>
                </div>
              </div>
              <p className="text-secondary-400">June 2023 - Sept. 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;