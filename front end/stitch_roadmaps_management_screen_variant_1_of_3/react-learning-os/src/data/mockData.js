export const modules = [
    {
        id: "html",
        title: "HTML5 Semantic Structure",
        shortTitle: "HTML",
        status: "completed",
        progress: 100,
        totalLessons: 8,
        completedLessons: 8,
        icon: "html",
        color: "orange",
        description: "Master the backbone of the web. Learn semantic tags, accessibility standards, and SEO best practices.",
        whyLearn: "HTML is the foundation of every website. Understanding semantic HTML is crucial for accessibility and SEO.",
        level: "Beginner",
        estimatedTime: "5 Hours",
        curriculum: [
            { title: "HTML Basics", completed: true },
            { title: "Semantic Elements", completed: true },
            { title: "Forms and Inputs", completed: true },
            { title: "Accessibility (A11y)", completed: true },
            { title: "SEO Fundamentals", completed: true }
        ],
        project: "Personal Portfolio Structure"
    },
    {
        id: "css",
        title: "Advanced CSS & Layouts",
        shortTitle: "CSS",
        status: "completed",
        progress: 100,
        totalLessons: 12,
        completedLessons: 12,
        icon: "css",
        color: "blue",
        description: "Flexbox, Grid, Animations, and responsive design systems. Create beautiful layouts without frameworks.",
        whyLearn: "CSS brings life to the web. Mastering layouts and responsiveness is key to modern frontend development.",
        level: "Intermediate",
        estimatedTime: "10 Hours",
        curriculum: [
            { title: "Box Model & Selectors", completed: true },
            { title: "Flexbox Mastery", completed: true },
            { title: "Grid Layouts", completed: true },
            { title: "Responsive Design", completed: true },
            { title: "Animations & Transitions", completed: true }
        ],
        project: "Responsive Landing Page"
    },
    {
        id: "javascript",
        title: "JavaScript ES6+",
        shortTitle: "JS",
        status: "in-progress",
        progress: 60,
        totalLessons: 20,
        completedLessons: 12,
        icon: "javascript",
        color: "yellow",
        description: "The language of the web. Closures, Async/Await, DOM manipulation, and modern syntax patterns.",
        whyLearn: "JavaScript is the engine of modern web development. It allows you to build interactive and dynamic applications.",
        level: "Intermediate",
        estimatedTime: "25 Hours",
        curriculum: [
            { title: "Variables & Data Types", completed: true },
            { title: "Functions & Scope", completed: true },
            { title: "DOM Manipulation", completed: true },
            { title: "ES6+ Features", completed: true },
            { title: "Async/Await & Promises", completed: false },
            { title: "Event Loop", completed: false }
        ],
        interviewQuestions: [
            "What is Hoisting?",
            "Explain 'this' keyword",
            "Closures explained?",
            "Event Bubbling vs Capturing"
        ],
        project: "Interactive Todo List"
    },
    {
        id: "react",
        title: "React & State Management",
        shortTitle: "React",
        status: "locked",
        progress: 0,
        totalLessons: 18,
        completedLessons: 0,
        icon: "code",
        color: "cyan",
        description: "Component lifecycle, Hooks (useState, useEffect), Context API, and Redux Toolkit.",
        whyLearn: "React is the most popular frontend library. It changes how you think about UI as components.",
        level: "Advanced",
        estimatedTime: "30 Hours",
        curriculum: [
            { title: "JSX & Components", completed: false },
            { title: "Props & State", completed: false },
            { title: "Hooks (useState, useEffect)", completed: false },
            { title: "Context API", completed: false },
            { title: "Redux Toolkit", completed: false }
        ],
        project: "E-commerce Dashboard"
    },
    {
        id: "node",
        title: "Node.js & Express",
        shortTitle: "Node",
        status: "locked",
        progress: 0,
        totalLessons: 15,
        completedLessons: 0,
        icon: "dns",
        color: "green",
        description: "Server-side JavaScript, REST APIs, Middleware, and Authentication with JWT.",
        whyLearn: "Node.js allows you to use JavaScript on the server. Build scalable backends and APIs.",
        level: "Advanced",
        estimatedTime: "20 Hours",
        curriculum: [
            { title: "Node.js Basics", completed: false },
            { title: "Express Framework", completed: false },
            { title: "REST API Design", completed: false },
            { title: "Authentication (JWT)", completed: false },
            { title: "Middleware", completed: false }
        ],
        project: "RESTful API for Blog"
    },
    {
        id: "database",
        title: "Database Design",
        shortTitle: "DB",
        status: "locked",
        progress: 0,
        totalLessons: 10,
        completedLessons: 0,
        icon: "storage",
        color: "purple",
        description: "SQL vs NoSQL, schema design, normalization, and aggregation pipelines in MongoDB.",
        whyLearn: "Data persistence is crucial. Learn how to store, structure, and retrieve data efficiently.",
        level: "Advanced",
        estimatedTime: "15 Hours",
        curriculum: [
            { title: "SQL vs NoSQL", completed: false },
            { title: "MongoDB Basics", completed: false },
            { title: "Schema Design", completed: false },
            { title: "Aggregation Pipelines", completed: false }
        ],
        project: "Data Dashboard"
    }
];

