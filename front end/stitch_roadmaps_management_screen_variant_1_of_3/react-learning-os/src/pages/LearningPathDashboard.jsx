import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Roadmap Level Visualization Component
function RoadmapLevelVisualization({ roadmap }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-soft mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                {roadmap.title}: Hierarchical Structure
            </h2>

            <div className="flex items-center justify-center gap-8 overflow-x-auto pb-4">
                {/* Root Level */}
                <div className="flex flex-col items-center">
                    <div className="px-6 py-4 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 text-white rounded-xl font-semibold text-center min-w-[140px] shadow-lg border-2 border-slate-700 dark:border-slate-500">
                        {roadmap.title}
                    </div>
                </div>

                {/* Connector */}
                <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-600"></div>

                {/* Level 1 Categories */}
                <div className="flex flex-col gap-6">
                    {roadmap.levels.map((level, idx) => (
                        <div key={idx} className="flex items-center gap-8">
                            {/* Category Box */}
                            <div className="flex items-center gap-4">
                                <div className="px-5 py-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg font-medium text-center min-w-[160px] border border-orange-200 dark:border-orange-800 shadow-sm">
                                    {level.category}
                                </div>

                                {/* Connector to sub-items */}
                                <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
                            </div>

                            {/* Level 2 Sub-items */}
                            <div className="flex flex-col gap-3">
                                {level.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-center gap-3">
                                        <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
                                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 shadow-sm min-w-[180px]">
                                            {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 flex justify-center gap-8 text-xs">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Root Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Level 1: Categories</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded"></div>
                    <span className="text-slate-600 dark:text-slate-400">Level 2: Components</span>
                </div>
            </div>
        </div>
    );
}

export default function LearningPathDashboard() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [viewMode, setViewMode] = React.useState('grid'); // 'grid' or 'list'

    // Sample learning path data - in real app, this would come from API based on id
    const learningPathData = {
        title: "Full Stack Developer",
        description: "Master the MERN stack and modern web architecture. A comprehensive guide to building scalable full-stack applications from scratch to deployment.",
        progress: 35,
        tags: ["Frontend + Backend", "Intermediate", "Project-Based"],
        lastActive: "2 hours ago",
        modules: [
            {
                icon: "HTML",
                title: "HTML5 Semantic Structure",
                description: "Master the backbone of the web. Learn semantic tags, accessibility standards, and SEO best practices.",
                status: "done",
                lessons: "8/8",
                progress: 100
            },
            {
                icon: "CSS",
                title: "Advanced CSS & Layouts",
                description: "Flexbox, Grid, Animations, and responsive design systems. Create beautiful layouts without frameworks.",
                status: "done",
                lessons: "12/12",
                progress: 100
            },
            {
                icon: "JS",
                title: "JavaScript ES6+",
                description: "The language of the web. Closures, Async/Await, DOM manipulation, and modern syntax patterns.",
                status: "in-progress",
                lessons: "18/30",
                progress: 60
            },
            {
                icon: "⚛️",
                title: "React & State Management",
                description: "Component lifecycle, Hooks (useState, useEffect), Context API, and Redux Toolkit.",
                status: "locked",
                lessons: "0/25"
            },
            {
                icon: "🟢",
                title: "Node.js & Express",
                description: "Server-side JavaScript, REST APIs, Middleware, and Authentication with JWT.",
                status: "locked",
                lessons: "0/20"
            },
            {
                icon: "🗄️",
                title: "Database Design",
                description: "SQL vs NoSQL, schema design, normalization, and aggregation pipelines in MongoDB.",
                status: "upcoming",
                upcoming: "Coming Next"
            }
        ]
    };

    // Hierarchical roadmap structure
    const roadmapStructure = {
        title: "Full Stack Developer",
        levels: [
            {
                category: "Frontend Path",
                items: [
                    "HTML5 Semantic Structure",
                    "Advanced CSS & Layouts",
                    "JavaScript ES6+",
                    "React & State Management",
                    "Modern Build Tools"
                ]
            },
            {
                category: "Backend Path",
                items: [
                    "Node.js & Express",
                    "RESTful API Design",
                    "Database Design",
                    "Authentication & Security",
                    "Deployment & DevOps"
                ]
            }
        ]
    };

    return (
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm mb-6">
                <button
                    onClick={() => navigate('/')}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                    Home
                </button>
                <span className="text-slate-400 dark:text-slate-500">/</span>
                <button
                    onClick={() => navigate('/roadmaps')}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                    Roadmaps
                </button>
                <span className="text-slate-400 dark:text-slate-500">/</span>
                <span className="text-slate-900 dark:text-white font-medium">{learningPathData.title}</span>
                <span className="ml-auto text-slate-500 dark:text-slate-400">Last active: {learningPathData.lastActive}</span>
            </nav>

            {/* Hierarchical Roadmap Structure */}
            <RoadmapLevelVisualization roadmap={roadmapStructure} />

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-soft">
                {/* Header with Progress */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">
                                ACTIVE TRACK
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                            {learningPathData.title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
                            {learningPathData.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-sm">
                                <span className="material-icons-round text-base text-slate-600 dark:text-slate-400">layers</span>
                                <span className="text-slate-700 dark:text-slate-300">{learningPathData.tags[0]}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-sm">
                                <span className="material-icons-round text-base text-slate-600 dark:text-slate-400">bar_chart</span>
                                <span className="text-slate-700 dark:text-slate-300">{learningPathData.tags[1]}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-sm">
                                <span className="material-icons-round text-base text-slate-600 dark:text-slate-400">work</span>
                                <span className="text-slate-700 dark:text-slate-300">{learningPathData.tags[2]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Circular Progress */}
                    <div className="relative w-40 h-40 shrink-0">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                className="text-slate-100 dark:text-slate-700"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                className="text-blue-500"
                                strokeDasharray={`${learningPathData.progress * 2.51} 251`}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">{learningPathData.progress}%</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Complete</span>
                        </div>
                    </div>
                </div>

                {/* Learning Modules Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Learning Modules</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{learningPathData.modules.length} modules in this track</p>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-600 shadow-sm' : 'hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                        >
                            <span className="material-icons-round text-slate-700 dark:text-slate-300">grid_view</span>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-slate-600 shadow-sm' : 'hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                        >
                            <span className="material-icons-round text-slate-700 dark:text-slate-300">view_list</span>
                        </button>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                    {learningPathData.modules.map((module, index) => (
                        <div
                            key={index}
                            className={`group relative bg-slate-50 dark:bg-slate-700/30 rounded-xl p-5 border-2 transition-all duration-300 ${module.status === 'locked'
                                ? 'border-slate-200 dark:border-slate-700 opacity-60'
                                : 'border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg cursor-pointer'
                                }`}
                        >
                            {/* Status Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${module.icon === 'HTML' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                                    module.icon === 'CSS' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                                        module.icon === 'JS' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                                            'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                                    }`}>
                                    {module.icon}
                                </div>
                                {module.status === 'done' && (
                                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-semibold">
                                        <span className="material-icons-round text-sm">check_circle</span>
                                        DONE
                                    </div>
                                )}
                                {module.status === 'in-progress' && (
                                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                                        <span className="material-icons-round text-sm">pending</span>
                                        IN PROGRESS
                                    </div>
                                )}
                                {module.status === 'locked' && (
                                    <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-semibold">
                                        <span className="material-icons-round text-sm">lock</span>
                                        LOCKED
                                    </div>
                                )}
                            </div>

                            {/* Module Info */}
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                {module.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                {module.description}
                            </p>

                            {/* Progress Bar */}
                            {module.status !== 'locked' && module.status !== 'upcoming' && (
                                <div className="mb-4">
                                    <div className="flex items-center justify-between text-xs mb-2">
                                        <span className="text-slate-600 dark:text-slate-400">
                                            {module.lessons} LESSONS
                                        </span>
                                        {module.progress !== undefined && (
                                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                                {module.progress}% COMPLETE
                                            </span>
                                        )}
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all ${module.status === 'done' ? 'bg-green-500' : 'bg-blue-500'
                                                }`}
                                            style={{ width: `${module.progress || 0}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Action Button */}
                            {module.status === 'done' && (
                                <button className="w-full py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-500 transition-colors flex items-center justify-center gap-2">
                                    REVIEW
                                    <span className="material-icons-round text-base">arrow_forward</span>
                                </button>
                            )}
                            {module.status === 'in-progress' && (
                                <button className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center gap-2">
                                    Continue Learning
                                    <span className="material-icons-round text-base">arrow_forward</span>
                                </button>
                            )}
                            {module.status === 'upcoming' && (
                                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                                    {module.upcoming}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
