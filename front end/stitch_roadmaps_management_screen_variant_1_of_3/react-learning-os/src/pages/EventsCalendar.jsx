export default function EventsCalendar() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Events Calendar</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg">Upcoming workshops, webinars, and hackathons</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cal */}
                <div className="lg:col-span-2">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700 mb-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">January 2026</h2>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                    <span className="material-icons-outlined text-slate-600 dark:text-slate-400">chevron_left</span>
                                </button>
                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                    <span className="material-icons-outlined text-slate-600 dark:text-slate-400">chevron_right</span>
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <div key={day} className="text-center text-xs font-bold text-slate-400 uppercase py-2">{day}</div>
                            ))}
                            {[...Array(35)].map((_, i) => {
                                const day = i - 2;
                                const hasEvent = [5, 12, 18, 25].includes(day);
                                return (
                                    <div key={i} className={`aspect-square flex items-center justify-center rounded-lg text-sm ${day < 1 ? "text-slate-300 dark:text-slate-700" :
                                        day === 14 ? "bg-primary text-white font-bold" :
                                            hasEvent ? "bg-blue-50 dark:bg-blue-900/30 text-primary font-medium" :
                                                "hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                                        }`}>
                                        {day > 0 && day <= 31 ? day : ""}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Event List */}
                    <div className="space-y-4">
                        {[
                            {
                                title: "Global AI Hackathon 2026",
                                date: "Jan 26",
                                time: "48 Hours",
                                type: "Hackathon",
                                attendees: 234,
                                color: "purple"
                            },
                            {
                                title: "React Performance Workshop",
                                date: "Jan 18",
                                time: "2:00 PM - 5:00 PM",
                                type: "Workshop",
                                attendees: 89,
                                color: "blue"
                            },
                            {
                                title: "System Design Masterclass",
                                date: "Jan 12",
                                time: "10:00 AM - 12:00 PM",
                                type: "Webinar",
                                attendees: 156,
                                color: "green"
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all cursor-pointer">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 rounded-xl bg-${event.color}-100 dark:bg-${event.color}-900/30 flex flex-col items-center justify-center shrink-0`}>
                                        <span className="text-xs font-bold text-slate-400 uppercase">{event.date.split(' ')[0]}</span>
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">{event.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{event.title}</h3>
                                                <p className="text-sm text-slate-500">{event.time}</p>
                                            </div>
                                            <span className={`px-3 py-1 bg-${event.color}-50 dark:bg-${event.color}-900/30 text-${event.color}-600 dark:text-${event.color}-400 text-xs font-bold rounded-full`}>
                                                {event.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-4">
                                            <div className="flex -space-x-2">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white dark:border-slate-800"></div>
                                                ))}
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">
                                                    +{event.attendees - 3}
                                                </div>
                                            </div>
                                            <span className="text-sm text-slate-500">{event.attendees} attending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Filters</h3>
                        <div className="space-y-2">
                            {["All Events", "Workshops", "Webinars", "Hackathons", "Meetups"].map((filter, index) => (
                                <button key={index} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${index === 0 ? "bg-primary text-white" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    }`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Your Events</h3>
                        <div className="space-y-3">
                            <div className="text-center py-8">
                                <span className="material-icons-outlined text-4xl text-slate-300 dark:text-slate-700">event</span>
                                <p className="text-sm text-slate-500 mt-2">No registered events yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
