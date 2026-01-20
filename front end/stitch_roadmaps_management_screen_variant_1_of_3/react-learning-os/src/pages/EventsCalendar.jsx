import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/mockData';

export default function EventsCalendar() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('all');

    const featuredEvent = events.find(e => e.featured);
    const standardEvents = events.filter(e => !e.featured && (activeFilter === 'all' || e.category.toLowerCase() === activeFilter.toLowerCase()));

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
                {/* Main Content */}
                <main className="col-span-12 lg:col-span-8 space-y-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold tracking-tight">Events Calendar</h1>
                                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-semibold rounded-full">VARIANT 2</span>
                            </div>
                            <p className="text-text-muted-light dark:text-text-muted-dark max-w-xl">
                                Discover workshops, hackathons, and community sessions to accelerate your learning.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-icons-outlined text-base">sync</span>
                                Sync Calendar
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all">
                                <span className="material-icons text-base">add</span>
                                Create Event
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={`px-4 py-2 text-sm font-medium rounded-full shadow-md whitespace-nowrap ${activeFilter === 'all' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                All Events
                            </button>
                            <button
                                onClick={() => setActiveFilter('Workshop')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'Workshop' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                Workshops
                            </button>
                            <button
                                onClick={() => setActiveFilter('Hackathon')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'Hackathon' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                Hackathons
                            </button>
                            <button
                                onClick={() => setActiveFilter('Podcast')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'Podcast' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                Podcasts
                            </button>
                        </div>
                        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1 hidden sm:flex">
                            <button className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-900/50 text-primary">
                                <span className="material-icons text-sm">grid_view</span>
                            </button>
                            <button className="p-1.5 rounded-md text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-icons text-sm">list</span>
                            </button>
                        </div>
                    </div>

                    {/* Featured Event */}
                    {featuredEvent && (
                        <div
                            className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                            onClick={() => navigate(`/events/${featuredEvent.id}`)}
                        >
                            <img
                                alt={featuredEvent.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src={featuredEvent.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent flex flex-col justify-center p-8 md:p-12 w-full md:w-2/3">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-2 py-1 bg-primary text-white text-[10px] uppercase font-bold tracking-wider rounded-md">Featured</span>
                                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-primary text-[10px] uppercase font-bold tracking-wider rounded-md flex items-center gap-1">
                                        <span className="material-icons text-[10px]">videocam</span> {featuredEvent.category}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                                    {featuredEvent.title}
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-md line-clamp-2">
                                    {featuredEvent.description}
                                </p>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-blue-50 dark:bg-gray-800 rounded-lg text-primary">
                                            <span className="material-icons-outlined text-lg">calendar_today</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 uppercase font-semibold">Date</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">{featuredEvent.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-blue-50 dark:bg-gray-800 rounded-lg text-primary">
                                            <span className="material-icons-outlined text-lg">schedule</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-500 uppercase font-semibold">Time</span>
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">{featuredEvent.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/events/${featuredEvent.id}`);
                                    }}
                                    className="self-start px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all"
                                >
                                    RSVP Now
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Upcoming Sessions */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold">Upcoming Sessions</h3>
                            <a className="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1" href="#">
                                View Full Calendar <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {standardEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                                    onClick={() => navigate(`/events/${event.id}`)}
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            src={event.image}
                                        />
                                        <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-white text-[10px] font-bold flex items-center gap-1">
                                            <span className="material-icons text-[10px] text-orange-400">place</span> {event.location}
                                        </div>
                                        {event.category === 'Podcast' && (
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="material-icons text-white text-4xl">play_circle_outline</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-semibold text-primary">{event.category}</span>
                                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                                <span className="material-icons-outlined text-lg">bookmark_border</span>
                                            </button>
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
                                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-2 mb-4">
                                            {event.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                                                        {i === 3 ? '+18' : ''}
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">{event.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-4 space-y-6">
                    {/* Calendar Widget */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 dark:text-white">October 2024</h3>
                            <div className="flex gap-2">
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500">
                                    <span className="material-icons text-sm">chevron_left</span>
                                </button>
                                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500">
                                    <span className="material-icons text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 text-center text-xs mb-2 text-text-muted-light dark:text-text-muted-dark font-medium">
                            <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                        </div>
                        <div className="grid grid-cols-7 text-center text-sm gap-y-3">
                            {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2].map((day, index) => {
                                const isOutsideMonth = (index < 2) || (index > 32);
                                const isToday = day === 24 && !isOutsideMonth;
                                const hasEvent = day === 25 && !isOutsideMonth;

                                return (
                                    <div key={index} className="relative">
                                        <div className={`${isToday ? 'bg-primary text-white rounded-lg py-1 shadow-md shadow-blue-500/30' : isOutsideMonth ? 'text-gray-300 dark:text-gray-600' : 'hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg py-1 cursor-pointer'}`}>
                                            {day}
                                        </div>
                                        {hasEvent && (
                                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Organizer Tools */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                            <span className="material-icons text-primary text-base">work_outline</span>
                            Organizer Tools
                        </h3>
                        <div className="space-y-3">
                            <a className="block bg-card-light dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group" href="#">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                            <span className="material-icons text-lg">upload_file</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white">Upload Event</div>
                                            <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark">Import CSV or JSON</div>
                                        </div>
                                    </div>
                                    <span className="material-icons text-gray-400 text-sm group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            </a>
                            <a className="block bg-card-light dark:bg-card-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group" href="#">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                            <span className="material-icons text-lg">edit_calendar</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900 dark:text-white">Manage Listing</div>
                                            <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark">Edit active events</div>
                                        </div>
                                    </div>
                                    <span className="material-icons text-gray-400 text-sm group-hover:text-primary transition-colors">chevron_right</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Engagement Stats */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                        <h4 className="text-[10px] uppercase font-bold text-text-muted-light dark:text-text-muted-dark mb-4 tracking-wider">Engagement</h4>
                        <div className="flex items-center gap-8">
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1.2k</div>
                                <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark flex items-center gap-1">
                                    Views <span className="text-green-500 bg-green-50 dark:bg-green-900/20 px-1 rounded text-[10px] font-bold">+14%</span>
                                </div>
                            </div>
                            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">350</div>
                                <div className="text-[10px] text-text-muted-light dark:text-text-muted-dark flex items-center gap-1">
                                    RSVPs <span className="text-green-500 bg-green-50 dark:bg-green-900/20 px-1 rounded text-[10px] font-bold">+5%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Calendar Integration */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 flex items-start gap-4 relative overflow-hidden">
                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-green-500 rounded-r-full"></div>
                        <div className="flex-shrink-0 mt-1">
                            <span className="material-icons text-green-500 text-2xl">event_available</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Google Calendar</h4>
                            <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mb-3 leading-relaxed">
                                Sync events directly to your personal schedule.
                            </p>
                            <button className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                Connect Account
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
