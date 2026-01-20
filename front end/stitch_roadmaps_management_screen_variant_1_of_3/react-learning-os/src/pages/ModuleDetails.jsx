import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ModuleDetails() {
    const navigate = useNavigate();
    const { moduleId } = useParams();
    const [importantTopicsExpanded, setImportantTopicsExpanded] = useState(true);

    return (
        <main className="flex-1 overflow-y-auto relative w-full scroll-smooth">
            <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-purple-50/20 to-transparent dark:from-indigo-900/20 dark:via-background-dark dark:to-background-dark pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto p-6 lg:p-8 relative z-10">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex text-sm font-medium text-slate-500 dark:text-slate-400 mb-10">
                    <ol className="inline-flex items-center space-x-2">
                        <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>Home</li>
                        <li><span className="material-icons-round text-sm opacity-50">chevron_right</span></li>
                        <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/learning-paths/bootcamp')}>Full Stack Path</li>
                        <li><span className="material-icons-round text-sm opacity-50">chevron_right</span></li>
                        <li className="text-slate-900 dark:text-white font-semibold">JavaScript Module</li>
                    </ol>
                </nav>

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-3">
                            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">JavaScript</h2>
                            <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wide border border-yellow-200 dark:border-yellow-700/50 shadow-sm">Core</span>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            The Language of the Web. Master interactivity, logic, and modern app development.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/lessons/dijkstra-algorithm')}
                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                    >
                        Start Learning
                        <span className="material-icons-round text-lg">arrow_forward</span>
                    </button>
                </div>

                <div className="grid grid-cols-12 gap-6 lg:gap-8 pb-12">
                    {/* Main Content */}
                    <div className="col-span-12 lg:col-span-8 space-y-8">
                        {/* Why Learn This */}
                        <div className="bg-gradient-to-br from-[#FFFBEB] to-white dark:from-yellow-950/20 dark:to-surface-dark border border-yellow-100 dark:border-yellow-900/30 p-8 rounded-3xl relative overflow-hidden shadow-soft group hover:shadow-lg transition-shadow">
                            <span className="material-icons-round absolute -right-8 -bottom-8 text-[10rem] text-yellow-500/10 dark:text-yellow-500/5 rotate-12 group-hover:rotate-6 transition-transform duration-500">lightbulb</span>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 text-yellow-700 dark:text-yellow-500 font-bold text-xs uppercase tracking-wider">
                                    <span className="material-icons-round text-lg">tips_and_updates</span>
                                    Why Learn This?
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">JavaScript is the engine of modern web development.</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Mastering it allows you to manipulate the DOM, handle asynchronous operations, and build full-stack applications. It's the only language that runs natively in the browser and has a massive ecosystem on the server side via Node.js.
                                </p>
                            </div>
                        </div>

                        {/* Curriculum Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">
                                    <span className="material-icons-round text-primary">format_list_bulleted</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Curriculum Details</h3>
                            </div>

                            <div className="space-y-4">
                                {/* Important Topics */}
                                <div className="bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <div
                                        className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                        onClick={() => setImportantTopicsExpanded(!importantTopicsExpanded)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 ring-1 ring-green-100 dark:ring-green-900/40">
                                                <span className="material-icons-round">priority_high</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white">Important Topics (Master These)</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Core concepts required for 90% of React jobs</p>
                                            </div>
                                        </div>
                                        <span className="material-icons-round text-slate-400">
                                            {importantTopicsExpanded ? 'expand_less' : 'expand_more'}
                                        </span>
                                    </div>
                                    {importantTopicsExpanded && (
                                        <div className="px-5 pb-5 pt-2 border-t border-slate-50 dark:border-slate-800/50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                                {[
                                                    'JSX & Components',
                                                    'Props & State Management',
                                                    'Hooks (useState, useEffect)',
                                                    'Component Lifecycle',
                                                    'React Router & Navigation',
                                                    'Context API'
                                                ].map((topic, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 py-1">
                                                        <span className="material-icons-round text-primary text-sm">check_circle</span>
                                                        {topic}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Topics You Can Skip */}
                                <div className="bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm opacity-90 hover:opacity-100 transition-all">
                                    <div className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 ring-1 ring-slate-100 dark:ring-slate-700">
                                                <span className="material-icons-round">low_priority</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 dark:text-white">Topics You Can Skip</h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Legacy features or niche use-cases</p>
                                            </div>
                                        </div>
                                        <span className="material-icons-round text-slate-400">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Join Student Group */}
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between hover:border-slate-200 dark:hover:border-slate-600 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                                        <span className="material-icons-round text-lg">play_circle_filled</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Join Student Group</h4>
                                </div>
                                <button className="w-full bg-slate-900 dark:bg-slate-700 text-white py-3.5 rounded-xl text-sm font-semibold mt-auto hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg shadow-slate-200 dark:shadow-none">
                                    Join Discord
                                </button>
                            </div>

                            {/* Syntax Reference */}
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                        <span className="material-icons-round text-lg">code</span>
                                    </div>
                                    <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wide">Syntax Reference</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <a className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                                        <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/20 rounded-xl mb-3 group-hover:scale-110 transition-transform flex items-center justify-center text-teal-600 dark:text-teal-400">
                                            <span className="material-icons-round">description</span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Official Docs</span>
                                    </a>
                                    <a className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group" href="#">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700/50 rounded-xl mb-3 group-hover:scale-110 transition-transform flex items-center justify-center text-slate-900 dark:text-white font-bold text-xs">
                                            MDN
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Web Docs</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Progress Card */}
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Your Progress</h3>
                                <span className="text-primary font-extrabold text-xl">25%</span>
                            </div>
                            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 mb-3 overflow-hidden">
                                <div className="bg-primary h-3 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]" style={{ width: '25%' }}></div>
                            </div>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 text-right">3 of 12 sub-modules completed</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="space-y-4">
                            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center hover:border-slate-200 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                    <span className="material-icons-round text-base">schedule</span>
                                    Est. Time
                                </div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">12 Hours</div>
                                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">Video & Practice</div>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center hover:border-slate-200 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                                    <span className="material-icons-round text-base">signal_cellular_alt</span>
                                    Difficulty
                                </div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">Intermediate</div>
                                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">Requires JS knowledge</div>
                            </div>
                        </div>

                        {/* Interview Prep */}
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 ring-1 ring-purple-100 dark:ring-purple-900/40">
                                    <span className="material-icons-round text-xl">help_outline</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Interview Prep</h3>
                            </div>
                            <div className="space-y-1">
                                {[
                                    'What is Hoisting?',
                                    "Explain 'this' keyword",
                                    'Closures explained?'
                                ].map((question, index) => (
                                    <div key={index}>
                                        <div className="group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                                                <span>{question}</span>
                                                <span className="material-icons-round text-slate-400 text-lg group-hover:text-primary transition-colors">chevron_right</span>
                                            </div>
                                        </div>
                                        {index < 2 && <div className="h-px bg-slate-100 dark:bg-slate-800 w-full my-2"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs font-medium text-slate-400 dark:text-slate-600 pb-8">
                    © 2024 Learning OS. All rights reserved.
                </div>
            </div>
        </main>
    );
}
