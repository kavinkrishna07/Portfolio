export const portfolioData = {
  personal: {
    name: "Kavin Krishna G",
    title: "Software Developer",
    focus: "Full Stack Development • Data Structures & Algorithms • Computer Networks",
    tagline: "Software Developer building practical, scalable digital experiences.",
    heroSubtext: "I build full-stack applications, solve algorithmic problems, and enjoy understanding how software works from application logic to computer networks.",
    aboutHeadline: "Turning Complex Ideas Into Usable, Scalable Software",
    aboutBioParagraphs: [
      "I am a Computer Science Engineering student at Sri Eshwar College of Engineering, Coimbatore, focused on software development and problem solving.",
      "I enjoy building full-stack applications, working with Java and modern web technologies, and continuously improving my understanding of data structures, algorithms, databases, operating systems, and computer networks.",
      "I prefer learning by building real applications and turning ideas into usable products."
    ],
    location: "Coimbatore, India",
    college: "Sri Eshwar College of Engineering",
    email: "kavinkrishna.g2024csecs@sece.ac.in",
    phone: "9629517689",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      leetcode: "https://leetcode.com/",
      gfg: "https://geeksforgeeks.org/",
      skillrack: "https://skillrack.com/"
    },
    avatarUrl: "/profile.jpg"
  },

  quickStats: [
    { label: "LeetCode Problems", value: 250, suffix: "+", highlight: true, icon: "Code2" },
    { label: "GeeksforGeeks Problems", value: 140, suffix: "+", highlight: false, icon: "Terminal" },
    { label: "SkillRack Problems", value: 830, suffix: "+", highlight: true, icon: "Cpu" },
    { label: "Current CGPA", value: 8.30, isDecimal: true, suffix: "", highlight: true, icon: "GraduationCap" },
    { label: "PayPal Career Academy", value: 2026, isYear: true, suffix: "", highlight: true, icon: "Award" }
  ],

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "languages", label: "Languages" },
      { id: "frameworks", label: "Frameworks & Tech" },
      { id: "databases", label: "Databases" },
      { id: "tools", label: "Tools & DevOps" },
      { id: "concepts", label: "Core Concepts" }
    ],
    items: [
      // Languages
      { name: "Java", category: "languages", level: "Advanced", icon: "Coffee" },
      { name: "Python", category: "languages", level: "Proficient", icon: "FileCode" },
      { name: "C++", category: "languages", level: "Proficient", icon: "Code" },
      { name: "C", category: "languages", level: "Core", icon: "Terminal" },
      { name: "JavaScript", category: "languages", level: "Advanced", icon: "Braces" },
      { name: "SQL", category: "languages", level: "Proficient", icon: "Database" },

      // Frameworks & Technologies
      { name: "Spring Boot", category: "frameworks", level: "Advanced", icon: "Zap" },
      { name: "Node.js", category: "frameworks", level: "Proficient", icon: "Server" },
      { name: "Express.js", category: "frameworks", level: "Proficient", icon: "Network" },
      { name: "ReactJS", category: "frameworks", level: "Advanced", icon: "Layout" },

      // Databases
      { name: "MySQL", category: "databases", level: "Advanced", icon: "Database" },
      { name: "MongoDB", category: "databases", level: "Proficient", icon: "Layers" },
      { name: "PostgreSQL", category: "databases", level: "Core", icon: "Database" },

      // Tools & DevOps
      { name: "Docker", category: "tools", level: "Core", icon: "Box" },
      { name: "Kubernetes", category: "tools", level: "Core", icon: "Boxes" },
      { name: "Git", category: "tools", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub", category: "tools", level: "Advanced", icon: "Github" },
      { name: "Postman", category: "tools", level: "Proficient", icon: "Send" },
      { name: "IntelliJ IDEA", category: "tools", level: "Advanced", icon: "Laptop" },
      { name: "VS Code", category: "tools", level: "Advanced", icon: "Code" },
      { name: "Linux", category: "tools", level: "Proficient", icon: "Terminal" },

      // Core Concepts
      { name: "Data Structures & Algorithms", category: "concepts", level: "Expert Focus", icon: "Binary" },
      { name: "OOPS", category: "concepts", level: "Advanced", icon: "Component" },
      { name: "DBMS", category: "concepts", level: "Advanced", icon: "Database" },
      { name: "Operating Systems", category: "concepts", level: "Proficient", icon: "Cpu" },
      { name: "Computer Networks", category: "concepts", level: "Proficient", icon: "Globe" }
    ]
  },

  projects: [
    {
      id: "navisphere",
      name: "Indoor Navigation System (Navisphere)",
      isFlagship: true,
      category: "Indoor Navigation System",
      date: "Ongoing Project",
      technologies: ["Spring Boot", "ReactJS", "MySQL"],
      description: "Developing a Java-based indoor navigation system for large indoor environments such as malls and university campuses, integrating BLE beacon-based positioning, interactive maps, and intelligent route guidance.",
      features: [
        "Developing a Java-based indoor navigation system for large indoor environments such as malls and university campuses",
        "Integrating BLE beacon-based positioning, interactive maps, and intelligent route guidance",
        "Implementing searchable locations, shortest-path algorithms, and real-time navigation",
        "Accessibility features to deliver accurate, step-by-step directions with dynamic route updates and location tracking"
      ],
      githubFrontend: "https://github.com/",
      githubBackend: "https://github.com/"
    },
    {
      id: "student-notes",
      name: "Student Notes Sharing Site",
      isFlagship: false,
      category: "Educational Platform",
      date: "May 2026",
      technologies: ["ReactJS", "Spring Boot", "Spring Data JPA", "MySQL"],
      description: "Built a full-stack student notes-sharing platform with OAuth 2.0 login, RESTful APIs, CRUD operations, and subject-based search.",
      features: [
        "Built a full-stack student notes-sharing platform with OAuth 2.0 login, RESTful APIs, CRUD operations, and subject-based search",
        "Integrated the React frontend with the Spring Boot backend via Axios",
        "Enabling secure authentication, profile-based note management, and efficient data handling through Spring Data JPA",
        "MySQL transactional persistence and modular backend controllers"
      ],
      githubFrontend: "https://github.com/",
      githubBackend: "https://github.com/"
    },
    {
      id: "ekart",
      name: "E-Kart – E-commerce Platform",
      isFlagship: false,
      category: "E-commerce Platform",
      date: "June 2025",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB"],
      description: "Developed a full-stack MERN e-commerce application with JWT authentication, role-based access control (RBAC), and secure REST APIs.",
      features: [
        "Developed a full-stack MERN e-commerce application with JWT authentication and role-based access control (RBAC)",
        "Implemented a modular backend architecture with CRUD operations and authentication middleware",
        "Centralized error handling for efficient MongoDB interactions",
        "Stateless JWT authorization and RESTful API endpoints"
      ],
      githubFrontend: "https://github.com/",
      githubBackend: "https://github.com/"
    }
  ],

  problemSolving: {
    headline: "Algorithmic Rigor & Problem Solving",
    subtext: "Demonstrating consistent practice, structured thinking, and competitive rating across leading coding platforms.",
    metrics: [
      { name: "LeetCode Problems", count: "250+", detail: "Focused on Trees, Dynamic Programming, and Graphs", icon: "Code2" },
      { name: "GeeksforGeeks Problems", count: "140+", detail: "Core Data Structures & Algorithmic Foundations", icon: "Terminal" },
      { name: "SkillRack Problems", count: "830+", detail: "Rank: 33448 | Daily Code Challenges", icon: "Zap" }
    ],
    highlights: [
      { label: "LeetCode Max Contest Rating", value: "1444", badge: "Contest Rating", color: "gold" },
      { label: "GeeksforGeeks Institute Rank", value: "85", badge: "College Rank", color: "blue" },
      { label: "SkillRack Global Rank", value: "33448", badge: "SkillRack Rank", color: "gold" }
    ]
  },

  experience: [
    {
      role: "Java Full Stack Intern",
      company: "RampeX Technologies",
      period: "June 2026",
      location: "On-site / Hybrid",
      description: "Developed a Student Notes Sharing Application using Java full-stack technologies, enabling users to upload, manage, and share academic notes efficiently.",
      workedOn: [
        "Developed a Student Notes Sharing Application using Java full-stack technologies",
        "Enabling users to upload, manage, and share academic notes efficiently",
        "Implemented backend services, database integration, and RESTful APIs",
        "Applied modern full-stack development practices to deliver a functional, scalable web application"
      ]
    }
  ],

  achievements: [
    {
      id: "paypal",
      title: "PayPal Career Academy 2.0",
      role: "Selected Candidate",
      organization: "PayPal",
      year: "2026",
      isFeatured: true,
      description: "Selected candidate for PayPal Career Academy 2.0 program focused on high-scale engineering excellence."
    },
    {
      id: "yuktha",
      title: "Yuktha Hackathon",
      role: "Runner-Up",
      organization: "PSG iTech",
      year: "2025",
      isFeatured: false,
      description: "Runner-Up at Yuktha Hackathon hosted by PSG iTech for innovative software system design."
    },
    {
      id: "mentor",
      title: "Student Mentor",
      role: "Peer Mentor",
      organization: "Sri Eshwar College of Engineering",
      year: "2025",
      isFeatured: false,
      description: "Mentored junior students in core Computer Science concepts, Java programming, and problem-solving techniques."
    }
  ],

  education: [
    {
      institution: "Sri Eshwar College of Engineering, Coimbatore",
      location: "Coimbatore",
      degree: "B.E. CSE [Cyber Security]",
      period: "2024 – 2028",
      cgpa: "8.30 (Current)",
      isCurrent: true,
      highlights: [
        "B.E. Computer Science and Engineering [Cyber Security]",
        "Current CGPA: 8.30",
        "Focus on Software Engineering, Data Structures, Algorithms, DBMS, and Networks"
      ]
    },
    {
      institution: "KMC Public School (CBSE), Tirupur",
      location: "Tirupur",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022 – 2024",
      score: "76.2%",
      isCurrent: false
    },
    {
      institution: "KMC Public School (CBSE), Tirupur",
      location: "Tirupur",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2021 – 2022",
      score: "74.5%",
      isCurrent: false
    }
  ],

  certifications: [
    {
      title: "Java Certification",
      issuer: "GeeksforGeeks (GFG)",
      year: "2026",
      icon: "Coffee"
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS",
      year: "2025",
      icon: "Cloud"
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      issuer: "Udemy",
      year: "2025",
      icon: "Code"
    },
    {
      title: "Linguaskill Business",
      issuer: "Cambridge University",
      detail: "B1 Level | Score: 159",
      year: "Certified",
      icon: "Award"
    }
  ],

  beyondCode: {
    headline: "Beyond Code & Leadership",
    subtext: "Effective software development relies as much on communication and teamwork as it does on algorithms.",
    capabilities: [
      {
        title: "Stage Presentations",
        desc: "Comfortable articulating complex technical architectures clearly before large audiences.",
        icon: "Mic"
      },
      {
        title: "Communicating Technical Ideas",
        desc: "Translating abstract system logic into intuitive documentation and actionable team discussions.",
        icon: "MessageSquare"
      },
      {
        title: "Peer Mentorship",
        desc: "Guiding fellow students through Java, data structures, and debugging practices.",
        icon: "Users"
      },
      {
        title: "Explaining Concepts Clearly",
        desc: "Breaking down complex algorithms into step-by-step logic for quick understanding.",
        icon: "Lightbulb"
      }
    ]
  }
};
