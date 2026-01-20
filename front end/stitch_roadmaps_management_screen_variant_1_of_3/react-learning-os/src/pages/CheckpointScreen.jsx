import { useNavigate } from 'react-router-dom';

export default function CheckpointScreen() {
    const navigate = useNavigate();

    return (
        <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[100px]"></div>
            </div>

            {/* Main Card */}
            <div className="w-full max-w-4xl bg-card-light dark:bg-card-dark rounded-3xl shadow-2xl shadow-indigo-100 dark:shadow-none border border-white/50 dark:border-slate-700 relative overflow-hidden transition-all duration-300">
                {/* Top Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                <div className="p-8 md:p-12 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-6 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-16 h-16 bg-indigo-50 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center text-primary dark:text-indigo-300">
                            <span className="material-icons-round text-3xl">construction</span>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Checkpoint: Theory needs Practice
                    </h1>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-10">
                        To solidify your full-stack skills, the system recommends building a real project before advancing to the next module. Applying knowledge is the only way to retain it.
                    </p>

                    {/* Recommended Projects Section */}
                    <div className="w-full mb-10">
                        <div className="flex items-center justify-center gap-2 mb-6 text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
                            <span className="material-icons-round text-base">verified</span>
                            Recommended Projects
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                            {/* Portfolio Site */}
                            <div className="group relative bg-surface-light dark:bg-slate-800/50 p-6 rounded-2xl border border-transparent hover:border-orange-200 dark:hover:border-orange-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-icons-round">web</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    Portfolio Site
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Showcase your skills with a responsive site. <br />
                                    <span className="font-semibold text-slate-700 dark:text-slate-300 mt-1 block text-xs">Focus: HTML/CSS mastery</span>
                                </p>
                            </div>

                            {/* Task Manager - Best Choice */}
                            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-indigo-500 dark:border-indigo-400 shadow-glow transform md:-translate-y-2 z-10 cursor-pointer">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                    Best Choice
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                                    <span className="material-icons-round">task_alt</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">Task Manager</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Dynamic app to manage tasks. <br />
                                    <span className="font-semibold text-indigo-600 dark:text-indigo-300 mt-1 block text-xs">Focus: JS & Backend logic</span>
                                </p>
                            </div>

                            {/* Auth System */}
                            <div className="group relative bg-surface-light dark:bg-slate-800/50 p-6 rounded-2xl border border-transparent hover:border-purple-200 dark:hover:border-purple-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-icons-round">security</span>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Auth System
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Secure login system with encryption. <br />
                                    <span className="font-semibold text-slate-700 dark:text-slate-300 mt-1 block text-xs">Focus: Security, DBs & Cookies</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <button
                            onClick={() => navigate('/project-ideas')}
                            className="group w-full md:w-auto px-8 py-4 bg-primary hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                        >
                            <span className="bg-white/20 rounded p-0.5">
                                <span className="material-icons-round text-base">code</span>
                            </span>
                            Start Building Now
                            <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button
                            onClick={() => navigate('/learning-paths/bootcamp')}
                            className="text-sm font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors py-2"
                        >
                            Skip & Continue Learning
                        </button>
                    </div>
                </div>

                {/* Pulse Indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
        </main>
    );
}
