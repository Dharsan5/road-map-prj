export default function CompareLearningPaths() {
    const paths = [
        { name: "Full Stack Developer", duration: "6 months", modules: 52, level: "Advanced" },
        { name: "Data Science", duration: "5 months", modules: 45, level: "Intermediate" },
        { name: "DevOps Engineer", duration: "4 months", modules: 38, level: "Advanced" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Compare Learning Paths</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {paths.map((path, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{path.name}</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Duration</span>
                                <span className="font-medium text-slate-900 dark:text-white">{path.duration}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Modules</span>
                                <span className="font-medium text-slate-900 dark:text-white">{path.modules}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-600 dark:text-slate-400">Level</span>
                                <span className="font-medium text-slate-900 dark:text-white">{path.level}</span>
                            </div>
                        </div>
                        <button className="w-full mt-6 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                            Select Path
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
