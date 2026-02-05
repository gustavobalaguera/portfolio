import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";import AboutSection from "@/components/sections/AboutSection";import { Cloud, Shield, ShoppingBag } from "lucide-react";

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: "GB",
    name: "Gustavo Balaguera",
  },
  navLinks: [
    { label: "About", href: "#about" },
    // { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills-detail" },
    { label: "Contact", href: "#contact" },
  ],
  resume: {
    label: "Ask For Resume",
    onClick: () => window.open("mailto:gustavobalaguera214@gmail.com?subject=Resume Request", "_blank"),
  },
  hero: {
    titleLine1: "Cybersecurity Student &",
    titleLine2Gradient: "Security Analyst",
    subtitle: "Ethical Hacking, Network Defense, and Penetration Testing. 3rd Year Cybersecurity Student at Stevens Institute of Technology.",
  },
  ctaButtons: {
    primary: {
      label: "Request Resume",
      onClick: () =>  window.open("mailto:gustavobalaguera214@gmail.com?subject=Resume Request", "_blank"),
    },
    secondary: {
      label: "Get In Touch",
      onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
  },
  // projects: [
  //   {
  //     title: "Security Monitoring System",
  //     description: "AWS-based real-time threat detection and incident response. Reduced response time by 20% using CloudWatch.",
  //     tags: ["AWS CloudWatch", "Secrets Manager", "SNS", "Lambda", "Python"],
  //     imageContent: <Cloud className="w-10 h-10 text-primary/60" />,
  //   },
  //   {
  //     title: "Cloud Security Framework",
  //     description: "Role-based access control with automated compliance monitoring. Reduced unauthorized access risks by 30%.",
  //     tags: ["AWS IAM", "EC2", "CloudTrail", "JSON"],
  //     imageContent: <Shield className="w-10 h-10 text-accent/60" />,
  //   },
  //   {
  //     title: "E-commerce Optimization",
  //     description: "Full Shopify performance and security overhaul. Improved LCP by 35% and SEO ranking by 43%.",
  //     tags: ["Shopify", "Liquid", "JavaScript", "CSS", "Klaviyo"],
  //     imageContent: <ShoppingBag className="w-10 h-10 text-primary/60" />,
  //   },
  // ],
  stats: [
    { value: "Top 2%", label: "CyberStart National Ranking" },
    { value: "$12K+", label: "Scholarships Earned" },
    { value: "5+", label: "Years of Active Learning" },
  ],
  showAnimatedBackground: true,
};

