export default function CheckpointScreen() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Checkpoint</h1>
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-12 shadow-card border border-slate-100 dark:border-slate-700">
                <span className="material-icons-outlined text-6xl text-primary mb-4">flag</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Module Checkpoint Reached!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Complete this checkpoint quiz to unlock the next section of your learning path.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                        Start Quiz
                    </button>
                    <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg transition-colors">
                        Review Material
                    </button>
                </div>
            </div>
        </div>
    );
}
