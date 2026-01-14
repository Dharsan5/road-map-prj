export default function CommandCenterDashboard() {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-primary tracking-wider uppercase">System Optimal</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Command Center</h1>
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-mono text-sm tracking-wide">
                    TUE • DEC 30, 01:17 AM
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
                    {/* Welcome Card */}
                    <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 md:p-8 shadow-card border border-slate-100 dark:border-slate-700 flex flex-col lg:flex-row gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none"></div>
                        <div className="flex-1 z-10 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Good Morning, Alex.</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                                    Your focus efficiency is up 12% this week. Keep the momentum going to unlock the next tier.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Focus Time</p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">3h 12m</span>
                                        <span className="material-icons-outlined text-green-500 text-sm">arrow_upward</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Streak</p>
                                    <div className="flex items-end gap-1">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">14</span>
                                        <span className="text-sm font-medium text-slate-500 mb-1">days</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Points</p>
                                    <div className="flex items-end gap-1">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">840</span>
                                        <span className="text-sm font-bold text-primary mb-1">XP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[400px] z-10">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-lg border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-900/30 text-primary text-[10px] font-bold uppercase tracking-wide border border-indigo-100 dark:border-indigo-800">
                                        Current Module
                                    </span>
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                        <span className="material-icons-outlined">more_horiz</span>
                                    </button>
                                </div>
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-16 h-16 rounded-lg bg-slate-900 overflow-hidden shrink-0">
                                        <img alt="Module Thumbnail" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpmZO2_G8Z8uqDdNAKjhiI7gUd0TfZsoohlocwJ-9Tm1Xiqa1CDjDklnHcIfnTYWKgz5bmzKrBZd9GIcKuGM57FQVwzGDlAwocoAwDU9Ek1bVJClUI6AlMfidW8KYSPpW6DC6DxXEnzZQFUdPM1qaqXRU_yk_Dg4IBNBSvf1R0GMvtTcvRXCoVZLxGuvD1DVz-6UF_yGvLha2kkEZcP32-TP5ngPE4Rmd8tDHymBjbfNarQN5HSuzB1d17rBwIdkJow41Iw8X494s" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">Neural Networks: Backpropagation</h3>
                                        <p className="text-xs text-slate-500 font-medium">Chapter 4.2 • 15 min left</p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full mb-2 overflow-hidden">
                                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-4">
                                        <span>Progress: 65%</span>
                                        <span>Next up: Gradient Descent</span>
                                    </div>
                                    <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg shadow-sm shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition-all">
                                        <span className="material-icons-outlined text-lg">play_arrow</span>
                                        CONTINUE LEARNING
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tasks and Roadmaps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Pending Tasks */}
                        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Pending Tasks</h3>
                                </div>
                                <span className="text-xs font-semibold text-slate-400">4 REMAINING</span>
                            </div>
                            <div className="flex-1 space-y-3">
                                <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                    <input className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800" type="checkbox" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Review React Hooks Notes</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                    <input className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800" type="checkbox" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Complete Quiz: Vector Math</span>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                    <input className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800" type="checkbox" />
                                    <div className="flex-1 flex justify-between">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Read: Future of EdTech Article</span>
                                        <span className="text-[10px] bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-500">5m</span>
                                    </div>
                                </label>
                                <label className="flex items-start gap-3 p-3 rounded-xl opacity-50">
                                    <input checked className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800" type="checkbox" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 line-through">Morning Standup</span>
                                </label>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400 text-center">
                                Complete 2 more to maintain streak.
                            </div>
                        </div>

                        {/* Active Roadmaps */}
                        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-outlined text-primary">map</span>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Active Roadmaps</h3>
                                </div>
                                <a className="text-xs font-bold text-primary hover:text-primary-dark" href="#">VIEW ALL</a>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Full Stack Certification</h4>
                                            <p className="text-[11px] text-slate-500 font-medium">24/52 Modules</p>
                                        </div>
                                        <span className="text-sm font-bold text-primary">45%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[45%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Data Science Fundamentals</h4>
                                            <p className="text-[11px] text-slate-500 font-medium">3/25 Modules</p>
                                        </div>
                                        <span className="text-sm font-bold text-slate-400">12%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-slate-400 w-[12%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">UI/UX Design Systems</h4>
                                            <p className="text-[11px] text-slate-500 font-medium">18/20 Modules</p>
                                        </div>
                                        <span className="text-sm font-bold text-green-500">90%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[90%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400 text-center">
                                Focus on 'Full Stack Certification' to meet weekly goals.
                            </div>
                        </div>
                    </div>

                    {/* Recommended Section */}
                    <div className="bg-transparent">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recommended For You</h3>
                                <p className="text-xs text-slate-500">Based on your learning activity</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <span className="material-icons-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    <span className="material-icons-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer shadow-sm">
                                <img alt="3D Shaders" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaJ0B-rnQN61kk4d-pLzq5Bf4yENaZZ1F95LQUS1-Rhj_DiuHg82rJclES23zQQifszPY4G0-ype0MTi2_R335xrjIWgd-gxe9pZFHoZNAr3G9ZB_AYgz3qSW0CzFpF2i1D9pCk-XpjdvGRrxC_IcqPK3JAJX-VCZ7RMDVJIIKDVpwlomqcwrhlZ-mhjlTjs2MO672JrC7WNahTlZv1HJgUxY1gtBGYJLksrqgTJziTJnAkoabG42FKB7ne-0Rxc971q4iOSjMvOs" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <span className="inline-block px-2 py-0.5 rounded-sm bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase mb-2">Course</span>
                                    <h4 className="text-white font-bold text-lg leading-tight">Advanced Three.js Shaders</h4>
                                </div>
                            </div>
                            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer shadow-sm">
                                <img alt="Hacking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwWodzjFHVwekICbPJ6wUMqQOnnYj732fhYyqgrK3muuL734m9xI_hxhXbSKZckIhKvqKdjxQkiUjyCaeohHMJ7otDBZm99xbvn7iAFlg5f7SHRlTJri_efhJO2_puUa32YQsAyVjXUdOP-OG3TivHH_61qRIfiUaYwk_nKxWnR0MfR6mhcZSiNSVlwiJlI3XQUnIX01DVwP7rZFmzyaW_KEFEFyCJLzQbpfpIGRvPTuuKYvxGY2pOL7W9BJh7eguw2MdLGGJK40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <span className="inline-block px-2 py-0.5 rounded-sm bg-orange-500/20 backdrop-blur-md border border-orange-500/30 text-orange-300 text-[10px] font-bold uppercase mb-2">Workshop</span>
                                    <h4 className="text-white font-bold text-lg leading-tight">Ethical Hacking 101</h4>
                                </div>
                            </div>
                            <div className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer shadow-sm">
                                <img alt="AI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs4psDGmnlS4Hl3kA-X4pM4-niEMEvJA1tAfDbzit3ZDg7ErfQumtQQ0bDxSNVhMB2P5mlhGm3SQyVGrLNTcnHbhH9q6D4TwYAWwYXyzUkp0kXc-14AR3inj3J-PWxvF_sdbNoxifTRTw7AqABHkvB_99VxyXhtqkrGMszrP77O6jRNq4DXWnO1GJa5mQGLwiJkCfz0Zm-n58FUnlZ3CwIG_Ushk5MiG_b9JU36aIdt6Q3nfLawS2DzLm-JmYs80s_JDvVfR48mtU" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <span className="inline-block px-2 py-0.5 rounded-sm bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-300 text-[10px] font-bold uppercase mb-2">Article</span>
                                    <h4 className="text-white font-bold text-lg leading-tight">The State of AI in 2024</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                    {/* Upcoming Events */}
                    <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-outlined text-primary">calendar_month</span>
                                <h3 className="font-bold text-slate-900 dark:text-white">Upcoming Events</h3>
                            </div>
                            <a className="text-xs font-bold text-primary hover:text-primary-dark" href="#">View all</a>
                        </div>
                        <div className="flex justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                            <div className="text-center group cursor-pointer">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Fri</div>
                                <div className="text-sm font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white">23</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-[10px] text-primary font-bold uppercase mb-1">• Sat</div>
                                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900 text-primary font-bold shadow-sm">24</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Sun</div>
                                <div className="text-sm font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white">25</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Mon</div>
                                <div className="text-sm font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white">26</div>
                            </div>
                            <div className="text-center group cursor-pointer">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tue</div>
                                <div className="text-sm font-medium text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white">27</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl w-12 h-12 flex flex-col items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Oct</span>
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">26</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Global AI Hackathon</h4>
                                    <p className="text-xs text-slate-500 mb-2">Online • 48 Hours</p>
                                    <div className="flex -space-x-2">
                                        <img alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2W2o03q4v-UjCdjAh8UGI6mur7myuqOfHJdv9GstbdWB0OL8HlTC4nlTSD9Xc-yK9jMLYBVARujM3ZtQBmheh1EeffOrfTmBot8FkGZZ0uA_JQlIhRmBtbsxp07aTkZpLf3lHvnEsbW5BoHwqdZPqJjvwBWrjDYSMLTTPUEXxXzXKPPP2V65kwW4yGn85egmMDI5AHhmHI4k3tID-6ge3QZhS3dPDkCdxc0NJCw4S-VHcyfnrCyKmJI0EoHELJODyh_jotBHrk94" />
                                        <img alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZtTXMZyy5DrstjsZj_Cyrn5H_hzPY8MwfbbSb5DY4njIg8cUD5kJ3ossPJvr6_dnVfi_neKZaTyg3vRmQoeCZeq_UOUSqTcXTXzjYQIEWSVB6cj46qmiR73ZApFQ2C-aH4i8LNGDwB4YLFSQs1FoquoffQojbGTM-GTk8pMQGQSLaQ0c1UMLX9-eBbQShZ_cW5fTfOQlOF4sXbIXA9SFvwKoh87R6TR9DITsVMhyLGfHdsM1cUgortgfv2059lhLZEFEDyZxy_HM" />
                                        <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 text-[8px] flex items-center justify-center font-bold text-slate-500">+12</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-xl w-12 h-12 flex flex-col items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Oct</span>
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">27</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Guest Lecture: Future EdTech</h4>
                                    <p className="text-xs text-slate-500">Live Stream • 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-outlined text-primary">leaderboard</span>
                                <h3 className="font-bold text-slate-900 dark:text-white">Leaderboard</h3>
                            </div>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded">Top 5%</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-sm font-bold text-yellow-500 w-4">01</span>
                                    <img className="w-8 h-8 rounded-full bg-yellow-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXQ9q8gjaT_sY-6EE5I3H_5oz14nX-eQhwldQdbIgiH-t_isNC6EoWDEilA8ln9Eotg58DO-ZYIbp4MUT45PFAuPEON9s4n9J_cDtVo-3I3esBcGqf41KQM_0yjYo-yoTSHKohjkr1bR93aNyMsFGTilzJmIJk8ZQC_0dEzgA7-K4QqWX3pwYo3o1MR9W_p8x7_9ggxq1kFoJjPFpzqil466IWtbi2wiI_hTRfGQ6IK83lb8AyiWFNYAbPBG55RhkwHzUjrZd2z0k" />
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sarah_Dev</span>
                                </div>
                                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">2,450 XP</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-sm font-bold text-slate-400 w-4">02</span>
                                    <img className="w-8 h-8 rounded-full bg-slate-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANN1puyb1VVBN1pY5Fo-7cxwpAE3jISs3dPYbhHFW0G8FTrVOGzG0dhRXh6_AsUr0T-JI3kCSKY8gDUiVOIRaCsWkUjxeb-dfXJ0CrDnzOmRjjUTpvCO4uXCsmzPzPFZPw1GeE8YAZfXuHetZu335HzKbQ9SoTnw1w8rllGaLNOJ119kYaw8EF7iEbTQBke35yRO3LNPAMpzG4eqed5BpfvDl2u9MYbIgkaaucZ8cWq2oso1gW136jkCeuEwzSEWFW5EEzJhoV05o" />
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mike.JS</span>
                                </div>
                                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">2,100 XP</span>
                            </div>
                            <div className="flex items-center justify-between bg-indigo-50 dark:bg-indigo-900/30 p-2 -mx-2 rounded-lg border border-indigo-100 dark:border-indigo-800">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-sm font-bold text-primary w-4">03</span>
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">You</div>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Alex Doe</span>
                                </div>
                                <span className="text-xs font-mono font-bold text-primary">840 XP</span>
                            </div>
                        </div>
                    </div>

                    {/* Daily Tech News */}
                    <div className="bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-outlined text-primary">auto_awesome</span>
                                <h3 className="font-bold text-slate-900 dark:text-white">Daily Tech News</h3>
                            </div>
                            <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900 text-primary text-[10px] font-bold uppercase rounded">AI Curated</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold">O</div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">AI Model Update • 2h ago</span>
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight mb-2">OpenAI releases GPT-5 Developer Preview</h4>
                            <p className="text-xs text-slate-500 mb-4 line-clamp-3">New capabilities in reasoning and coding. Early access is now open for enterprise tier users with advanced features.</p>
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-600 border border-white dark:border-slate-800"></div>
                                    <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-500 border border-white dark:border-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-600">+2</div>
                                </div>
                                <a className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 text-primary text-xs font-bold rounded-lg transition-colors flex items-center gap-1" href="#">
                                    Read full update
                                    <span className="material-icons-outlined text-[10px]">north_east</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-[10px] text-slate-300 dark:text-slate-600">AI-curated • Updated regularly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
