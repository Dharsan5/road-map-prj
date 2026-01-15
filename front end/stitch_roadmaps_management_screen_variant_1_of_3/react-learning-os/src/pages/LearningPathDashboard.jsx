export default function LearningPathDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">My Learning Paths</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: "Full Stack Certification", progress: 45, modules: 24, total: 52 },
                    { name: "Data Science Fundamentals", progress: 12, modules: 3, total: 25 },
                    { name: "UI/UX Design Systems", progress: 90, modules: 18, total: 20 }
                ].map((path, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{path.name}</h3>
                        <div className="mb-4">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-600 dark:text-slate-400">{path.modules}/{path.total} Modules</span>
                                <span className="font-bold text-primary">{path.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${path.progress}%` }}></div>
                            </div>
                        </div>
                        <button className="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                            Continue Learning
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
