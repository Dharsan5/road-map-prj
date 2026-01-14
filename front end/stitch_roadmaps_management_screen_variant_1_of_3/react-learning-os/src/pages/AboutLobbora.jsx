export default function AboutLobbora() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Lobbora</h1>
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                    Lobbora is a revolutionary learning platform that combines AI-driven personalization with community collaboration.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Our mission is to make quality education accessible to everyone through adaptive learning paths,
                    real-time collaboration, and intelligent content curation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Innovation", "Community", "Excellence"].map((value, index) => (
                        <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Core value description</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
