export default function CommunityHub() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Community Hub</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Connect, collaborate, and grow with fellow learners</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Discussion Feed */}
                <div className="lg:col-span-2">
                    {/* Create Post */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700 mb-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">A</div>
                            <input
                                type="text"
                                placeholder="Share your thoughts..."
                                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Posts */}
                    <div className="space-y-6">
                        {[
                            {
                                author: "Sarah Chen",
                                avatar: "S",
                                time: "2h ago",
                                title: "Just completed the Full Stack Bootcamp! 🎉",
                                content: "After 6 months of intensive learning, I finally finished the Full Stack Neural Architect roadmap. The system design module was particularly challenging but incredibly rewarding. Thanks to everyone who helped!",
                                likes: 42,
                                comments: 15,
                                tags: ["achievement", "fullstack"]
                            },
                            {
                                author: "Mike Torres",
                                avatar: "M",
                                time: "5h ago",
                                title: "Looking for study partners for ML Engineering",
                                content: "Starting the Machine Learning Engineering roadmap next week. Anyone interested in forming a study group? Would be great to collaborate on projects and discuss concepts together.",
                                likes: 28,
                                comments: 23,
                                tags: ["study-group", "ml"]
                            }
                        ].map((post, index) => (
                            <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg">
                                        {post.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{post.author}</h3>
                                        <p className="text-sm text-slate-500">{post.time}</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-icons-outlined">more_horiz</span>
                                    </button>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{post.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{post.content}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                                        <span className="material-icons-outlined text-sm">favorite_border</span>
                                        <span className="text-sm font-medium">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                                        <span className="material-icons-outlined text-sm">chat_bubble_outline</span>
                                        <span className="text-sm font-medium">{post.comments}</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors ml-auto">
                                        <span className="material-icons-outlined text-sm">share</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Active Groups */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Active Groups</h3>
                        <div className="space-y-3">
                            {["Full Stack Developers", "ML Engineering", "DevOps Masters", "UI/UX Design"].map((group, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500"></div>
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white text-sm">{group}</p>
                                            <p className="text-xs text-slate-500">{Math.floor(Math.random() * 500 + 100)} members</p>
                                        </div>
                                    </div>
                                    <button className="text-primary text-xs font-bold">Join</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Trending Topics</h3>
                        <div className="space-y-3">
                            {[
                                { tag: "react-hooks", posts: 234 },
                                { tag: "system-design", posts: 189 },
                                { tag: "docker", posts: 156 },
                                { tag: "typescript", posts: 142 }
                            ].map((topic, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-primary">#{topic.tag}</span>
                                    <span className="text-xs text-slate-500">{topic.posts} posts</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
