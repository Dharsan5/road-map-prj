import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function LearningPathDashboard() {
    const navigate = useNavigate();
    const { pathId } = useParams();

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            {/* BREADCRUMB */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
                    <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
                    <span className="mx-2 text-gray-300 dark:text-gray-700">/</span>
                    <button onClick={() => navigate('/roadmaps')} className="hover:text-primary transition-colors">Roadmaps</button>
                    <span className="mx-2 text-gray-300 dark:text-gray-700">/</span>
                    <span className="text-gray-900 dark:text-white font-semibold">Full Stack Developer</span>
                </div>
                <div className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full self-start md:self-auto">
                    Last active: 2 hours ago
                </div>
            </div>

            <div className="space-y-10">
                {/* ACTIVE TRACK SECTION */}
                <section className="bg-white dark:bg-surface-dark rounded-[2rem] p-8 md:p-10 shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-primary/20 transition-all duration-500">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent-purple/5 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-transparent to-transparent dark:from-surface-dark pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide border border-primary/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Active Track
                            </div>

                            <div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 tracking-tight mb-4">
                                    Full Stack Developer
                                </h2>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-xl">
                                    Master the MERN stack and modern web architecture. A comprehensive guide to building scalable full-stack applications from scratch to deployment.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700/50 px-4 py-2 rounded-xl">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400">layers</span> Frontend + Backend
                                </span>
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700/50 px-4 py-2 rounded-xl">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400">signal_cellular_alt</span> Intermediate
                                </span>
                                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700/50 px-4 py-2 rounded-xl">
                                    <span className="material-symbols-outlined text-[18px] text-gray-400">construction</span> Project-Based
                                </span>
                            </div>
                        </div>

                        {/* PROGRESS CIRCLE */}
                        <div className="flex-shrink-0 relative flex items-center justify-center p-4">
                            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full"></div>
                            <svg className="w-48 h-48 transform -rotate-90 drop-shadow-lg relative z-10">
                                <circle className="text-gray-100 dark:text-gray-800" cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" strokeLinecap="round" strokeWidth="10"></circle>
                                <circle className="text-primary transition-all duration-1000 ease-out" cx="96" cy="96" fill="transparent" r="84" stroke="currentColor" strokeDasharray="527" strokeDashoffset="342" strokeLinecap="round" strokeWidth="10"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">35%</span>
                                <span className="text-xs uppercase font-bold text-text-muted-light dark:text-text-muted-dark tracking-widest mt-1">Complete</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LEARNING MODULES */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Modules</h3>
                            <span className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium hidden sm:inline-block">6 modules in this track</span>
                        </div>
                        <div className="flex bg-gray-100 dark:bg-surface-dark p-1 rounded-xl border border-gray-200 dark:border-gray-700">
                            <button className="p-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 shadow-sm rounded-lg transition-all">
                                <span className="material-symbols-outlined text-[20px]">grid_view</span>
                            </button>
                            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-[20px]">view_list</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* HTML Module - Completed */}
                        <article className="bg-white dark:bg-surface-dark rounded-[1.25rem] p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-xl border border-orange-100 dark:border-orange-500/20">
                                    HTML
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    Done
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">HTML5 Semantic Structure</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                Master the backbone of the web. Learn semantic tags, accessibility standards, and SEO best practices.
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700/50">
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-3 overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full w-full"></div>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">8/8 Lessons</span>
                                    <button className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group/btn font-semibold text-xs uppercase tracking-wide">
                                        Review <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* CSS Module - Completed */}
                        <article className="bg-white dark:bg-surface-dark rounded-[1.25rem] p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xl border border-blue-100 dark:border-blue-500/20">
                                    CSS
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                                    Done
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Advanced CSS & Layouts</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                Flexbox, Grid, Animations, and responsive design systems. Create beautiful layouts without frameworks.
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700/50">
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-3 overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full w-full"></div>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">12/12 Lessons</span>
                                    <button className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group/btn font-semibold text-xs uppercase tracking-wide">
                                        Review <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* JavaScript Module - In Progress */}
                        <article className="bg-white dark:bg-surface-dark rounded-[1.25rem] p-6 shadow-glow border-2 border-primary/20 dark:border-primary/20 hover:border-primary transition-all duration-300 group flex flex-col h-full ring-4 ring-primary/5">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center font-bold text-xl border border-yellow-100 dark:border-yellow-500/20">
                                    JS
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/10">
                                    <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                                    In Progress
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">JavaScript ES6+</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                The language of the web. Closures, Async/Await, DOM manipulation, and modern syntax patterns.
                            </p>
                            <div className="mt-auto pt-2">
                                <div className="flex justify-between text-xs font-bold text-primary mb-2">
                                    <span>60% COMPLETE</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-5 overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[60%] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                                </div>
                                <button className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group/btn">
                                    Continue Learning
                                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </article>

                        {/* React Module - Locked */}
                        <article className="bg-gray-50/80 dark:bg-surface-dark/40 rounded-[1.25rem] p-6 border border-gray-100 dark:border-gray-800 opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col h-full hover:bg-white dark:hover:bg-surface-dark hover:shadow-lg">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-gray-200/50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">code</span>
                                </div>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-800 border border-transparent">
                                    <span className="material-symbols-outlined text-[14px]">lock</span>
                                    Locked
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">React & State Management</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                Component lifecycle, Hooks (useState, useEffect), Context API, and Redux Toolkit.
                            </p>
                            <div className="mt-auto border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Next</span>
                            </div>
                        </article>

                        {/* Node.js Module - Locked */}
                        <article className="bg-gray-50/80 dark:bg-surface-dark/40 rounded-[1.25rem] p-6 border border-gray-100 dark:border-gray-800 opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col h-full hover:bg-white dark:hover:bg-surface-dark hover:shadow-lg">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-gray-200/50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">dns</span>
                                </div>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-800 border border-transparent">
                                    <span className="material-symbols-outlined text-[14px]">lock</span>
                                    Locked
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Node.js & Express</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                Server-side JavaScript, REST APIs, Middleware, and Authentication with JWT.
                            </p>
                            <div className="mt-auto border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Upcoming</span>
                            </div>
                        </article>

                        {/* Database Module - Locked */}
                        <article className="bg-gray-50/80 dark:bg-surface-dark/40 rounded-[1.25rem] p-6 border border-gray-100 dark:border-gray-800 opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col h-full hover:bg-white dark:hover:bg-surface-dark hover:shadow-lg">
                            <div className="flex justify-between items-start mb-5">
                                <div className="w-14 h-14 rounded-2xl bg-gray-200/50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">storage</span>
                                </div>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-800 border border-transparent">
                                    <span className="material-symbols-outlined text-[14px]">lock</span>
                                    Locked
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Database Design</h4>
                            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                SQL vs NoSQL, schema design, normalization, and aggregation pipelines in MongoDB.
                            </p>
                            <div className="mt-auto border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Upcoming</span>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="h-20"></div>
            </div>
        </main>
    );
}