export const events = [
    {
        id: "evt-001",
        title: "Future of Learning: AI Integration Summit 2024",
        category: "Summit",
        date: "Oct 24, 2024",
        time: "09:00 AM EST",
        location: "Online",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYeXjw703MgKy3MDti6HenoycVrGTFysM9tB_3xb2xuGAHoGGONkgB-UHfFFqEhJFR5wlmgiQFqLhH4RQDESOHziucxYOwpnqQNveW_5L-a7C-Kdh_xAnyyMi_KJ8vB8zohtoUEQlcMUBmaNY6myIQBPG2HxO604XfUEN9OB3yhnbfB7luHQuXh4t1_pRp0xoKcLnHspUHYXbpbFd_JMMkp__RKx9asjWnBmiFOpYXS84dpSn4DF0eFdPU1KzP8J3_yAhwVfgNJNI",
        description: "Join industry leaders as we explore the intersection of artificial intelligence and cognitive learning systems. We will discuss the ethical implications, technical challenges, and the future landscape of education.",
        featured: true,
        attendees: 1200,
        host: "TechEducation Global",
        tags: ["AI", "Education", "Future"]
    },
    {
        id: "evt-002",
        title: "Design Systems in 2025",
        category: "Workshop",
        date: "Nov 12, 2024",
        time: "02:00 PM EST",
        location: "NYC, USA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-mGzkjQl8S3KaXEs1NaZFhqd2Lk6hZlBGfJbKNXoC17Tesz1oh02YXqC7wivXiKkZAnGsk08pgi4JX6tEYnnBv1Myfi5HmTZ7irwA5clyRcS9qjyUD76ssEC-zBBdHDbO7T1gul-LKtZAK6IKIbwiq8Vchz_FtTATdoIi7qm2Vz3dFHp8Rrexl8LQPNgcEJp8_T99XgJgyrkAa5hccv0jEZoNcSdbXVGrdOxQhQKfvTWN25q9Hy8g_zr4hHYnRYlMhXuyJXNNuqo",
        description: "A hands-on workshop dissecting the anatomy of modern scalable UI kits. Learn how to build and maintain design systems that scale with your product.",
        featured: false,
        attendees: 45,
        host: "Design Matters",
        tags: ["Design", "UI/UX", "Workshop"]
    },
    {
        id: "evt-003",
        title: "Cognitive Load & UI",
        category: "Podcast",
        date: "Tomorrow",
        time: "4:00 PM EST",
        location: "Live Stream",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALJdX3g1a0apMSMO40oHraXSaHQAQa5upnKZq09FUfq5C_gMMOufaxEE6XdUQLUDYqrGc85Eb2lbH5nPtWU1bG4hpz2Ocn6XafxZjuyPYXqrkUdbtD6sNjhKnucs-6W4lYDEkAGCWr3qaE0Shj0d5Dwzc_HAi5C3IZ8OTRdwFyESBoH8bcOiL32gqgFSs_mMambBoz6BIzmXoGy006tzvG5It1MrtQ9GilTJtMvxzS-s6IQEq5ZTavbMjbDseEnnfJJNw4BKboRYc",
        description: "Episode 4: Discussing how to reduce mental strain through better interface choices. Join Sarah Chen as she breaks down complex UI patterns.",
        featured: false,
        attendees: 350,
        host: "Sarah Chen",
        tags: ["UI", "Psychology", "Podcast"]
    }
];

export const projects = [
    {
        id: "PROJ-041",
        title: "Stock Market Visualizer",
        difficulty: "Beginner",
        badge: "RK",
        badgeColor: "orange",
        problem: "New investors find it hard to visualize price trends over time from raw data tables. They need clear visual indicators.",
        concepts: ["Matplotlib", "Line Charts", "CSV Parsing"],
        time: "2-3 Hours",
        collaboration: "Solo",
        recommended: false
    },
    {
        id: "PROJ-042",
        title: "Sentiment Analysis Dashboard",
        difficulty: "Intermediate",
        badge: null,
        problem: "Companies struggle to track live brand sentiment on social media manually. They need automation to react faster.",
        concepts: ["Plotly Dash", "NLP Basics", "Real-time Data"],
        time: "4-6 Hours",
        collaboration: "Group / Solo",
        recommended: true
    },
    {
        id: "PROJ-043",
        title: "Interactive Map of Global Energy",
        difficulty: "Advanced",
        badge: null,
        problem: "Complex geospatial datasets are difficult to interpret without interactive visualization layers.",
        concepts: ["Folium", "GeoJSON", "Big Data"],
        time: "10+ Hours",
        collaboration: "Mentor-guided",
        recommended: false
    }
];
