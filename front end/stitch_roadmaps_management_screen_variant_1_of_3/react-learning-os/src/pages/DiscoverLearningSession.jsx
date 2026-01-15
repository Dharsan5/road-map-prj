export default function DiscoverLearningSession() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Discover Learning Sessions</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="w-full h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4"></div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Session Title {i}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Interactive learning session description</p>
                        <button className="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">Join Session</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
