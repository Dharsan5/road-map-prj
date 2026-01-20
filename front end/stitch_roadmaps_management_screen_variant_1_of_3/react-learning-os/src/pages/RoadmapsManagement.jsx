import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoadmapsManagement() {
    const navigate = useNavigate();

    return (
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Roadmaps Management</h1>
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800">v2.4 Stable</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base leading-relaxed">
                        Manage system-recommended neural paths or architect custom trajectories using the builder. Optimize your learning flow with AI-driven insights.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                        <span className="material-icons-round text-base text-gray-500 dark:text-gray-400">history</span>
                        History
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                        <span className="material-icons-round text-base text-gray-500 dark:text-gray-400">upload_file</span>
                        Import
                    </button>
                </div>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                    {
                        title: "Full Stack Neural Architect",
                        description: "Master the complete stack from React frontends to Python-based AI backends. Includes system design modules.",
                        duration: "6 Months",
                        level: "Advanced",
                        icon: "all_inclusive",
                        badge: "Popular",
                        status: "Live: System Design Workshop",
                        statusTime: "Starts in 2h 15m"
                    },
                    {
                        title: "DevOps & Cloud Native",
                        description: "Infrastructure as code. Kubernetes mastery, CI/CD pipelines for large scale distributed systems.",
                        duration: "4 Months",
                        level: "Intermediate",
                        icon: "cloud",
                        languages: "EN, DE"
                    },
                    {
                        title: "Machine Learning Engineering",
                        description: "End-to-end ML pipelines, model deployment, MLOps best practices, and production-grade systems.",
                        duration: "5 Months",
                        level: "Advanced",
                        icon: "psychology",
                        badge: "Featured"
                    },
                    {
                        title: "Frontend Mastery",
                        description: "React, Vue, Next.js deep dive with performance optimization, testing, and modern tooling.",
                        duration: "3 Months",
                        level: "Intermediate",
                        icon: "code"
                    }
                ].map((roadmap, index) => (
                    <article
                        key={index}
                        onClick={() => navigate(`/roadmaps/fullstack-${index + 1}`)}
                        className="group relative flex flex-col sm:flex-row bg-card-light dark:bg-card-dark rounded-2xl p-5 gap-6 border border-gray-100 dark:border-slate-700 shadow-soft hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-full sm:w-36 h-36 shrink-0 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                            {roadmap.badge && (
                                <div className="absolute top-2 left-2 z-10">
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 rounded">{roadmap.badge}</span>
                                </div>
                            )}
                            <span className="material-icons-round text-5xl text-blue-400/80 relative z-0">{roadmap.icon}</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{roadmap.title}</h3>
                                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                        <span className="material-icons-round">more_horiz</span>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                                    {roadmap.description}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons-round text-base text-blue-500">schedule</span>
                                        <span>{roadmap.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons-round text-base text-purple-500">bar_chart</span>
                                        <span>{roadmap.level}</span>
                                    </div>
                                    {roadmap.languages && (
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-icons-round text-base text-teal-500">translate</span>
                                            <span>{roadmap.languages}</span>
                                        </div>
                                    )}
                                </div>
                                {roadmap.status && (
                                    <div className="pt-3 border-t border-gray-100 dark:border-slate-700/50 flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                            </span>
                                            {roadmap.status}
                                        </div>
                                        <span className="font-mono text-gray-400">{roadmap.statusTime}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
