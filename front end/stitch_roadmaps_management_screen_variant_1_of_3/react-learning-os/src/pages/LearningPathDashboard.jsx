import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { modules } from '../data/mockData';

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

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Done
                    </span>
                );
            case 'in-progress':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/10">
                        <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                        In Progress
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-800 border border-transparent">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        Locked
                    </span>
                );
        }
    };

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
                            <span className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium hidden sm:inline-block">{modules.length} modules in this track</span>
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
                        {modules.map((module) => (
                            <article
                                key={module.id}
                                className={`rounded-[1.25rem] p-6 shadow-md border transition-all duration-300 group flex flex-col h-full relative overflow-hidden cursor-pointer
                                ${module.status === 'in-progress'
                                        ? 'bg-white dark:bg-surface-dark shadow-glow border-2 border-primary/20 dark:border-primary/20 hover:border-primary ring-4 ring-primary/5'
                                        : module.status === 'completed'
                                            ? 'bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 hover:shadow-xl hover:translate-y-[-4px]'
                                            : 'bg-gray-50/80 dark:bg-surface-dark/40 border-gray-100 dark:border-gray-800 opacity-80 hover:opacity-100 hover:bg-white dark:hover:bg-surface-dark hover:shadow-lg'
                                    }`}
                                onClick={() => navigate(`/modules/${module.id}`)}
                            >
                                <div className="flex justify-between items-start mb-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl border
                                        ${module.status === 'in-progress' || module.status === 'completed'
                                            ? `bg-${module.color}-50 dark:bg-${module.color}-900/20 text-${module.color}-600 dark:text-${module.color}-400 border-${module.color}-100 dark:border-${module.color}-500/20`
                                            : 'bg-gray-200/50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 border-transparent'
                                        }`}>
                                        {module.shortTitle.length <= 4 ? module.shortTitle : <span className="material-symbols-outlined text-[24px]">{module.icon}</span>}
                                    </div>
                                    {getStatusBadge(module.status)}
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    {module.title}
                                </h4>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6 flex-1">
                                    {module.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700/50">
                                    {module.status !== 'locked' ? (
                                        <>
                                            {module.status === 'in-progress' && (
                                                <div className="flex justify-between text-xs font-bold text-primary mb-2">
                                                    <span>{module.progress}% COMPLETE</span>
                                                </div>
                                            )}
                                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full mb-3 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full w-[${module.progress}%] ${module.status === 'completed' ? 'bg-green-500' : 'bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)]'}`}
                                                    style={{ width: `${module.progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between items-center text-sm font-medium">
                                                <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">{module.completedLessons}/{module.totalLessons} Lessons</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/modules/${module.id}`);
                                                    }}
                                                    className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group/btn font-semibold text-xs uppercase tracking-wide"
                                                >
                                                    {module.status === 'completed' ? 'Review' : 'Continue'} <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Upcoming</span>
                                            <span className="material-symbols-outlined text-gray-300">lock</span>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="h-20"></div>
            </div>
        </main>
    );
}
