export default function EventDetails() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700">
                <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6"></div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Global AI Hackathon 2026</h1>
                <div className="flex gap-6 mb-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2"><span className="material-icons-outlined">event</span> Jan 26-28, 2026</div>
                    <div className="flex items-center gap-2"><span className="material-icons-outlined">schedule</span> 48 Hours</div>
                    <div className="flex items-center gap-2"><span className="material-icons-outlined">place</span> Online</div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Join developers worldwide in this exciting AI hackathon. Build innovative solutions and compete for prizes.</p>
                <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">Register Now</button>
            </div>
        </div>
    );
}
