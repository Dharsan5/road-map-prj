export default function VideoLessonScreen() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700 mb-6">
                        <div className="w-full aspect-video bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                            <div className="text-center">
                                <span className="material-icons-outlined text-white text-6xl mb-4">play_circle</span>
                                <p className="text-white text-lg">Video Player</p>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Introduction to React Hooks</h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Learn the fundamentals of React Hooks including useState, useEffect, and custom hooks.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                                Mark as Complete
                            </button>
                            <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg transition-colors">
                                Take Notes
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex gap-4 border-b border-slate-100 dark:border-slate-700 mb-4">
                            {["Overview", "Resources", "Discussion"].map((tab, i) => (
                                <button key={i} className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${i === 0 ? "border-primary text-primary" : "border-transparent text-slate-500"
                                    }`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                            <p>This lesson covers the core concepts of React Hooks and how to use them effectively in your applications.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Playlist</h3>
                        <div className="space-y-3">
                            {["Introduction", "useState Hook", "useEffect Hook", "Custom Hooks"].map((lesson, i) => (
                                <div key={i} className={`p-3 rounded-lg cursor-pointer transition-colors ${i === 0 ? "bg-blue-50 dark:bg-blue-900/30" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}>
                                    <div className="flex items-center gap-3">
                                        <span className={`material-icons-outlined text-sm ${i === 0 ? "text-primary" : "text-slate-400"}`}>
                                            {i === 0 ? "play_arrow" : "check_circle"}
                                        </span>
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">{lesson}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Progress</h3>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">25%</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">1 of 4 lessons completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
