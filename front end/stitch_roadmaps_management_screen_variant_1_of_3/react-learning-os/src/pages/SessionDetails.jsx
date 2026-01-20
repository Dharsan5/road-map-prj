import { Link, useParams } from 'react-router-dom';

export default function SessionDetails() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="flex mb-6">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <li><Link to="/sessions" className="hover:text-primary transition-colors">Sessions</Link></li>
                        <li><span className="material-icons-round text-base align-middle">chevron_right</span></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Quantum Physics 101</a></li>
                        <li><span className="material-icons-round text-base align-middle">chevron_right</span></li>
                        <li><span className="font-semibold text-gray-900 dark:text-white">Event Details</span></li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hero Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wide">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                        Live Session
                                    </span>
                                    <button className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                        <span className="material-icons-round">share</span>
                                    </button>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    Advanced Quantum Computing Workshop: Qubit Gates
                                </h1>
                                <div className="flex items-center gap-3">
                                    <img alt="Dr. Sarah Chen" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 shadow-sm" src="https://i.pravatar.cc/150?img=5" />
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wider">Hosted By</span>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Dr. Sarah Chen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About This Session */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-icons-round text-primary">info</span>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">About This Session</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Dive deep into the principles of quantum superposition and entanglement. This interactive workshop will focus on practical applications using Qiskit. We will move beyond the theoretical frameworks discussed in last week's lecture and start building our first quantum circuits. Prepare to collaborate on real-time code simulations in a shared notebook environment.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-4">
                                        <span className="material-icons-round">lightbulb</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Learning Purpose</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Understand the basics of qubit manipulation and quantum gates in a collaborative environment.
                                    </p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                                        <span className="material-icons-round">school</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Prerequisites</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Basic understanding of Python and Linear Algebra. Please have Qiskit installed locally if possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Topics */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm flex flex-wrap items-center gap-4">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Related Topics:</span>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">Quantum Mechanics</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">Python</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">Algorithm Design</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Session Status */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border-t-4 border-primary relative">
                            <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
                            <div className="mb-6">
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1 block">Session Status</span>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Happening Now</h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Started 15 minutes ago</p>
                            </div>
                            <button className="w-full bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 mb-3">
                                Join Session
                                <span className="material-icons-round text-lg">login</span>
                            </button>
                            <div className="text-center">
                                <a className="text-xs text-gray-600 dark:text-gray-400 underline decoration-dashed hover:text-primary transition-colors" href="#">Unable to join?</a>
                            </div>
                        </div>

                        {/* Logistics */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm">
                            <h3 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-6">Logistics</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-gray-900 dark:text-white">
                                        <span className="material-icons-round">calendar_today</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white text-sm">Oct 24, 2023</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Thursday</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-gray-900 dark:text-white">
                                        <span className="material-icons-round">schedule</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white text-sm">14:00 - 15:30</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">90 Minutes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center flex-shrink-0 text-gray-900 dark:text-white">
                                        <span className="material-icons-round">videocam</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white text-sm">Online Meeting</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Zoom Integration</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Attendance */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm">
                            <div className="flex justify-between items-end mb-2">
                                <h3 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">Attendance</h3>
                                <span className="text-sm font-bold text-primary">12/20</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <div className="flex items-center -space-x-3">
                                <img alt="User 1" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=20" />
                                <img alt="User 2" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=21" />
                                <img alt="User 3" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=22" />
                                <img alt="User 4" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="https://i.pravatar.cc/150?img=23" />
                                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                                    +7
                                </div>
                            </div>
                        </div>

                        {/* Session Tools */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm">
                            <h3 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-4">Session Tools</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-gray-50 dark:bg-gray-900 hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all">
                                    <span className="material-icons-round text-primary text-2xl">chat</span>
                                    <span className="text-xs font-medium text-gray-900 dark:text-white">Live Chat</span>
                                </button>
                                <button className="bg-gray-50 dark:bg-gray-900 hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all">
                                    <span className="material-icons-round text-purple-500 text-2xl">edit_note</span>
                                    <span className="text-xs font-medium text-gray-900 dark:text-white">Shared Notes</span>
                                </button>
                                <button className="bg-gray-50 dark:bg-gray-900 hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all">
                                    <span className="material-icons-round text-orange-500 text-2xl">code</span>
                                    <span className="text-xs font-medium text-gray-900 dark:text-white">Collab Code</span>
                                </button>
                                <button className="bg-gray-50 dark:bg-gray-900 hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all">
                                    <span className="material-icons-round text-green-500 text-2xl">mic</span>
                                    <span className="text-xs font-medium text-gray-900 dark:text-white">Voice Room</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
