export const personalInfo = {
  name: "Rahul Chaurasia",
  role: "Full Stack Developer | Node.js | Laravel",
  headline: "Full Stack Engineer specializing in high-concurrency Node.js, enterprise Laravel architectures, real-time messaging, and high-performance full-stack web applications.",
  email: "rahulroot7@gmail.com",
  phone: "+91 7905256440",
  location: "India",
  avatar: "/rahul-chaurasia.jpg",
  resumePdf: "/Rahul_Chaurasia_Resume.pdf",
  socials: {
    github: "https://github.com/rahulroot7",
    linkedin: "https://linkedin.com/in/rahul-chaurasia-80371a194",
    email: "mailto:rahulroot7@gmail.com",
    phone: "tel:+917905256440"
  },
  stats: [
    { label: "Years Experience", value: "4+", detail: "Enterprise & Gov projects" },
    { label: "API Latency Boost", value: "30%", detail: "Optimized via Redis & indexing" },
    { label: "DB Query Optimization", value: "40%", detail: "Reduced query execution time" },
    { label: "Concurrent Users Handled", value: "500+", detail: "Real-time sub-100ms latency" }
  ]
};

export const professionalSummary = `Full Stack Developer with 4+ years of experience designing, developing, and deploying scalable web applications using Node.js, React.js, Laravel (PHP), and JavaScript. Experienced in building responsive user interfaces, RESTful APIs, authentication systems (JWT/OAuth2), microservices, and real-time applications. Proficient in MySQL, PostgreSQL, MongoDB, Redis, Docker, AWS S3, and CI/CD pipelines. Strong background in API integration, database optimization, performance tuning, and delivering secure, high-quality solutions for enterprise and government applications.`;

export const skillsCategories = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP 8", "SQL"]
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Fastify",
      "Laravel",
      "RESTful APIs",
      "API Integration",
      "JWT Authentication",
      "OAuth2",
      "Socket.IO",
      "WebSockets"
    ]
  },
  {
    category: "Architecture",
    skills: [
      "MVC Architecture",
      "Microservices",
      "Asynchronous Processing",
      "Queue Jobs",
      "Cron Jobs",
      "Repository Pattern",
      "Clean Code Practices"
    ]
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
      "Database Indexing",
      "Schema Design",
      "Transactions & ACID"
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Docker",
      "AWS S3",
      "Git & GitHub",
      "GitLab",
      "CI/CD Pipelines (GitHub Actions)",
      "Linux Server Administration",
      "Nginx",
      "PM2 Process Manager",
      "Apache"
    ]
  },
  {
    category: "Messaging & Tools",
    skills: [
      "Kafka",
      "RabbitMQ",
      "Swagger / OpenAPI",
      "Postman",
      "Composer",
      "npm"
    ]
  },
  {
    category: "AI & GenAI",
    skills: [
      "OpenAI API",
      "Codex",
      "Generative AI Integration",
      "Prompt Engineering"
    ]
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "HTML5 (Semantic)",
      "CSS3",
      "Bootstrap",
      "Responsive Web Design",
      "State Management"
    ]
  }
];

export const experiences = [
  {
    id: "echt-tech",
    company: "ECHT TECH Consultancy Pvt. Ltd.",
    role: "Software Developer (Full Stack Developer)",
    period: "Sep 2023 – Present",
    type: "Full-time",
    location: "India",
    featuredBadge: "Current Role",
    highlights: [
      "Designed, developed, and maintained scalable web applications using Node.js, React.js, Express.js, Laravel, and PHP, delivering secure and high-performance solutions for enterprise and government clients.",
      "Developed responsive and reusable user interfaces using React.js, integrated frontend with RESTful APIs, and implemented authentication using JWT and role-based access control (RBAC).",
      "Built and maintained scalable backend services, REST APIs, third-party API integrations, and business workflows following MVC Architecture, Repository Pattern, and clean coding best practices.",
      "Optimized application performance using Redis, database indexing, query optimization, and efficient schema design, improving API response times by 30% and reducing database query execution time by 40%.",
      "Containerized applications using Docker and automated deployments with GitHub Actions CI/CD, reducing deployment time by 50% while improving release reliability.",
      "Collaborated with UI/UX designers, QA engineers, and cross-functional Agile teams to deliver end-to-end features, resolve production issues, and enhance application scalability and user experience."
    ],
    techStack: [
      "Node.js",
      "React.js",
      "Express.js",
      "Laravel",
      "PHP",
      "Redis",
      "Docker",
      "GitHub Actions",
      "JWT / RBAC",
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    id: "mariox-software",
    company: "Mariox Software Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2023 – Sep 2023",
    type: "Full-time",
    location: "India",
    highlights: [
      "Developed and maintained full-stack web application features using Node.js, React.js, Express.js, and MongoDB, delivering scalable and responsive user experiences.",
      "Engineered a real-time chat application using Node.js, Socket.IO, and WebSockets, supporting 500+ concurrent users and 10K+ daily messages with sub-100ms latency.",
      "Designed asynchronous messaging workflows using RabbitMQ, improving system scalability, fault tolerance, and overall throughput.",
      "Built and optimized NumberDekho, a location-based vendor marketplace, implementing geo-radius search and RESTful APIs to onboard 1,000+ vendors.",
      "Collaborated with cross-functional teams using Agile methodologies, integrated third-party APIs, resolved production issues, and delivered high-quality software releases."
    ],
    techStack: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
      "RabbitMQ",
      "Elasticsearch",
      "REST APIs"
    ]
  },
  {
    id: "xeam-venture",
    company: "XEAM Venture Pvt. Ltd.",
    role: "Software Developer",
    period: "Feb 2022 – Apr 2023",
    type: "Full-time",
    location: "India",
    highlights: [
      "Developed and maintained an HRMS ERP system using Laravel, PHP, MySQL, HTML5, CSS3, Bootstrap, and JavaScript, automating payroll, attendance, leave, and employee management workflows.",
      "Built responsive and user-friendly interfaces using HTML5, CSS3, Bootstrap, and JavaScript, improving usability across desktop and mobile devices.",
      "Developed secure RESTful APIs, implemented JWT-based authentication, and role-based access control (RBAC) for HR lifecycle management and employee self-service modules.",
      "Optimized MySQL database queries, indexing, and schema design, reducing payroll processing time by 35% and improving overall application performance.",
      "Collaborated with business analysts and QA teams to implement new features, fix production issues, and deliver software enhancements using Agile development practices."
    ],
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JWT",
      "RBAC",
      "ERP / HRMS"
    ]
  }
];

