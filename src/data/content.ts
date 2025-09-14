import { PersonalInfo, AboutMe, Skill, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Navya Nanduri",
  title: "Business Analytics Professional",
  tagline: "Transforming Data into Strategic Business Solutions",
  email: "navyananduri25@gmail.com",
  github: "https://github.com/NavyaNanduri",
  linkedin: "https://linkedin.com/in/navya-nanduri",
  location: "Oklahoma City, OK",
  resumeUrl: "/resume/navya-nanduri-resume.pdf",
};

export const aboutMe: AboutMe = {
  story: `My journey into business analytics began with a simple fascination: how do numbers tell stories that can change the world? During my undergraduate studies in Business Administration, I discovered that behind every successful business decision lies a foundation of data waiting to be understood and leveraged.

My path has taken me from analyzing seller performance data at Amazon in Hyderabad, where I helped improve customer experiences for thousands of marketplace partners, to pursuing advanced analytics education at the University of Central Oklahoma. Along the way, I've had the privilege of working on projects that span from railway safety systems in Portugal to renewable energy policy in India.

What drives me is the belief that data analytics isn't just about numbers—it's about creating meaningful impact. Whether I'm developing predictive maintenance models that could prevent railway accidents, analyzing Olympic Games data to uncover hidden patterns in sports history, or helping businesses optimize their operations, I see each project as an opportunity to make life better for real people.`,
  
  philosophy: [
    "Accessibility: Making complex data insights understandable for all stakeholders",
    "Impact: Focusing on analytics that drive real-world positive change", 
    "Collaboration: Bridging technical expertise with business acumen to create solutions that work"
  ]
};

