import React from 'react';
import { ExternalLink, Github, Cloud, Shield, TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Security Monitoring System",
      company: "Nextwork",
      date: "June 2025",
      description: "Comprehensive security monitoring solution leveraging AWS cloud services for real-time threat detection and incident response.",
      achievements: [
        "Secured credentials using AWS Secrets Manager",
        "Reduced response time by 20% using CloudWatch Metric Filters for anomaly detection",
        "Improved threat detection efficiency by 45% with CloudWatch Alarms & SNS notifications"
      ],
      technologies: ["AWS CloudWatch", "AWS Secrets Manager", "SNS", "Lambda", "Python"],
      icon: Shield,
      gradient: "from-primary-500 to-primary-600",
      slug: "security-monitoring-system"
    },
    {
      title: "Cloud Security Framework with AWS IAM",
      company: "Nextwork",
      date: "June 2025",
      description: "Robust cloud security framework implementing zero-trust principles with AWS Identity and Access Management.",
      achievements: [
        "Hardened EC2 instances with IAM policies, reducing unauthorized access risks by 30%",
        "Implemented role-based access control, increasing security compliance by 20%",
        "Developed automated compliance monitoring and reporting system"
      ],
      technologies: ["AWS IAM", "EC2", "CloudTrail", "Python", "Terraform"],
      icon: Cloud,
      gradient: "from-primary-600 to-secondary-600",
      slug: "cloud-security-framework-aws-iam"
    },
    {
      title: "Optimized Shopify Website",
      company: "Riflessi",
      date: "Oct. 2024 - May 2025",
      description: "Complete e-commerce optimization focusing on performance, security, and customer experience enhancement.",
      achievements: [
        "Improved Largest Contentful Paint (LCP) by 35%, boosting site speed",
        "Increased SEO ranking by 43%, moving from position 20.7 to 11.8",
        "Enhanced targeted marketing via customer segmentation, driving $2.5K average order value"
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS", "Klaviyo", "SEO"],
      icon: TrendingUp,
      gradient: "from-secondary-500 to-primary-500",
      slug: "optimized-shopify-website"
    }
  ];

  const handleViewDetails = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 to-secondary-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Showcasing real-world applications of cybersecurity principles, 
            cloud architecture, and secure development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group animate-slide-bottom animate-delay-${(index + 2) * 100}`}>
              <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl overflow-hidden hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-500 h-full flex flex-col">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                        {project.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.company}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-secondary-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-secondary-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleViewDetails(project.slug)}
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium group/btn"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-slide-bottom animate-delay-600">
          <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-12 max-w-3xl mx-auto">
            <div className="bg-primary-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              More Projects in Development
            </h3>
            <p className="text-secondary-300 mb-8 text-lg leading-relaxed">
              I'm continuously working on new cybersecurity projects and research. 
              Connect with me to discuss collaboration opportunities or to learn more about my ongoing work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/gustavobalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-secondary-700 text-white py-4 px-8 rounded-xl hover:bg-secondary-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Github className="h-5 w-5" />
                View GitHub
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button
                onClick={() => navigate('/blog')}
                className="group border-2 border-primary-500 text-primary-400 py-4 px-8 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                View Blog
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;