const experiences = [
  {
    role: "E-commerce Systems & Security Analyst",
    company: "Riflessi | Luxury Italian Menswear",
    location: "New York, NY",
    dates: "Oct 2024 - Present",
    icon: "security" as const,
    achievements: [
      "Identified critical vulnerabilities (client-side auth bypass, exposed Shopify Admin API key) and led remediation preventing unauthorized access.",
      "Built automation tools reducing inventory processing time by 52% and eliminating manual errors.",
      "Improved SEO and site performance, increasing organic traffic by 65%, CTR by 45%, and add-to-cart rate by 53%.",
    ],
  },
  {
    role: "Virtual Cybersecurity Experience - Mastercard",
    company: "Forage",
    location: "Remote",
    dates: "Jan 2026 - Jan 2026",
    icon: "work" as const,
    achievements: [
      "Identified phishing and social engineering threats and provided insights that informed targeted security awareness training.",
      "Analyzed business units to identify security training gaps and delivered recommendations to strengthen organizational awareness.",
      "Completed a security analyst simulation focused on phishing detection and human-risk mitigation.",
    ],
  },
  {
    role: "Virtual Cybersecurity Experience - Datacom",
    company: "Forage",
    location: "Remote",
    dates: "Jan 2026 - Jan 2026",
    icon: "work" as const,
    achievements: [
      "Investigated a simulated client cyberattack and produced a detailed report with remediation recommendations.",
      "Conducted a comprehensive risk assessment identifying high-impact threats and vulnerabilities.",
      "Demonstrated skills in threat analysis, risk assessment, and security documentation.",
    ],
  },
  {
    role: "Virtual Cybersecurity Experience - AIG Shield Up",
    company: "Forage",
    location: "Remote",
    dates: "Jan 2026 - Jan 2026",
    icon: "work" as const,
    achievements: [
      "Researched and understood reported vulnerabilities, showcasing analytical skills in cybersecurity",
      "Developed a Python script that used brute-force decryption techniques with the cryptography library to block ransomware attacks, preventing ransom payments and freeing resources for other security projects",
    ],
  },
  {
    role: "Student Intern",
    company: "Hicksville High School",
    location: "Hicksville, New York",
    dates: "Sep 2022 - June 2023",
    icon: "work" as const,
    achievements: [
      "Organized data: Ensured data was systematically categorized for accuracy.",
      "Accurate data entry: Inputted information into a database system meticulously.",
      "Enhanced accessibility: Prepared data for easy retrieval in future endeavors."
    ],
  },
  {
    role: "CyberStart America - Finalist",
    company: "National Cyber Scholarship Foundation",
    location: "Remote",
    dates: "Oct 2022 - May 2023",
    icon: "security" as const,
    achievements: [
      "Ranked in the top 2% nationwide; earned $12K in cybersecurity training scholarships.",
      "Completed ethical hacking, threat detection, and digital forensics challenges.",
      "Demonstrated proficiency using Wireshark and BurpSuite across multiple cybersecurity domains.",
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
    "Nmap"
  ],
  programming: {
    Python: 95,
    Java: 85,
    "HTML/CSS": 90,
    JavaScript: 75,
    "C/C++": 70,
    "SQL": 90,
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
  "HubSpot SEO I & II",
];

const awards = [
  { title: "Top 2% Nationally - CyberStart America", years: ["2022", "2023"] },
  { title: "Hispanic Scholarship Fund Scholar", year: "2024", note: "Top 10% of 100,000+ applicants" },
  { title: "SANS Scholarship - SEC401 Bootcamp", value: "$9,000" },
  { title: "SANS Foundations Scholarship", value: "$3,000" },
  { title: "National Cyber Scholar with Honors", years: ["2022", "2023"] },
  { title: "Dean's List", years: ["Fall 2023", "Spring 2024", "Fall 2025"] },
  { title: "National Hispanic Recognition", year: "2022" },
];

const education = {
  degree: "Bachelor's Degree - Cybersecurity Major",
  institution: "Stevens Institute of Technology",
  dates: "Sept 2023 - May 2027",
  coursework: [
    "Introduction To Computer Science · CS 115",
    "Discrete Structures · CS 135",
    "Introduction To Web Technologies · CS 146",
    "Data Structures · CS 284",
    "Computer Architecture · CS 382",
    "Systems Programming · CS 392",
    "Theory Of Computation · CS 334",
    "Software Development Process · CS 347",
    "Principles Of Programming Languages · CS 496",
    "Object-Oriented Programming",
    "Computer & Security Foundations",
    "Fundamentals Of Cyber Security",
    "Introduction To It Security",
    "Network, Endpoint, & Cloud",
    "Web Programming & Development",
    "OS Fundamentals",
    "Database Management Systems · CS 442",
    "Discrete Math For Cryptography · CS 503",
    "Privacy In A Networked World · CS 578",
  ],
};

const contact = {
  email: "gustavobalaguera214@gmail.com",
  location: "Stevens Institute of Technology, Hoboken, NJ",
  status: "Actively seeking cybersecurity internships and entry-level positions for Summer 2026 and beyond.",
  linkedin: "https://www.linkedin.com/in/gbalaguera",
  github: "https://github.com/gustavobalaguera",
};

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <PortfolioPage {...portfolioData} />

      <AboutSection />
      
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
