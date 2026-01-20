import { useState } from 'react';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <header className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 rounded-bl-full pointer-events-none opacity-50"></div>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 z-10 w-full">
                    <div className="relative">
                        <img
                            alt="Alex Chen"
                            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ10MH-lG3J0yLIDQCEC6KobzvIzBPWh62NBqxT1jvwJ2t9p457ixyqSYhU1tmpsWnacwedJOAIInU3kZqvZSYt6n8ofK0JCRblfhv286IIzDfDnqkHEyPvoEMaNWVCrPGsiJRDUWS05-s6l75zvKxIlsLibNWw9hPnICuCYWGdatx8Ev54vRyTcpzinQsWClQmKB0dxYzo00SCpMBavSh-JgjACGIHHRnTBIm1-o6TrgjzhlbDtNNDINUmwsuQp7aB72zrGQzTJI"
                        />
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary text-white text-xs flex items-center justify-center rounded-full border-2 border-white dark:border-gray-800">
                            <span className="material-icons-outlined" style={{ fontSize: '14px' }}>edit</span>
                        </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Alex Chen</h1>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <span className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <span className="material-icons-outlined mr-1 text-sm">engineering</span>
                                Level 42 Architect
                            </span>
                            <span className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <span className="material-icons-outlined mr-1 text-sm">visibility</span>
                                Visual Learner
                            </span>
                            <span className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <span className="material-icons-outlined mr-1 text-sm">place</span>
                                San Francisco, CA
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="text-right">
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Next Goal</p>
                            <p className="font-bold text-gray-900 dark:text-white">System Design V2</p>
                        </div>
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg className="transform -rotate-90 w-12 h-12">
                                <circle className="text-gray-200 dark:text-gray-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                                <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="31.4" strokeWidth="4"></circle>
                            </svg>
                            <span className="absolute text-[10px] font-bold">75%</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`pb-3 border-b-2 ${activeTab === 'profile' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'} font-semibold text-sm transition-colors`}
                    >
                        Profile Information
                    </button>
                    <button
                        onClick={() => setActiveTab('progress')}
                        className={`pb-3 border-b-2 ${activeTab === 'progress' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'} font-medium text-sm transition-colors`}
                    >
                        Progress & Achievements
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`pb-3 border-b-2 ${activeTab === 'settings' ? 'border-primary text-primary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'} font-medium text-sm transition-colors`}
                    >
                        Settings
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Personal Details */}
                    <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold flex items-center">
                                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-lg mr-3">
                                    <span className="material-icons-outlined text-xl">badge</span>
                                </span>
                                Personal Details
                            </h2>
                            <button className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Edit Profile</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Full Name</label>
                                <input
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                                    type="text"
                                    defaultValue="Alex Chen"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Username</label>
                                <input
                                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                                    type="text"
                                    defaultValue="@alx_architect"
                                />
                            </div>
                        </div>
                        <div className="space-y-2 mb-6">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Bio</label>
                            <textarea
                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium resize-none text-gray-700 dark:text-gray-300"
                                rows="3"
                                defaultValue="Passionate about scalable systems and distributed computing. Building the future of ed-tech one component at a time."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Email Address</label>
                            <input
                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                                type="email"
                                defaultValue="alex.chen@learningos.io"
                            />
                        </div>
                    </section>

                    {/* Learning DNA */}
                    <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold flex items-center">
                                <span className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mr-3">
                                    <span className="material-icons-outlined text-xl">psychology</span>
                                </span>
                                Learning DNA
                            </h2>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Preferred Learning Format</p>
                            <div className="flex flex-wrap gap-3">
                                <button className="flex items-center px-4 py-2 rounded-lg border border-primary bg-blue-50 dark:bg-blue-900/20 text-primary text-sm font-semibold transition-colors">
                                    <span className="material-icons-outlined text-base mr-2">videocam</span>
                                    Video
                                </button>
                                <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                                    <span className="material-icons-outlined text-base mr-2">article</span>
                                    Article
                                </button>
                                <button className="flex items-center px-4 py-2 rounded-lg border border-primary bg-blue-50 dark:bg-blue-900/20 text-primary text-sm font-semibold transition-colors">
                                    <span className="material-icons-outlined text-base mr-2">code</span>
                                    Interactive
                                </button>
                                <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                                    <span className="material-icons-outlined text-base mr-2">mic</span>
                                    Audio
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Focus Time</p>
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 group cursor-pointer hover:border-primary transition-colors">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                                            <span className="material-icons-outlined text-sm">dark_mode</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 dark:text-white">Night Owl</p>
                                            <p className="text-xs text-gray-500">8:00 PM - 12:00 AM</p>
                                        </div>
                                    </div>
                                    <span className="material-icons-outlined text-gray-400 group-hover:text-primary">edit</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Goal Pace</p>
                                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                                    <button className="flex-1 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Relaxed</button>
                                    <button className="flex-1 py-1.5 text-xs font-bold text-white bg-primary rounded shadow-sm">Intense</button>
                                    <button className="flex-1 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Extreme</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* System Settings */}
                    <section className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold flex items-center">
                                <span className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg mr-3">
                                    <span className="material-icons-outlined text-xl">tune</span>
                                </span>
                                System Settings
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 mr-3">
                                        <span className="material-icons-outlined text-lg">notifications_active</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Push Notifications</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Receive real-time alerts for course updates</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-start">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 mr-3">
                                        <span className="material-icons-outlined text-lg">calendar_today</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Calendar Sync</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Sync learning schedule with Google Calendar</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-start">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 mr-3">
                                        <span className="material-icons-outlined text-lg">visibility</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Public Profile</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Allow others to see your progress and badges</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Pro Plan Card */}
                    <div className="bg-gradient-to-br from-gray-900 to-black dark:from-primary-dark dark:to-blue-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full pointer-events-none group-hover:bg-blue-500/30 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-900/50 px-2 py-1 rounded">Pro Plan</span>
                                <span className="material-icons-outlined text-blue-300">auto_awesome</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">LearningOS Pro</h3>
                            <p className="text-sm text-gray-400 mb-6">Renews on Oct 24, 2024</p>
                            <button className="w-full py-2 bg-white text-black font-bold text-sm rounded-lg hover:bg-gray-100 transition-colors shadow-sm">Manage Subscription</button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className="material-icons-outlined text-lg">timer</span>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">124h</p>
                            <p className="text-xs text-gray-500">Total Learned</p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="mb-2 text-primary">
                                <span className="material-icons-outlined text-lg">local_fire_department</span>
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">14</p>
                            <p className="text-xs text-gray-500">Day Streak</p>
                        </div>
                    </div>

                    {/* Top Learners */}
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Top Learners</h3>
                            <a className="text-xs text-primary font-semibold hover:underline" href="#">View All</a>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img alt="David" className="w-8 h-8 rounded-full mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeHPByCzwoi7sY_ffzvErrB7B9s2Q6WW8W85rK6tYtKW2LeilKDTdqPsdqRjLTSfM5Z6ju-pFoeOhWpCpeza1b2cNB_yiRF6tbNU3lXjVHo4p2Is45hW-IZIj9BONbJiJTrqqOhy0xJt9z7z1g3vbqmmKKOfPh6I8QybygEPVDcJaG7V1xUMa_9S_tz0MSY804E1K0J2-T1WKQwiuDhUq5ASUkuT_ZplBnrvTFEaasWNkBue3OjBIhmEgQQ1mCo0llTVSXi3qFq14" />
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">David K.</span>
                                </div>
                                <span className="text-xs font-mono text-primary font-medium">9,820 XP</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img alt="Sarah" className="w-8 h-8 rounded-full mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDK_K-HYLxB_7HYOAy54UaczhzcessgeQqAAb9bgUZxTEHqJgT1RIO4CZiXkzcIs3HrsunRtKQZXoXpd3uE0v0uF7kRMfQZ-A8zgefNeIvyuIIYz_ZxGbqxb7XLGLJc8igxS5kAERcFKu8Xsfc2-eiE3m1Z4eYnLo6AnX_vVu198p7aPHwnER9SojXbvm6wn7ZZyeObEEBFjaYj7NjdbjXQ3IB3b3pUjvjVRnVgXl0L3TfNa3yhnjROShyjy_mdoJjHDotXsoxUsE" />
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">Sarah M.</span>
                                </div>
                                <span className="text-xs font-mono text-gray-500 font-medium">8,450 XP</span>
                            </div>
                            <div className="flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                                        <span className="material-icons-outlined text-sm text-gray-500">person</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">You</span>
                                </div>
                                <span className="text-xs font-mono text-gray-500 font-medium">5,200 XP</span>
                            </div>
                        </div>
                    </div>

                    {/* Skill Distribution */}
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                        <h3 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-6">Skill Distribution</h3>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-gray-900 dark:text-white">Design Systems</span>
                                    <span className="text-primary">85%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-gray-900 dark:text-white">Frontend Arch</span>
                                    <span className="text-gray-500">60%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-gray-400 dark:bg-gray-600 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-gray-900 dark:text-white">Backend (Go)</span>
                                    <span className="text-gray-500">45%</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-gray-400 dark:bg-gray-600 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
