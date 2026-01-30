import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { Cloud, Shield, ShoppingBag } from "lucide-react";

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: "GB",
    name: "Gustavo Balaguera",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills-detail" },
    { label: "Contact", href: "#contact" },
  ],
  resume: {
    label: "Resume",
    onClick: () => window.open("mailto:gustavobalaguera214@gmail.com?subject=Resume Request", "_blank"),
  },
  hero: {
    titleLine1: "Cybersecurity Student &",
    titleLine2Gradient: "Security Analyst",
    subtitle: "Top 2% nationally in CyberStart America. Specializing in vulnerability assessment, penetration testing, and cloud security. Actively seeking cybersecurity internships for Summer 2025.",
  },
  ctaButtons: {
    primary: {
      label: "View My Projects",
      onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    },
    secondary: {
      label: "Get In Touch",
      onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
  },
  projects: [
    {
      title: "Security Monitoring System",
      description: "AWS-based real-time threat detection and incident response. Reduced response time by 20% using CloudWatch.",
      tags: ["AWS CloudWatch", "Secrets Manager", "SNS", "Lambda", "Python"],
      imageContent: <Cloud className="w-10 h-10 text-primary/60" />,
    },
    {
      title: "Cloud Security Framework",
      description: "Role-based access control with automated compliance monitoring. Reduced unauthorized access risks by 30%.",
      tags: ["AWS IAM", "EC2", "CloudTrail", "JSON"],
      imageContent: <Shield className="w-10 h-10 text-accent/60" />,
    },
    {
      title: "E-commerce Optimization",
      description: "Full Shopify performance and security overhaul. Improved LCP by 35% and SEO ranking by 43%.",
      tags: ["Shopify", "Liquid", "JavaScript", "CSS", "Klaviyo"],
      imageContent: <ShoppingBag className="w-10 h-10 text-primary/60" />,
    },
  ],
  stats: [
    { value: "Top 2%", label: "CyberStart National Ranking" },
    { value: "$12K+", label: "Scholarships Earned" },
    { value: "7+", label: "Industry Certifications" },
  ],
  showAnimatedBackground: true,
};

const experiences = [
  {
    role: "E-commerce Systems & Security Analyst",
    company: "Riflessi | Luxury Italian Menswear",
    location: "New York, NY",
    dates: "Oct 2024 – Present",
    icon: "security" as const,
    achievements: [
      "Identified critical vulnerabilities (client-side auth bypass, exposed Shopify Admin API key) and led remediation preventing unauthorized access.",
      "Built automation tools reducing inventory processing time by 52% and eliminating manual errors.",
      "Improved SEO and site performance, increasing organic traffic by 65%, CTR by 45%, and add-to-cart rate by 53%.",
      "Strengthened website security with input validation against XSS attacks.",
    ],
  },
  {
    role: "CyberStart America - Finalist",
    company: "National Cyber Scholarship Foundation",
    location: "Remote",
    dates: "Oct 2022 – May 2023",
    icon: "security" as const,
    achievements: [
      "Ranked in the top 2% nationwide; earned $12K in cybersecurity training scholarships.",
      "Completed ethical hacking, threat detection, and digital forensics challenges.",
      "Demonstrated proficiency using Wireshark and BurpSuite across multiple cybersecurity domains.",
    ],
  },
  {
    role: "Student Intern",
    company: "Hicksville School District",
    location: "Hicksville, NY",
    dates: "Sept 2022 – June 2023",
    icon: "work" as const,
    achievements: [
      "Developed Python script using brute-force decryption to block ransomware attacks.",
      "Improved data organization and accessibility for educational technology systems.",
      "Gained hands-on experience in IT infrastructure and support.",
    ],
  },
];

const skills = {
  cybersecurity: [
    "Penetration Testing",
    "Network Defense",
    "Cloud Security",
    "Secure Coding",
    "TCP/IP",
    "NIST Framework",
    "Defense in Depth",
    "SIEM",
    "Burp Suite",
    "Wireshark",
  ],
  programming: {
    Python: 95,
    Java: 85,
    "HTML/CSS": 90,
    JavaScript: 75,
    "C/C++": 70,
  },
  tools: {
    Git: 85,
    "API Integration": 80,
    Scripting: 92,
    "Microsoft Office": 90,
    "Computer Hardware": 85,
  },
  shopify: [
    "Theme Customization",
    "SEO Optimization",
    "Performance Enhancement",
    "Page Indexing",
    "Custom Development",
  ],
};

const certifications = [
  "GIAC Foundational Cybersecurity Technologies (GFACT)",
  "SANS Security Essentials (SEC401)",
  "Mastercard - Cybersecurity Job Simulation",
  "Datacom - Cybersecurity Operations Job Simulation",
  "AIG - Shields Up: Cybersecurity Job Simulation",
  "Telstra AU - Cybersecurity Job Simulation",
  "HubSpot SEO I & II",
];

const awards = [
  { title: "Top 2% Nationally - CyberStart America", years: ["2022", "2023"] },
  { title: "Hispanic Scholarship Fund Scholar", year: "2024", note: "Top 10% of 100,000+ applicants" },
  { title: "SANS Scholarship - SEC401 Bootcamp", value: "$9,000" },
  { title: "SANS Foundations Scholarship", value: "$3,000" },
  { title: "National Cyber Scholar with Honors", years: ["2022", "2023"] },
  { title: "Dean's List", year: "2023" },
  { title: "National Hispanic Recognition", year: "2022" },
];

const education = {
  degree: "Bachelor's Degree - Cybersecurity Major",
  institution: "Stevens Institute of Technology",
  dates: "Sept 2023 – May 2027",
  coursework: [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Discrete Structures",
    "Computer & Security Foundations",
    "Network, Endpoint, & Cloud",
    "Web Programming & Development",
    "OS Fundamentals",
    "Computer Architecture",
    "Systems Programming",
    "Software Development Process",
  ],
};

const contact = {
  email: "gustavobalaguera214@gmail.com",
  location: "Stevens Institute of Technology, Hoboken, NJ",
  status: "Actively seeking cybersecurity internships and entry-level positions for Summer 2025 and beyond.",
  linkedin: "https://www.linkedin.com/in/gbalaguera",
  github: "https://gustavobalaguera.github.io/portfolio/",
};

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <PortfolioPage {...portfolioData} />
      
      <div className="relative z-10">
        <ExperienceSection experiences={experiences} />
        
        <div className="divider" />
        
        <SkillsSection {...skills} />
        
        <div className="divider" />
        
        <CertificationsSection certifications={certifications} awards={awards} />
        
        <div className="divider" />
        
        <EducationSection {...education} />
        
        <div className="divider" />
        
        <ContactSection {...contact} />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
