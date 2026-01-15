export default function ScheduleCollaborativeSession() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Schedule a Collaborative Session</h1>
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Session Title</label>
                        <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary" placeholder="Enter session title" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Topic</label>
                        <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary">
                            <option>Full Stack Development</option>
                            <option>Machine Learning</option>
                            <option>DevOps</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Date</label>
                            <input type="date" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Time</label>
                            <input type="time" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</label>
                        <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary" placeholder="Describe your session..."></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                        Create Session
                    </button>
                </form>
            </div>
        </div>
    );
}
