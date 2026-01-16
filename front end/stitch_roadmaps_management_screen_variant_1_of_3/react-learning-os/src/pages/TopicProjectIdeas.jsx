export default function TopicProjectIdeas() {
    const projects = [
        {
            id: "PROJ-042",
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

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <a href="#" className="hover:text-primary transition-colors">Knowledge Layer</a>
                    <span>/</span>
                    <a href="#" className="hover:text-primary transition-colors">Python Data Science</a>
                    <span>/</span>
                    <span className="text-gray-900 dark:text-white font-medium">Topic Projects</span>
                </nav>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
                        Topic Project Ideas
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                        Apply your knowledge with hands-on building. Select a project to begin applying the concepts from{" "}
                        <span className="text-primary font-semibold">Data Visualization</span>.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Filter Buttons */}
                        <div className="flex items-center gap-3 mb-6 flex-wrap">
                            <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg text-sm">
                                All Ideas
                            </button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors">
                                Beginner
                            </button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors">
                                Intermediate
                            </button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors">
                                Advanced
                            </button>
                            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm border border-gray-200 dark:border-slate-700 hover:border-primary transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">tune</span>
                                Filters
                            </button>
                            <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                                Showing 3 recommended projects
                            </span>
                        </div>

                        {/* Project Cards */}
                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border transition-all hover:shadow-lg ${project.recommended
                                            ? 'border-primary shadow-md'
                                            : 'border-gray-200 dark:border-slate-700'
                                        }`}
                                >
                                    {/* Recommended Badge */}
                                    {project.recommended && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                            RECOMMENDED
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4">
                                        {/* Left Side - Badge/Icon */}
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                                                ID: {project.id}
                                            </div>
                                            {project.badge && (
                                                <div className={`w-10 h-10 rounded-lg ${project.badgeColor === 'orange'
                                                        ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                    } flex items-center justify-center font-bold text-sm`}>
                                                    {project.badge}
                                                </div>
                                            )}
                                            {!project.badge && project.recommended && (
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">verified</span>
                                                </div>
                                            )}
                                            {!project.badge && !project.recommended && (
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-gray-400">info</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className="flex-1">
                                            {/* Title and Difficulty */}
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {project.title}
                                                </h3>
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ml-4 ${project.difficulty === 'Beginner'
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                        : project.difficulty === 'Intermediate'
                                                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                                    }`}>
                                                    {project.difficulty}
                                                </span>
                                            </div>

                                            {/* Problem Statement */}
                                            <div className="mb-4">
                                                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                                    PROBLEM
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {project.problem}
                                                </p>
                                            </div>

                                            {/* Concepts */}
                                            <div className="mb-4">
                                                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                                    CONCEPTS
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.concepts.map((concept, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
                                                        >
                                                            {concept}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Time and Collaboration */}
                                            <div className="flex items-center gap-6 mb-4 text-sm text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">schedule</span>
                                                    <span>{project.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">
                                                        {project.collaboration.includes('Group') ? 'groups' : project.collaboration.includes('Mentor') ? 'school' : 'person'}
                                                    </span>
                                                    <span>{project.collaboration}</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <button className={`w-full md:w-auto px-6 py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${project.difficulty === 'Advanced'
                                                    ? 'bg-white dark:bg-slate-700 text-primary border-2 border-primary hover:bg-primary hover:text-white'
                                                    : 'bg-primary text-white hover:bg-indigo-700 shadow-lg shadow-primary/30'
                                                }`}>
                                                {project.difficulty === 'Advanced' ? 'View Details' : 'Start Build'}
                                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 sticky top-6">
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-primary">school</span>
                                <h3 className="font-bold text-gray-900 dark:text-white">Current Module Context</h3>
                                <span className="ml-auto px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded">
                                    ACTIVE
                                </span>
                            </div>

                            {/* Module Info */}
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        Data Visualization
                                    </span>
                                    <span className="text-sm font-bold text-primary">75% Complete</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            {/* Unlocked Projects */}
                            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <span className="material-symbols-outlined text-lg">lock_open</span>
                                <span>3 projects unlocked based on your progress</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
