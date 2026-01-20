import { useState } from 'react';

export default function DailyTechFeed() {
    const [activeView, setActiveView] = useState('grid');
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <header className="mb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">
                            <span className="material-icons-round text-base">calendar_today</span>
                            October 24, 2024
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Daily Tech Feed</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
                            Good Morning, Alex. Here is your synthesized intelligence briefing.
                        </p>
                    </div>
                    <div className="w-full md:w-auto bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-[280px]">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Synthesis Progress</span>
                            <span className="text-xs font-semibold text-primary">2/4 Reviewed</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Filters */}
            <section className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors whitespace-nowrap ${activeFilter === 'all' ? 'bg-primary text-white shadow-indigo-500/20 hover:bg-indigo-700' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                        <span className="material-icons-round text-lg">public</span>
                        All Updates
                    </button>
                    <button
                        onClick={() => setActiveFilter('role')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === 'role' ? 'bg-primary text-white shadow-indigo-500/20 hover:bg-indigo-700' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                        <span className="material-icons-round text-lg text-slate-400">verified_user</span>
                        Role Specific
                    </button>
                    <button
                        onClick={() => setActiveFilter('saved')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === 'saved' ? 'bg-primary text-white shadow-indigo-500/20 hover:bg-indigo-700' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                        <span className="material-icons-round text-lg text-slate-400">bookmark</span>
                        Saved Items
                    </button>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="uppercase tracking-wider">View:</span>
                    <div className="flex bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-1">
                        <button
                            onClick={() => setActiveView('grid')}
                            className={`p-1 rounded ${activeView === 'grid' ? 'bg-slate-100 dark:bg-slate-700 text-primary' : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        >
                            <span className="material-icons-round text-lg">grid_view</span>
                        </button>
                        <button
                            onClick={() => setActiveView('list')}
                            className={`p-1 rounded ${activeView === 'list' ? 'bg-slate-100 dark:bg-slate-700 text-primary' : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                        >
                            <span className="material-icons-round text-lg">view_list</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Article 1 - High Impact */}
                <article className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500 rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-4 pl-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">#RC-19-001</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">
                                <span className="material-icons-round text-sm">bolt</span> High Impact
                            </span>
                        </div>
                        <span className="material-icons-round text-slate-400 text-lg">warning</span>
                    </div>
                    <div className="pl-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">React 19 Release Candidates</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            New concurrency features and automatic memoization are now available. Several legacy hooks are deprecated in this RC version.
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
                            <div className="flex items-center gap-1 font-medium">
                                <span className="material-icons-round text-sm">article</span> React Blog
                            </div>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>2 hours ago</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-indigo-50 dark:bg-indigo-900/30 text-primary px-2 py-0.5 rounded font-medium">Frontend</span>
                        </div>
                        <div className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-4 border border-red-100 dark:border-red-900/30 mb-6">
                            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide block mb-1">Why It Matters</span>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                This update deprecates legacy hooks used extensively in <span className="underline decoration-slate-400 underline-offset-2">Project Alpha</span>. An immediate compatibility check is recommended.
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Role:</span>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Sen. Dev</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Read Later</button>
                                <button className="bg-primary hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                                    Update Skill <span className="material-icons-round text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 2 - Critical */}
                <article className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600 rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-4 pl-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">#SEC-24-892</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">
                                <span className="material-icons-round text-sm">gpp_maybe</span> Critical
                            </span>
                        </div>
                        <span className="material-icons-round text-slate-400 text-lg">save</span>
                    </div>
                    <div className="pl-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">Global Cloud Credentials Leak</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            A major provider has identified a leak affecting cached credentials in edge nodes. Rotation is mandatory for all service accounts.
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
                            <div className="flex items-center gap-1 font-medium">
                                <span className="material-icons-round text-sm">source</span> TechCrunch
                            </div>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>45 mins ago</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded font-medium">DevOps</span>
                        </div>
                        <div className="bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-4 border border-purple-100 dark:border-purple-900/30 mb-6">
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide block mb-1">Why It Matters</span>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Requires immediate audit for all production environments. Automated rotation scripts may need manual override.
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Role:</span>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Admin</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="bg-slate-900 dark:bg-black text-white hover:bg-slate-800 dark:hover:bg-slate-900 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors shadow-lg shadow-slate-900/20">
                                    Action Required <span className="material-icons-round text-sm">priority_high</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 3 - Medium */}
                <article className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-4 pl-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">#TRD-AI-004</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                                <span className="material-icons-round text-sm">trending_up</span> Medium
                            </span>
                        </div>
                        <span className="material-icons-round text-slate-400 text-lg">lightbulb</span>
                    </div>
                    <div className="pl-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">The Shift to Agentic AI Workflows</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            New frameworks are moving beyond simple chat interfaces to autonomous agents that can plan and execute multi-step tasks.
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
                            <div className="flex items-center gap-1 font-medium">
                                <span className="material-icons-round text-sm">rss_feed</span> AI Weekly
                            </div>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>5 hours ago</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded font-medium">Strategy</span>
                        </div>
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30 mb-6">
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide block mb-1">Why It Matters</span>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Relevant for your upcoming Q4 architecture planning. Consider evaluating LangChain's new agent modules.
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Role:</span>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Architect</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="text-xs font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Dismiss</button>
                                <button className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                                    Read Full <span className="material-icons-round text-sm">open_in_new</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Article 4 - Low Impact */}
                <article className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 rounded-l-2xl"></div>
                    <div className="flex justify-between items-start mb-4 pl-3">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">#TOOL-FG-12</span>
                            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full">
                                <span className="material-icons-round text-sm">build_circle</span> Low Impact
                            </span>
                        </div>
                        <span className="material-icons-round text-slate-400 text-lg">design_services</span>
                    </div>
                    <div className="pl-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">Figma Variables Update</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            Support for typography variables and extended collections has been rolled out to the beta channel.
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-5">
                            <div className="flex items-center gap-1 font-medium">
                                <span className="material-icons-round text-sm">description</span> Figma Release Notes
                            </div>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>Yesterday</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        </div>
                        <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl p-4 border border-emerald-100 dark:border-emerald-900/30 mb-6">
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block mb-1">Why It Matters</span>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Enables more scalable design system maintenance for the UI team.
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-bold text-slate-400">Role:</span>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">Designer</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="bg-primary hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                                    Try Feature <span className="material-icons-round text-sm">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            {/* End Message */}
            <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <span className="material-icons-round text-slate-500 dark:text-slate-400 text-2xl">check</span>
                </div>
                <p className="text-sm font-medium">You're caught up on high-impact news.</p>
            </div>
        </main>
    );
}
