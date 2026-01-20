import { useNavigate } from 'react-router-dom';

export default function RoadmapPathSelection() {
    const navigate = useNavigate();

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* HEADER */}
            <div className="mb-12">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Comparison Mode
                </span>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                            Compare Learning Paths:
                            <br />
                            Full Stack Developer
                        </h1>
                        <p className="text-muted-light dark:text-muted-dark text-lg leading-relaxed">
                            Analyze different roadmaps based on curriculum depth, time
                            investment, and career alignment to find your perfect fit.
                        </p>
                    </div>

                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm font-medium">
                            <span className="material-icons-round text-base">visibility</span>
                            All Features
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 text-muted-light dark:text-muted-dark hover:text-primary rounded-lg text-sm font-medium">
                            <span className="material-icons-round text-base">difference</span>
                            Differences Only
                        </button>
                    </div>
                </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                {/* LABEL COLUMN */}
                <div className="hidden lg:block space-y-6 pt-32">
                    {[
                        "Modules Covered",
                        "Depth of Topics",
                        "Career Alignment",
                        "Industry Demand",
                        "Mentor Support",
                        "Projects",
                    ].map((label) => (
                        <div key={label} className="h-24 flex items-start pt-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                {label}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* SELF PACED CARD */}
                <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-6">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 block">Standard</span>
                        <h2 className="text-2xl font-bold mb-1">Self-Paced</h2>
                        <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
                            Flexible learning schedule
                        </p>
                        <div className="mb-4">
                            <span className="text-4xl font-bold">12</span>
                            <span className="text-lg text-muted-light dark:text-muted-dark ml-1">Months</span>
                        </div>
                        <button className="w-full py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 mb-6">
                            View Syllabus
                        </button>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6 flex-1">
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {['HTML/CSS', 'Basic JS', 'Git'].map(tech => (
                                <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-1/3"></div>
                            </div>
                            <span className="text-xs text-gray-500 mt-1 block">Foundation</span>
                        </div>

                        {/* Career */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="material-icons-round text-gray-400 text-base">work</span>
                            <span>Junior Frontend</span>
                        </div>

                        {/* Industry Demand */}
                        <div>
                            <span className="inline-block px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-xs font-medium">
                                Moderate
                            </span>
                        </div>

                        {/* Mentor Support */}
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="material-icons-round text-base">groups</span>
                            <span>Community Only</span>
                        </div>

                        {/* Projects */}
                        <div className="text-sm font-medium">
                            3 Personal Projects
                        </div>
                    </div>
                </div>

                {/* BOOTCAMP CARD (RECOMMENDED) */}
                <div className="relative bg-card-light dark:bg-card-dark rounded-2xl border-2 border-primary/50 p-6 flex flex-col shadow-xl scale-105 z-10">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-icons-round text-xs">star</span>
                        Recommended
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-primary mb-1">Bootcamp</h2>
                        <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
                            Intensive & Job-Ready
                        </p>
                        <div className="mb-4">
                            <span className="text-4xl font-bold text-primary">6</span>
                            <span className="text-lg text-muted-light dark:text-muted-dark ml-1">Months</span>
                        </div>
                        <button
                            onClick={() => navigate('/learning-paths/bootcamp')}
                            className="w-full py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-indigo-700 shadow-lg shadow-primary/25 mb-6"
                        >
                            Start Path
                        </button>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6 flex-1">
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Node.js', 'SQL', 'Deployment'].map(tech => (
                                <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-full"></div>
                            </div>
                            <span className="text-xs text-primary font-medium mt-1 block">Job-Ready</span>
                        </div>

                        {/* Career */}
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="material-icons-round text-primary text-base">code</span>
                            <span>Full Stack Developer</span>
                        </div>

                        {/* Industry Demand */}
                        <div>
                            <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">
                                ● Very High
                            </span>
                        </div>

                        {/* Mentor Support */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="material-icons-round text-primary text-base">person</span>
                            <span>Weekly 1-on-1</span>
                        </div>

                        {/* Projects */}
                        <div className="text-sm font-medium">
                            5 Real-World Apps
                        </div>
                    </div>
                </div>

                {/* SENIOR TRACK CARD */}
                <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-6">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 block">Expert</span>
                        <h2 className="text-2xl font-bold mb-1">Senior Track</h2>
                        <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
                            Deep dive mastery
                        </p>
                        <div className="mb-4">
                            <span className="text-4xl font-bold">18</span>
                            <span className="text-lg text-muted-light dark:text-muted-dark ml-1">Months</span>
                        </div>
                        <button className="w-full py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 mb-6">
                            View Syllabus
                        </button>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6 flex-1">
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {['System Design', 'Microservices', 'Cloud Arch', 'Security'].map(tech => (
                                <span key={tech} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-full"></div>
                            </div>
                            <span className="text-xs text-purple-600 dark:text-purple-400 mt-1 block">Mastery</span>
                        </div>

                        {/* Career */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="material-icons-round text-purple-500 text-base">architecture</span>
                            <span>Senior / Architect</span>
                        </div>

                        {/* Industry Demand */}
                        <div>
                            <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">
                                ● High
                            </span>
                        </div>

                        {/* Mentor Support */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="material-icons-round text-purple-500 text-base">school</span>
                            <span>On-Demand Experts</span>
                        </div>

                        {/* Projects */}
                        <div className="text-sm font-medium">
                            Large Scale System
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-light dark:text-muted-dark border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="flex items-center gap-2">
                    <span className="material-icons-round text-green-500">verified</span>
                    Curriculum verified by industry experts
                </div>
                <div className="hidden md:block w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                <div className="flex items-center gap-2">
                    <span className="material-icons-round">update</span>
                    Updated for 2024 Tech Stack
                </div>
            </div>
        </main>
    );
}
