export default function ProfilePage() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700 mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                        AD
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Alex Doe</h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-3">Full Stack Developer | Learning Enthusiast</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">React</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">Python</span>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "XP Points", value: "840", icon: "star" },
                    { label: "Streak", value: "14 days", icon: "local_fire_department" },
                    { label: "Completed", value: "24", icon: "check_circle" },
                    { label: "Certificates", value: "3", icon: "workspace_premium" }
                ].map((stat, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <span className="material-icons-outlined text-primary mb-2">{stat.icon}</span>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Content Tabs */}
            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                <div className="flex gap-4 mb-6 border-b border-slate-100 dark:border-slate-700">
                    {["Activity", "Achievements", "Certificates", "Settings"].map((tab, index) => (
                        <button key={index} className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${index === 0
                                ? "border-primary text-primary"
                                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
                            }`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Activity Feed */}
                <div className="space-y-4">
                    {[
                        { action: "Completed module", title: "Neural Networks: Backpropagation", time: "2 hours ago", icon: "check_circle", color: "green" },
                        { action: "Started roadmap", title: "Full Stack Certification", time: "1 day ago", icon: "play_arrow", color: "blue" },
                        { action: "Earned badge", title: "Week Streak Champion", time: "3 days ago", icon: "emoji_events", color: "yellow" },
                        { action: "Joined event", title: "Global AI Hackathon", time: "5 days ago", icon: "event", color: "purple" }
                    ].map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className={`w-10 h-10 rounded-full bg-${activity.color}-100 dark:bg-${activity.color}-900/30 flex items-center justify-center shrink-0`}>
                                <span className={`material-icons-outlined text-${activity.color}-600 dark:text-${activity.color}-400`}>{activity.icon}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-900 dark:text-white font-medium">
                                    {activity.action} <span className="text-primary">{activity.title}</span>
                                </p>
                                <p className="text-sm text-slate-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