export const skills: Skill[] = [
  {
    category: "Programming & Analytics",
    icon: "💻",
    technologies: [
      { name: "Python", level: "Expert", percentage: 95 },
      { name: "SQL", level: "Expert", percentage: 90 },
      { name: "R", level: "Advanced", percentage: 85 },
      { name: "SAS", level: "Advanced", percentage: 85 },
      { name: "JavaScript", level: "Intermediate", percentage: 70 }
    ]
  },
  {
    category: "Visualization & BI",
    icon: "📊",
    technologies: [
      { name: "Tableau", level: "Expert", percentage: 95 },
      { name: "Power BI", level: "Expert", percentage: 90 },
      { name: "Excel", level: "Expert", percentage: 95 },
      { name: "SAS Enterprise Miner", level: "Advanced", percentage: 85 },
      { name: "Matplotlib/Seaborn", level: "Advanced", percentage: 80 }
    ]
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    technologies: [
      { name: "Scikit-learn", level: "Expert", percentage: 90 },
      { name: "TensorFlow", level: "Advanced", percentage: 80 },
      { name: "Regression Analysis", level: "Expert", percentage: 95 },
      { name: "Time Series Forecasting", level: "Expert", percentage: 95 },
      { name: "A/B Testing", level: "Advanced", percentage: 85 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "metro-predictive-maintenance",
    title: "Predictive Maintenance – Metro do Porto",
    description: "Analyzed 1.5M+ real-time sensor records from railway systems to forecast failures in braking and door components using advanced machine learning techniques.",
    technologies: ["SAS Enterprise Miner", "Python", "Neural Networks", "Time Series Analysis", "Predictive Modeling"],
    impact: "Preventing Railway Failures Through Advanced Analytics",
    results: [
      "Analyzed 1.5M+ real-time sensor records from railway systems",
      "Reduced misclassification rate to 0.2351% using hybrid Neural Networks",
      "Implemented time-series preprocessing and regression techniques",
      "Delivered actionable maintenance insights via dashboards and reports"
    ],
    featured: true,
    image: "/images/projects/metro-project.jpg"
  },
  {
    id: "olympic-analysis",
    title: "Olympic Games Data Analysis", 
    description: "Comprehensive analysis of 271K+ athlete and medal records, integrated with GDP and population data for comparative insights spanning 120+ years of Olympic history.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Visualization"],
    impact: "Uncovering 120+ Years of Athletic Excellence",
    results: [
      "Cleaned and transformed 271K+ athlete and medal records",
      "Integrated GDP and population data for comparative insights",
      "Identified key trends in hosting frequency, country participation, and sport popularity",
      "Visualized historical patterns and spotlighted lesser-known sports"
    ],
    featured: true,
    image: "/images/projects/olympic-project.jpg"
  },
  {
    id: "renewable-energy-india",
    title: "Renewable Energy & Economic Growth in India",
    description: "Multi-variable regression analysis using 20 years of data on electricity access, CO2 emissions, and energy intensity to derive policy insights.",
    technologies: ["SAS", "Python", "Regression Analysis", "Statistical Modeling", "Policy Analysis"],
    impact: "Policy Insights for Sustainable Development",
    results: [
      "Conducted multi-variable regression using 20 years of data",
      "Analyzed electricity access, CO2 emissions, and energy intensity",
      "Performed model diagnostics (AIC/BIC, residual analysis)",
      "Derived policy insights and highlighted challenges like endogeneity"
    ],
    featured: true,
    image: "/images/projects/renewable-energy.jpg"
  },
  {
    id: "community-development-research",
    title: "Community Development Research",
    description: "Field research and survey analysis on 'Teenagers and the Media', exploring social media's impact on youth behavior, academic performance, and mental health.",
    technologies: ["Survey Research", "Statistical Analysis", "Field Study", "Data Collection"],
    impact: "Understanding Youth & Digital Media Impact",
    results: [
      "Conducted comprehensive field research on 'Teenagers and the Media'",
      "Analyzed social media's impact on youth behavior and mental health",
      "Collaborated with Lakshyam Foundation for structured data collection",
      "Presented actionable insights on digital wellness and media influence"
    ],
    featured: false,
    image: "/images/projects/community-research.jpg"
  }
];

export const experiences: Experience[] = [
  {
    id: "amazon-support",
    title: "Selling Partner Support Associate",
    company: "Amazon",
    location: "Hyderabad, India", 
    period: "June 2021 – June 2023",
    startDate: "2021-06-01",
    endDate: "2023-06-01",
    description: "Resolved complex seller issues by analyzing operational data, identifying patterns, and implementing data-driven solutions to enhance the customer experience.",
    achievements: [
      "Achieved 100% audit accuracy for 5+ consecutive weeks, earning 4 quarterly performance awards",
      "Conducted team performance analysis and identified key issues affecting KPIs",
      "Proposed scalable process improvements that were adopted by leadership",
      "Managed Gemma workflow cases and high-volume tickets, ensuring SLA compliance",
      "Interpreted seller support data to uncover recurring trends and root causes"
    ],
    technologies: ["Data Analysis", "Process Improvement", "SLA Management", "Customer Support"]
  },
  {
    id: "uco-specialist",
    title: "Student Multimedia Specialist (Technical)",
    company: "University of Central Oklahoma", 
    location: "Edmond, OK",
    period: "Sept 2023 – May 2024",
    startDate: "2023-09-01",
    endDate: "2024-05-01",
    description: "Supported IT operations by resolving technical issues and implementing Microsoft 365 applications to enhance collaboration and automate workflows.",
    achievements: [
      "Streamlined equipment tracking and service request workflows",
      "Implemented Microsoft 365 applications (Teams, SharePoint, Power BI)",
      "Resolved technical issues related to AV systems and classroom technology",
      "Enhanced stakeholder support through clear technical communication",
      "Gained exposure to system integration and media delivery platforms"
    ],
    technologies: ["Microsoft 365", "IT Support", "System Integration", "Workflow Automation"]
  },
  {
    id: "urban-company-intern",
    title: "Category Management Intern",
    company: "Urban Company",
    location: "Hyderabad, India",
    period: "Jun 2020 – Jul 2020",
    startDate: "2020-06-01",
    endDate: "2020-07-01",
    description: "Worked on end-to-end project lifecycle including meeting supply targets and analyzing market demand.",
    achievements: [
      "Achieved top performance rating by meeting supply targets",
      "Contributed to operational analysis and market demand assessment",
      "Gained exposure to business functions and honed problem-solving skills"
    ],
    technologies: ["Market Analysis", "Supply Chain", "Business Operations"]
  },
  {
    id: "sharekhan-intern",
    title: "Summer Intern",
    company: "Sharekhan Limited",
    location: "Jalandhar, India",
    period: "Jun 2019 – Jul 2019",
    startDate: "2019-06-01",
    endDate: "2019-07-01",
    description: "Approached prospective clients and guided them in investing in mutual funds while managing a small team.",
    achievements: [
      "Successfully approached and guided prospective clients in mutual fund investments",
      "Managed a small team to achieve productivity targets",
      "Delivered investment insights and financial guidance to clients"
    ],
    technologies: ["Financial Analysis", "Client Management", "Investment Advisory"]
  }
];

export const education: Education[] = [
  {
    id: "uco-masters",
    degree: "Master of Science in Business Analytics",
    institution: "University of Central Oklahoma",
    location: "Edmond, OK",
    period: "2023 – 2025",
    gpa: "3.56",
    achievements: [
      "Specialized in AI & Forecasting",
      "Completed advanced coursework in Machine Learning and Statistical Modeling",
      "Developed expertise in Predictive Analytics and Data Visualization"
    ]
  },
  {
    id: "lpu-bachelors",
    degree: "Bachelor of Business Administration",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2017 – 2020",
    gpa: "6.94",
    achievements: [
      "Strong foundation in business fundamentals",
      "Active participation in academic and extracurricular activities"
    ]
  },
  {
    id: "kings-exchange",
    degree: "Bachelor of Business Administration",
    institution: "Kings University College",
    location: "Ontario, Canada",
    period: "Jan 2019 – Apr 2019",
    achievements: [
      "Semester Exchange Program",
      "International exposure to business practices",
      "Cross-cultural learning experience"
    ]
  }
];

export const achievements = [
  "Received 4 consecutive quarterly appreciation awards at Amazon for outstanding end-to-end case handling",
  "Maintained 100% audit accuracy for over 5 weeks and was recognized by leadership",
  "Resolved high-volume Gemma workflows and support tickets with exceptional efficiency",
  "Achieved top performance rating during internship at Urban Company"
];