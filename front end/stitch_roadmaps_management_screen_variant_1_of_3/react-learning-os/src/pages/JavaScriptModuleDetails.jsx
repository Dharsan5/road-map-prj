export default function JavaScriptModuleDetails() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">JavaScript Advanced Concepts</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Module 4 of 12 • 45 min</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700">
                    <div className="w-full h-96 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                        <span className="text-white text-xl">Video Player</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Closures and Scope</h2>
                    <p className="text-slate-600 dark:text-slate-400">Learn about JavaScript closures, lexical scope, and practical applications in modern development.</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Course Outline</h3>
                        {["Introduction", "Closures", "Scope Chain", "Practical Examples"].map((item, i) => (
                            <div key={i} className="py-2 text-sm text-slate-600 dark:text-slate-400">{i + 1}. {item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
