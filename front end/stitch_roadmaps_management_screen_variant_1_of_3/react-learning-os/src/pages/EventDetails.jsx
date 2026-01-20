import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { events } from '../data/mockData';

export default function EventDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const foundEvent = events.find(e => e.id === id);
        if (foundEvent) {
            setEvent(foundEvent);
        }
    }, [id]);

    if (!event) {
        return (
            <div className="flex h-screen items-center justify-center flex-col gap-4">
                <p>Event not found or loading...</p>
                <button
                    onClick={() => navigate('/events')}
                    className="text-primary hover:underline"
                >
                    Back to Events
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
                onClick={() => navigate('/events')}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-6 transition-colors"
            >
                <span className="material-icons-outlined text-sm">arrow_back</span>
                Back to Events
            </button>

            <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 shadow-card border border-slate-100 dark:border-slate-700">
                <div className="w-full h-64 rounded-2xl mb-6 overflow-hidden relative">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
                            {event.category}
                        </span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{event.title}</h1>

                <div className="flex flex-wrap gap-6 mb-8 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-icons-outlined text-primary">event</span>
                        <span className="font-medium text-slate-900 dark:text-white">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-icons-outlined text-primary">schedule</span>
                        <span className="font-medium text-slate-900 dark:text-white">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-icons-outlined text-primary">place</span>
                        <span className="font-medium text-slate-900 dark:text-white">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-icons-outlined text-primary">person</span>
                        <span className="font-medium text-slate-900 dark:text-white">Host: {event.host}</span>
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8 text-slate-600 dark:text-slate-300">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">About this Event</h3>
                    <p>{event.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
                    <button className="flex-1 px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                        Register Now
                    </button>
                    <button className="flex-1 px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors active:scale-95 flex items-center justify-center gap-2">
                        <span className="material-icons-outlined">share</span>
                        Share Event
                    </button>
                </div>
            </div>
        </div>
    );
}
