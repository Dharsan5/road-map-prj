export default function DailyTechFeed() {
    const articles = [
        { title: "OpenAI releases GPT-5", category: "AI", time: "2h ago" },
        { title: "React 19 Beta Released", category: "Frontend", time: "5h ago" },
        { title: "Kubernetes 1.30 Features", category: "DevOps", time: "1d ago" }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Daily Tech Feed</h1>
            <div className="space-y-4">
                {articles.map((article, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all cursor-pointer">
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                                    {article.category}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-2">{article.title}</h3>
                                <p className="text-sm text-slate-500">{article.time}</p>
                            </div>
                            <span className="material-icons-outlined text-slate-400">bookmark_border</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
