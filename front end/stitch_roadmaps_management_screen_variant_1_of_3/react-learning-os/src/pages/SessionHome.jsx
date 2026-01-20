import { Link } from 'react-router-dom';

export default function SessionHome() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                            Discover Learning <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-200 dark:to-gray-500 bg-opacity-20 inline-block px-2 rounded-lg bg-gray-200/50 dark:bg-gray-700/50">session</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Collaborate on your active roadmaps and accelerate your learning journey with intelligent peer groups.
                        </p>
                    </div>
                    <Link to="/sessions/create">
                        <button className="bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-indigo-500/30 flex items-center gap-2 transition-all transform hover:scale-105">
                            <span className="material-icons-round">add</span>
                            Create New Session
                        </button>
                    </Link>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                        All Events
                    </button>
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors">
                        <span className="material-icons-round text-primary text-sm">map</span>
                        My Roadmaps
                    </button>
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Machine Learning
                    </button>
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        UX Design
                    </button>
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Calculus II
                    </button>
                    <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Crypto &amp; Web3
                    </button>
                </div>

                {/* Recommended for You */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-icons-round text-primary">verified</span>
                        <h2 className="text-xl font-bold">Recommended for You</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Session Card 1 */}
                        <Link to="/sessions/1" className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full">AI Master's Roadmap</span>
                                <div className="flex -space-x-2">
                                    <img alt="Participant" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=1" />
                                    <img alt="Participant" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=2" />
                                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-300">+12</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Neural Networks Deep Dive</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
                                An intensive session breaking down backpropagation and gradient descent. Bring your questions!
                            </p>
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <span className="material-icons-round text-sm">calendar_today</span>
                                        Tomorrow, 14:00
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">
                                        <span className="material-icons-round text-sm">verified</span>
                                        98% Match
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <img alt="Host" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?img=5" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Hosted by</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">Sarah Chen</span>
                                        </div>
                                    </div>
                                    <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Session Card 2 - Live */}
                        <Link to="/sessions/2" className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="w-2.5 h-2.5 bg-red-500 rounded-full block animate-pulse"></span>
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold px-3 py-1 rounded-full">UX Design 101</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Figma Prototyping Workshop</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
                                Live collaborative session. We will be designing a mobile app login flow together.
                            </p>
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1 text-red-500 font-bold">
                                        <span className="material-icons-round text-sm">videocam</span>
                                        Happening Now
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">
                                        <span className="material-icons-round text-sm">verified</span>
                                        92% Match
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <img alt="Host" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?img=8" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Hosted by</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">Marcus Ray</span>
                                        </div>
                                    </div>
                                    <button className="bg-primary hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Session Card 3 */}
                        <Link to="/sessions/3" className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold px-3 py-1 rounded-full">Mathematics</span>
                                <div className="flex -space-x-2">
                                    <img alt="Participant" className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=10" />
                                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-500 dark:text-gray-300">+3</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Calculus II: Series &amp; Sequences</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-2">
                                Reviewing Taylor series expansions and convergence tests before the midterm.
                            </p>
                            <div className="mt-auto space-y-4">
                                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <span className="material-icons-round text-sm">schedule</span>
                                        Today, 18:00
                                    </div>
                                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">
                                        <span className="material-icons-round text-sm">verified</span>
                                        85% Match
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <img alt="Host" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?img=12" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Hosted by</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">David Kim</span>
                                        </div>
                                    </div>
                                    <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Upcoming This Week */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <span className="material-icons-round text-gray-700 dark:text-gray-300">calendar_month</span>
                            <h2 className="text-xl font-bold">Upcoming This Week</h2>
                        </div>
                        <a className="text-sm font-semibold text-primary hover:text-indigo-700 flex items-center gap-1" href="#">
                            View Calendar <span className="material-icons-round text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-l-primary shadow-sm hover:shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 mb-1">Wed, Oct 24 • 10:00 AM</p>
                            <h4 className="font-bold text-sm mb-3 text-gray-900 dark:text-white truncate">React Hooks Deep Dive</h4>
                            <div className="flex items-center gap-2">
                                <img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?img=15" />
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Web Dev Roadmap</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-l-purple-500 shadow-sm hover:shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 mb-1">Thu, Oct 25 • 2:00 PM</p>
                            <h4 className="font-bold text-sm mb-3 text-gray-900 dark:text-white truncate">Product Design Crits</h4>
                            <div className="flex items-center gap-2">
                                <img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?img=16" />
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">UI/UX Roadmap</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-l-pink-500 shadow-sm hover:shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 mb-1">Fri, Oct 26 • 5:00 PM</p>
                            <h4 className="font-bold text-sm mb-3 text-gray-900 dark:text-white truncate">Data Vis with D3.js</h4>
                            <div className="flex items-center gap-2">
                                <img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?img=17" />
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Data Science</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-l-teal-500 shadow-sm hover:shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
                            <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 mb-1">Sat, Oct 27 • 11:00 AM</p>
                            <h4 className="font-bold text-sm mb-3 text-gray-900 dark:text-white truncate">Smart Contract Security</h4>
                            <div className="flex items-center gap-2">
                                <img className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/150?img=18" />
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">Blockchain</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Activity & Trending Topics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Community Activity */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-icons-round text-gray-500 dark:text-gray-400">rss_feed</span>
                            <h2 className="text-xl font-bold">Community Activity</h2>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-blue-600 dark:text-blue-400 text-lg">person_add</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200">
                                        <span className="font-bold">Julia M.</span> created a new event <a className="text-primary hover:underline font-medium" href="#">"Finals Study Marathon"</a> in Computer Science.
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">20 minutes ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-green-600 dark:text-green-400 text-lg">check_circle</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200">
                                        <span className="font-bold">15 students</span> just joined <a className="text-primary hover:underline font-medium" href="#">"Intro to Python"</a>. Only 3 spots left!
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                                    <span className="material-icons-round text-purple-600 dark:text-purple-400 text-lg">forum</span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200">
                                        New discussion in <a className="text-primary hover:underline font-medium" href="#">"System Design Patterns"</a>: "How to handle database sharding?"
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Topics */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-icons-round text-gray-500 dark:text-gray-400">trending_up</span>
                            <h2 className="text-xl font-bold">Trending Topics</h2>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-4">
                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-black text-gray-200 dark:text-gray-700 group-hover:text-primary transition-colors">01</span>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Machine Learning</span>
                                </div>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded">+24%</span>
                            </div>
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-black text-gray-200 dark:text-gray-700 group-hover:text-primary transition-colors">02</span>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Web3 Development</span>
                                </div>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded">+18%</span>
                            </div>
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-black text-gray-200 dark:text-gray-700 group-hover:text-primary transition-colors">03</span>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Product Management</span>
                                </div>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded">+12%</span>
                            </div>
                            <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-black text-gray-200 dark:text-gray-700 group-hover:text-primary transition-colors">04</span>
                                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Cybersecurity</span>
                                </div>
                                <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-bold px-2 py-1 rounded">stable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
