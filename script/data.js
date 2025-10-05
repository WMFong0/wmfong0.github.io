// Skills Data
const skillset = [
    {
        title: "Java",
        skillItems: ["Basics & Fundamentals", "Functions", "OOP & Classes", "Exception Handling", "GUI Development"],
        icons: ["fab fa-java", "fa fa-wrench", "fas fa-cube", "fas fa-bug", "fas fa-window-maximize"]
    },
    {
        title: "Python",
        skillItems: ["Basics & Fundamentals", "API Handling", "CSV Handling", "Streamlit", "Pandas"],
        icons: ["fab fa-python", "fas fa-code", "fas fa-file-code", "far fa-window-maximize", "fas fa-table"]
    },
    {
        title: "C++",
        skillItems: ["Basics & Fundamentals", "Functions", "OOP & Classes", "Data Structures", "Dynamic Programming"],
        icons: ["fas fa-cogs", "fa fa-wrench", "fas fa-cube", "fas fa-sitemap", "fas fa-brain"]
    },
    {
        title: "Web Development",
        skillItems: ["React (Basics)", "HTML5", "CSS3", "JavaScript"],
        icons: ["fab fa-react", "fab fa-html5", "fab fa-css3-alt", "fab fa-js"]
    }
];

// Projects Data
/*
    title: string only,
    description: string only,
    skillset: array only,
    link: string only,
        "https://github.com/WMFong0/Python-Weather-Report-System"
        "../Little_Clock.html" for same directory files
        "#" for no link can be provided
    category: lowercased string or array
        enum: [python, c++, web] # can be extended through filtering function
*/
const projectsData = [
    {
        title: "Python Weather Report System Legacy (Without GUI)",
        description: "An application that integrates real-time weather APIs to fetch and display accurate weather forecasts.",
        skillset: ["Python", "API Handling", "CSV Handling"],
        link: "https://github.com/WMFong0/Python-Weather-Report-System-Legacy",
        category: "python"
    },
    {
        title: "Python Weather Report System Web Application",
        description: "An application that integrates real-time weather APIs to display accurate forecasts, featuring an interactive map for selecting weather stations.",
        skillset: ["Python", "API Handling", "CSV Handling", "Streamlit", "Foilum"],
        link: "https://github.com/WMFong0/Python-Weather-Report-System-Web-Application",
        category: "python"
    },
    {
        title: "Collatz Conjecture Finder",
        description: "A program that computes and visualizes Collatz conjecture sequences, enabling exploration of numbers with extended steps.",
        skillset: ["Python", "Algorithm"],
        link: "https://github.com/WMFong0/Collatz-conjecture-Simple-Finder-Program",
        category: "python"
    },
    {
        title: "Email Slicer",
        description: "A utility that extracts usernames and domains from email addresses and provides detailed insights into email providers.",
        skillset: ["Python", "String Manipulation", "File Handling"],
        link: "https://github.com/WMFong0/Python-Email-Slicer",
        category: "python"
    },
    {
        title: "Little Clock Legacy (Streamlit Version)",
        description: "An interactive Streamlit-based web application for real-time clock functionality with a sleek, user-friendly interface.",
        skillset: ["Python", "Streamlit"],
        link: "https://github.com/WMFong0/Little_Clock_Legacy",
        category: "python"
    },
    {
        title: "Little Clock (HTML Version)",
        description: "An HTML-based web Clock. Able to include more functionality",
        skillset: ["Web", "CSS", "JavaScript"],
        link: "https://github.com/WMFong0/HTML_Little_Clock",
        category: "web"
    },
    {
        title: "Library Management System(Undergoing Revamp)",
        description: "A C++ application for managing library resources and transactions.",
        skillset: ["C++", "Data Structures(Hashing)", "Dynamic Programming", "OOP"],
        link: "https://github.com/WMFong0/Library-Management-System",
        category: "c++" 
    }
];

// Education Data
const educationData = [
    {
        institution: "The Hong Kong University of Science and Technology",
        degree: "Bachelor of Engineering - BEng, Computer Science",
        period: "Sep 2024 - Aug 2027",
        activities: [],
        achievements: []
    },
    {
        institution: "PolyU Hong Kong Community College",
        degree: "Associate's degree, Statistics And Data Science",
        period: "Sep 2022 - Aug 2024",
        activities: [
            "Workshop on Excel Data Organizing",
            "SAS Enhancement Workshop",
            "Introduction to R Programming Workshop",
            "Power BI Workshop",
            "Python and Machine Learning Workshop",
            "Investment Workshop"
        ],
        achievements: [
            "Graduated with Distinction",
            "Outstanding Performance Scholarship",
            "Outstanding Student Scholarship",
            "HKCC Director's List 2023",
            "CPCE Dean's List"
        ]
    }
];
