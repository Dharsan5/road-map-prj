import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateSession() {
    const navigate = useNavigate();
    const [maxParticipants, setMaxParticipants] = useState(8);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        navigate('/sessions');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Schedule a Collaborative Session</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Define the parameters for your group learning event.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Event Title & Description */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="event-title">
                                Event Title
                            </label>
                            <input
                                className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-lg py-3 px-4 placeholder-gray-400"
                                id="event-title"
                                name="event-title"
                                placeholder="e.g., Advanced React Patterns Study Group"
                                type="text"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                Session Purpose
                            </label>
                            <div className="flex flex-wrap gap-3">
                                <label className="relative flex items-center justify-center px-5 py-2.5 rounded-lg border-2 border-primary bg-primary/10 dark:bg-primary/20 text-primary font-medium cursor-pointer shadow-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-all">
                                    <input defaultChecked className="sr-only" name="purpose" type="radio" value="study" />
                                    <span className="material-icons-outlined text-lg mr-2">school</span>
                                    <span>Study session</span>
                                </label>
                                <label className="relative flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium cursor-pointer shadow-sm hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all">
                                    <input className="sr-only" name="purpose" type="radio" value="build" />
                                    <span className="material-icons-outlined text-lg mr-2">construction</span>
                                    <span>Build session</span>
                                </label>
                                <label className="relative flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium cursor-pointer shadow-sm hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all">
                                    <input className="sr-only" name="purpose" type="radio" value="doubt" />
                                    <span className="material-icons-outlined text-lg mr-2">help_outline</span>
                                    <span>Doubt-clearing</span>
                                </label>
                                <label className="relative flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium cursor-pointer shadow-sm hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all">
                                    <input className="sr-only" name="purpose" type="radio" value="revision" />
                                    <span className="material-icons-outlined text-lg mr-2">history_edu</span>
                                    <span>Revision</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-3 px-4 resize-none placeholder-gray-400"
                                id="description"
                                name="description"
                                placeholder="Describe the goals and agenda of this session..."
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    {/* Context & Logistics */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Context */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col h-full">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="material-icons-outlined text-primary text-2xl">hub</span>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Context</h2>
                            </div>
                            <div className="space-y-6 flex-grow">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="roadmap">
                                        Linked Roadmap or Topic
                                    </label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="material-icons-outlined text-gray-400">search</span>
                                        </span>
                                        <input
                                            className="block w-full pl-10 pr-3 py-3 rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm placeholder-gray-400"
                                            id="roadmap"
                                            placeholder="Search for a topic (e.g. 'Advanced Algorithms')"
                                            type="text"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                        Linking a topic helps recommend this event to interested students.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-3">
                                        Join Permissions
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <label className="relative flex flex-col p-4 border-2 border-primary bg-primary/5 dark:bg-primary/10 rounded-xl cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 transition-all">
                                            <input defaultChecked className="sr-only" name="permissions" type="radio" value="open" />
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="material-icons-outlined text-gray-700 dark:text-gray-200">lock_open</span>
                                                <span className="material-icons-outlined text-primary text-xl">check_circle</span>
                                            </div>
                                            <span className="font-semibold text-gray-900 dark:text-white text-sm">Open to All</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                                                Anyone with the link or in the group can join instantly.
                                            </span>
                                        </label>
                                        <label className="relative flex flex-col p-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-xl cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all">
                                            <input className="sr-only" name="permissions" type="radio" value="approval" />
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="material-icons-outlined text-gray-500 dark:text-gray-400">verified_user</span>
                                            </div>
                                            <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Approval Required</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                                                Host must approve each request to join.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logistics */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col h-full">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="material-icons-outlined text-primary text-2xl">schedule</span>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Logistics</h2>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="date">
                                        Event Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-3 px-4"
                                            id="date"
                                            placeholder="mm/dd/yyyy"
                                            type="date"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="start-time">
                                            Start Time
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-3 px-4"
                                                id="start-time"
                                                type="time"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2" htmlFor="end-time">
                                            End Time
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm py-3 px-4"
                                                id="end-time"
                                                type="time"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                            Max Participants
                                        </label>
                                        <span className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-xs font-bold rounded-md">
                                            {maxParticipants} People
                                        </span>
                                    </div>
                                    <input
                                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                        max="50"
                                        min="2"
                                        type="range"
                                        value={maxParticipants}
                                        onChange={(e) => setMaxParticipants(e.target.value)}
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        <span>2</span>
                                        <span>50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                        <Link to="/sessions">
                            <button className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" type="button">
                                Cancel
                            </button>
                        </Link>
                        <button className="inline-flex items-center px-8 py-3 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-[1.02]" type="submit">
                            Publish Event
                            <span className="material-icons-outlined ml-2 text-lg">arrow_forward</span>
                        </button>
                    </div>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                        By creating an event, you agree to our <a className="underline hover:text-primary" href="#">Community Guidelines</a>.
                    </p>
                </form>
            </main>
        </div>
    );
}
