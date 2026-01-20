import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function VideoLessonScreen() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
            <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left Column - Main Content */}
                <div className="xl:col-span-8 flex flex-col gap-6">
                    {/* Video Player */}
                    <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl group aspect-video">
                        <img
                            alt="Abstract Network Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmSdRbNuBpdrwI0b5pbgEfTer87M3uG36DKzOpzU3FPFjFYNlDQxff02vIc6Ob1pnT1Saho1kf-VFUrM705NYK80A077gbperKzrtsCvn_hu75rWMxZ0KfvLru5Ljbc2HD8eMY13OSozV-L1DANYw26-UZRqJeCariMz94RMUZjCth_5hvuot_7eQWphgazbpMtzeD66QubM2CUxG9mau-5o-qbqLkChW3vq_X4C1i_6LvKvjWQo18ZDNL9NDa3SajaK2bar6Dqew"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group-hover:bg-primary/90 group-hover:text-white text-white"
                        >
                            <span className="material-icons-outlined text-5xl pl-2">play_arrow</span>
                        </button>

                        {/* Video Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="h-1 bg-white/30 rounded-full mb-4 cursor-pointer overflow-hidden">
                                <div className="h-full bg-primary w-1/3 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-white">
                                <div className="flex items-center gap-4">
                                    <button><span className="material-icons-outlined">pause</span></button>
                                    <span className="text-sm font-medium">12:45 / 45:30</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm text-sm cursor-pointer hover:bg-black/60">
                                        <span className="material-icons-outlined text-sm">translate</span>
                                        English (US)
                                        <span className="material-icons-outlined text-sm">expand_more</span>
                                    </div>
                                    <button><span className="material-icons-outlined">closed_caption</span></button>
                                    <button><span className="material-icons-outlined">settings</span></button>
                                    <button><span className="material-icons-outlined">fullscreen</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Mastering Dijkstra's Algorithm</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Part 3 of 12 • Advanced Graph Theory</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-medium text-sm">
                                <span className="material-icons-outlined text-lg text-primary">schedule</span>
                                25:00
                                <span className="material-icons-outlined text-lg">play_arrow</span>
                            </div>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 text-primary font-semibold rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors">
                                <span className="material-icons-outlined">check_circle</span>
                                Mark Complete
                            </button>
                        </div>
                    </div>

                    {/* Transcript and Doubt Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Smart Transcript */}
                        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-[500px]">
                            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-outlined text-primary">auto_awesome</span>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Smart Transcript</h3>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-icons-outlined text-lg">search</span>
                                    </button>
                                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-icons-outlined text-lg">download</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-grow overflow-y-auto p-5 space-y-4 custom-scrollbar">
                                <div className="flex gap-3 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                                    <span className="text-xs font-semibold text-primary pt-1 w-10 shrink-0">12:30</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        So, the core idea here is that we initialize the distance to the source node as zero and all other nodes as infinity.
                                    </p>
                                </div>
                                <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border-l-4 border-amber-400">
                                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 pt-1 w-10 shrink-0">12:45</span>
                                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                                        Crucially, Dijkstra's algorithm only works on graphs with non-negative edge weights. This is a common interview pitfall.
                                    </p>
                                </div>
                                <div className="flex gap-3 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                                    <span className="text-xs font-semibold text-primary pt-1 w-10 shrink-0">13:10</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        We use a priority queue to efficiently fetch the next closest node. Let's visualize how the heap structure updates.
                                    </p>
                                </div>
                                <div className="flex gap-3 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                                    <span className="text-xs font-semibold text-primary pt-1 w-10 shrink-0">13:45</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        If you encounter negative weights, you would need to switch to Bellman-Ford, which sacrifices time complexity.
                                    </p>
                                </div>
                                <div className="flex gap-3 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 p-2 rounded-lg transition-colors">
                                    <span className="text-xs font-semibold text-primary pt-1 w-10 shrink-0">14:15</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        Let's look at the pseudo-code implementation step-by-step.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="relative">
                                    <input
                                        className="w-full pl-4 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                                        placeholder="Ask AI to clarify this section..."
                                        type="text"
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary-hover">
                                        <span className="material-icons-outlined transform rotate-[-45deg]">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Post the Doubt */}
                        <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-[500px]">
                            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-outlined text-pink-500">campaign</span>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Post the Doubt</h3>
                                </div>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">PUBLIC</span>
                            </div>
                            <div className="flex-grow p-5">
                                <textarea
                                    className="w-full h-full resize-none bg-transparent border-none focus:ring-0 p-0 text-slate-600 dark:text-slate-300 text-sm leading-relaxed placeholder-slate-400"
                                    placeholder="Type your question here. Markdown supported..."
                                ></textarea>
                            </div>
                            <div className="p-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="flex gap-2 text-slate-400">
                                    <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                        <span className="material-icons-outlined text-lg">format_bold</span>
                                    </button>
                                    <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                        <span className="material-icons-outlined text-lg">format_list_bulleted</span>
                                    </button>
                                    <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                        <span className="material-icons-outlined text-lg">image</span>
                                    </button>
                                </div>
                                <button className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/40 text-primary text-sm font-semibold rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors">
                                    Generate Summary
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Concept Check */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="flex-1 z-10">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Concept Check</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-lg">
                                Test your understanding of Greedy Approaches before moving to Dynamic Programming. Ensure you grasped the key pitfalls.
                            </p>
                            <div className="flex items-center gap-6">
                                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all">
                                    Start Daily Quiz
                                </button>
                                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                                    <span className="material-icons-outlined">local_fire_department</span>
                                    12 Day Streak!
                                </div>
                            </div>
                        </div>
                        <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-slate-100 dark:text-slate-700" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                                <circle className="text-green-500" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" strokeWidth="8"></circle>
                            </svg>
                            <span className="absolute font-bold text-lg text-slate-900 dark:text-white">75%</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="xl:col-span-4 flex flex-col gap-6">
                    {/* My Insights */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col flex-grow min-h-[500px] xl:h-auto">
                        <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-outlined text-purple-500">edit_note</span>
                                <h3 className="font-bold text-slate-900 dark:text-white">My Insights</h3>
                            </div>
                            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Saved</span>
                        </div>
                        <div className="flex-grow p-5 bg-slate-50/30 dark:bg-slate-900/30">
                            <textarea
                                className="w-full h-full min-h-[300px] resize-none bg-transparent border-none focus:ring-0 p-0 text-slate-600 dark:text-slate-300 text-base leading-relaxed placeholder-slate-400"
                                placeholder="Type your personal notes here. Markdown supported..."
                            ></textarea>
                        </div>
                        <div className="p-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <div className="flex gap-2 text-slate-400">
                                <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                    <span className="material-icons-outlined text-lg">format_bold</span>
                                </button>
                                <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                    <span className="material-icons-outlined text-lg">format_list_bulleted</span>
                                </button>
                                <button className="hover:text-slate-600 dark:hover:text-slate-200">
                                    <span className="material-icons-outlined text-lg">image</span>
                                </button>
                            </div>
                            <button className="px-4 py-2 bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-sm font-semibold rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors">
                                Generate Summary
                            </button>
                        </div>
                    </div>

                    {/* Suggested Project */}
                    <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col gap-4 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase mb-1">
                            <span className="material-icons-outlined text-base">auto_fix_high</span>
                            Suggested Project
                        </div>
                        <div className="flex justify-between items-start">
                            <span className="px-2.5 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-[10px] font-bold rounded-md uppercase tracking-wide">Intermediate</span>
                            <span className="material-icons-outlined text-slate-400">bookmark_border</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-2">Dynamic Weather Dashboard</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Apply your knowledge of API fetching and local state to build a dashboard that updates weather conditions in real-time based on user input.
                            </p>
                        </div>
                        <div className="space-y-2 mt-2">
                            <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="material-icons-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <span>Practice <strong className="text-slate-900 dark:text-slate-200">useEffect</strong> for data fetching</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="material-icons-outlined text-primary text-lg mt-0.5">check_circle</span>
                                <span>Manage complex state objects</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => navigate('/checkpoint')}
                                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition-all"
                            >
                                Start Building
                                <span className="material-icons-outlined">arrow_forward</span>
                            </button>
                            <p className="text-center text-[10px] text-slate-400 mt-3 italic">Estimated time: 2.5 hours</p>
                        </div>
                    </div>
                </div>
            </main>
            <div className="h-10"></div>
        </div>
    );
}
