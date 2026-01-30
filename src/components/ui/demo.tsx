import { PortfolioPage, PortfolioPageProps } from "./starfall-portfolio-landing";
import { Shield, Cloud, TrendingUp } from 'lucide-react';

const customPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'GB',
    name: 'Gustavo Balaguera',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  resume: {
    label: 'Contact Me',
    onClick: () => { window.location.href = 'mailto:gustavobalaguera214@gmail.com'; },
  },
  hero: {
    titleLine1: 'Cybersecurity Professional &',
    titleLine2Gradient: 'Ethical Hacker',
    subtitle: 'Full-time student at Stevens Institute of Technology specializing in penetration testing, network defense, and secure application development. Top 2% nationally in cybersecurity competitions.',
  },
  ctaButtons: {
    primary: {
      label: 'View My Work',
      onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () => { window.location.href = 'mailto:gustavobalaguera214@gmail.com'; },
    },
  },
  projects: [
    { 
      title: 'Security Monitoring System', 
      description: 'Comprehensive security monitoring solution using AWS CloudWatch, Secrets Manager, and SNS for real-time threat detection.',
      tags: ['AWS', 'CloudWatch', 'Python', 'Security'],
      imageContent: <Shield className="h-12 w-12 text-primary-400" />
    },
    { 
      title: 'Cloud Security Framework', 
      description: 'Robust cloud security framework implementing role-based access control with AWS IAM for enhanced compliance.',
      tags: ['AWS IAM', 'EC2', 'CloudTrail', 'JSON'],
      imageContent: <Cloud className="h-12 w-12 text-primary-400" />
    },
    { 
      title: 'Optimized Shopify Website', 
      description: 'Complete e-commerce optimization focusing on performance, security, and customer experience enhancement.',
      tags: ['Shopify', 'JavaScript', 'SEO', 'Performance'],
      imageContent: <TrendingUp className="h-12 w-12 text-primary-400" />
    },
  ],
  stats: [
    { value: 'Top 2%', label: 'National Cyber Scholar' },
    { value: '3+', label: 'Major Projects' },
    { value: 'GFACT', label: 'Certified' },
  ],
  showAnimatedBackground: true,
};

const Demo = () => {
  return <PortfolioPage {...customPortfolioData} />;
};

export default Demo;