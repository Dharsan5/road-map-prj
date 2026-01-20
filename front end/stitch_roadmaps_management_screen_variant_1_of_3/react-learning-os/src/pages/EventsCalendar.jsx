import { useState } from 'react';

export default function EventsCalendar() {
    const [activeFilter, setActiveFilter] = useState('all');

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
                                onClick={() => setActiveFilter('workshops')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'workshops' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                Workshops
                            </button>
                            <button
                                onClick={() => setActiveFilter('hackathons')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'hackathons' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
                            >
                                Hackathons
                            </button>
                            <button
                                onClick={() => setActiveFilter('podcasts')}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${activeFilter === 'podcasts' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark'} transition-colors`}
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
                    <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl group">
                        <img
                            alt="Abstract 3D Shape"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYeXjw703MgKy3MDti6HenoycVrGTFysM9tB_3xb2xuGAHoGGONkgB-UHfFFqEhJFR5wlmgiQFqLhH4RQDESOHziucxYOwpnqQNveW_5L-a7C-Kdh_xAnyyMi_KJ8vB8zohtoUEQlcMUBmaNY6myIQBPG2HxO604XfUEN9OB3yhnbfB7luHQuXh4t1_pRp0xoKcLnHspUHYXbpbFd_JMMkp__RKx9asjWnBmiFOpYXS84dpSn4DF0eFdPU1KzP8J3_yAhwVfgNJNI"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-gray-900 dark:via-gray-900/90 dark:to-transparent flex flex-col justify-center p-8 md:p-12 w-full md:w-2/3">
                            <div className="flex gap-2 mb-4">
                                <span className="px-2 py-1 bg-primary text-white text-[10px] uppercase font-bold tracking-wider rounded-md">Featured</span>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-primary text-[10px] uppercase font-bold tracking-wider rounded-md flex items-center gap-1">
                                    <span className="material-icons text-[10px]">videocam</span> Online Summit
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                                Future of Learning: AI <br /> Integration Summit 2024
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-md line-clamp-2">
                                Join industry leaders as we explore the intersection of artificial intelligence and cognitive learning systems.
                            </p>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-50 dark:bg-gray-800 rounded-lg text-primary">
                                        <span className="material-icons-outlined text-lg">calendar_today</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase font-semibold">Date</span>
                                        <span className="text-xs font-bold text-gray-900 dark:text-white">Oct 24, 2024</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-50 dark:bg-gray-800 rounded-lg text-primary">
                                        <span className="material-icons-outlined text-lg">schedule</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-500 uppercase font-semibold">Time</span>
                                        <span className="text-xs font-bold text-gray-900 dark:text-white">09:00 AM EST</span>
                                    </div>
                                </div>
                            </div>
                            <button className="self-start px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all">
                                RSVP Now
                            </button>
                        </div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold">Upcoming Sessions</h3>
                            <a className="text-xs font-medium text-primary hover:text-primary-dark flex items-center gap-1" href="#">
                                View Full Calendar <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Event Card 1 */}
                            <div className="bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        alt="Abstract Network"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-mGzkjQl8S3KaXEs1NaZFhqd2Lk6hZlBGfJbKNXoC17Tesz1oh02YXqC7wivXiKkZAnGsk08pgi4JX6tEYnnBv1Myfi5HmTZ7irwA5clyRcS9qjyUD76ssEC-zBBdHDbO7T1gul-LKtZAK6IKIbwiq8Vchz_FtTATdoIi7qm2Vz3dFHp8Rrexl8LQPNgcEJp8_T99XgJgyrkAa5hccv0jEZoNcSdbXVGrdOxQhQKfvTWN25q9Hy8g_zr4hHYnRYlMhXuyJXNNuqo"
                                    />
                                    <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-white text-[10px] font-bold flex items-center gap-1">
                                        <span className="material-icons text-[10px] text-orange-400">place</span> NYC, USA
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold text-primary">Offline Workshop</span>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                            <span className="material-icons-outlined text-lg">bookmark_border</span>
                                        </button>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Design Systems in 2025</h4>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-2 mb-4">
                                        A hands-on workshop dissecting the anatomy of modern scalable UI kits.
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex -space-x-2">
                                            <img alt="Attendee" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiJJU4BsaEcev6zYS0NqtnheCXY1ptlJcKI49wqgVzJmtkBlozG0An6CE54Hmwkt42Iz7a3-m14-qRyNbrZduUU4AxoaboQ3r83LB7-FqUUUF8KOTreJ4QcvKi0K_SRZiWAdHKzCnRBL5TOeiQshUibl3PkpOyJdLFM-2KHCgvrOzoa7zhZKUmrlmao6vJHh1siyTzMAzFPTphGSZ0DvO1_zRdBRNwc51XriKHkr-5557D8U0PeUuxKRaX3_UHNfKygGUlNKB6Sc0" />
                                            <img alt="Attendee" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjzQGCt5vGM_NRar1S6DMn69HQH3-YcZ7H_dKcFkTFV0MEoJLSKLSfQBD2x71R5EqA9s0ErqHquOUNmU1N3Lbuo0i6nzISSVq-vtFvgVwJ4ySTQb25_42ArfUxUM90wT-cw0J7uPBh3WYndUGJDa5HVI32KosWC38c4i-CATJAeADR45wHJaH1UyQmujt_cCdh-aYBuhySDjHx2AQY0Y0vUAKdHol_fImsoq72PnjUq4FbrG_Gd2O7UNzK1-SZpYmsWtchDUjRwE" />
                                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">+18</div>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">Nov 12</span>
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        alt="Code Background"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJdX3g1a0apMSMO40oHraXSaHQAQa5upnKZq09FUfq5C_gMMOufaxEE6XdUQLUDYqrGc85Eb2lbH5nPtWU1bG4hpz2Ocn6XafxZjuyPYXqrkUdbtD6sNjhKnucs-6W4lYDEkAGCWr3qaE0Shj0d5Dwzc_HAi5C3IZ8OTRdwFyESBoH8bcOiL32gqgFSs_mMambBoz6BIzmXoGy006tzvG5It1MrtQ9GilTJtMvxzS-s6IQEq5ZTavbMjbDseEnnfJJNw4BKboRYc"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-icons text-white text-4xl">play_circle_outline</span>
                                    </div>
                                    <div className="absolute top-3 left-3 px-2 py-1 bg-purple-600/80 backdrop-blur-sm rounded-md text-white text-[10px] font-bold flex items-center gap-1">
                                        <span className="material-icons text-[10px]">mic</span> Podcast
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold text-purple-500">Live Recording</span>
                                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                            <span className="material-icons-outlined text-lg">bookmark_border</span>
                                        </button>
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Cognitive Load & UI</h4>
                                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-2 mb-4">
                                        Episode 4: Discussing how to reduce mental strain through better interface choices.
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                            Hosted by <span className="font-semibold text-gray-900 dark:text-white">Sarah Chen</span>
                                        </span>
                                        <span className="text-xs font-semibold text-gray-900 dark:text-gray-100">Tomorrow, 4 PM</span>
                                    </div>
                                </div>
                            </div>
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

            {/* Footer */}
            <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-card-dark">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark">
                        <span className="material-icons text-primary text-base">school</span>
                        <span>© 2024 Learning OS Inc.</span>
                    </div>
                    <div className="flex gap-6 text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">Terms of Service</a>
                        <a className="hover:text-primary" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