export const keyProjects = [
  {
    id: "vak-chat",
    title: "VAK – Real-Time Chat Application",
    subtitle: "High-concurrency chat platform supporting 500+ concurrent users and sub-100ms latency",
    category: "Real-Time / Full Stack",
    tagline: "Sub-100ms Real-Time Engine with Socket.IO & MongoDB",
    technologies: ["React.js", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Firebase Cloud Messaging (FCM)"],
    featured: true,
    points: [
      "Developed a full-stack real-time chat application using React.js, Node.js, Express.js, and Socket.IO with one-to-one/group messaging, online status, read receipts, and file sharing.",
      "Integrated Firebase Cloud Messaging (FCM) for instant push notifications across mobile and web clients.",
      "Architected scalable MongoDB document schemas with optimized compound indexing, handling 10,000+ daily messages reliably.",
      "Engineered room management and automatic reconnect fallbacks to preserve message ordering and connection state under network instability."
    ],
    metrics: [
      { label: "Concurrent Users", value: "500+" },
      { label: "Daily Messages", value: "10K+" },
      { label: "Latency", value: "<100ms" }
    ]
  },
  {
    id: "number-dekho",
    title: "NumberDekho – Local Services Marketplace",
    subtitle: "Location-based vendor discovery & marketplace with geo-radius search",
    category: "Marketplace / Search",
    tagline: "Scalable Geo-Radius Marketplace Platform for 1,000+ Vendors",
    technologies: ["React.js", "Node.js", "Laravel", "MySQL", "Elasticsearch", "REST APIs"],
    featured: true,
    points: [
      "Built a location-based marketplace with responsive user interfaces using React.js and scalable backend services using Node.js, Laravel, and RESTful APIs.",
      "Implemented high-precision geo-radius search and spatial queries to connect customers with nearby verified service providers.",
      "Engineered seamless vendor onboarding workflows, multi-tier subscription management, and automated payment gateways.",
      "Integrated Elasticsearch for fuzzy service lookups and query caching, maintaining high responsiveness during peak traffic spikes."
    ],
    metrics: [
      { label: "Vendors Onboarded", value: "1,000+" },
      { label: "Architecture", value: "Hybrid Node/Laravel" },
      { label: "Search Engine", value: "Elasticsearch" }
    ]
  },
  {
    id: "government-digital-platforms",
    title: "Government Digital Platforms (UCC, NIHFW, PM SHRI, UDISE+, HRMS)",
    subtitle: "Mission-critical public digital governance infrastructure for state and central bodies",
    category: "Enterprise / GovTech",
    tagline: "High-Security, Citizen-Scale Public Portals & Government Dashboards",
    technologies: ["React.js", "Node.js", "Laravel", "PostgreSQL", "MySQL", "REST APIs", "JWT / RBAC"],
    featured: true,
    points: [
      "Developed and maintained secure full-stack web applications using React.js, Node.js, and Laravel for enterprise and government platforms (UCC Uttarakhand, NIHFW, PM SHRI, UDISE+, HRMS).",
      "Built responsive analytical dashboards and administrative control panels for tracking institutional metrics and workflows.",
      "Developed secure RESTful APIs with strict Role-Based Access Control (RBAC) and audit trails for compliance.",
      "Optimized large-scale PostgreSQL and MySQL databases, implementing query caching and indexing to handle high-volume civic traffic."
    ],
    metrics: [
      { label: "Platforms", value: "5+ Major Portals" },
      { label: "Compliance", value: "Strict RBAC & Audit" },
      { label: "Databases", value: "PostgreSQL & MySQL" }
    ]
  }
];

export const education = [
  {
    institution: "Chandigarh University",
    degree: "Master of Computer Applications (MCA)",
    duration: "2020 – 2022",
    location: "Punjab, India",
    focus: "Advanced Software Engineering, Database Systems, Cloud Computing & Web Technologies"
  },
  {
    institution: "SRMU, Lucknow",
    degree: "Bachelor of Science in Information Technology",
    duration: "2017 – 2020",
    location: "Lucknow, India",
    focus: "Computer Science Fundamentals, Data Structures, OOP, Web Programming & Relational Databases"
  }
];
