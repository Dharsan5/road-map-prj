import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-12">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-icons-outlined text-xl">grid_view</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">OS:LEARN</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-1">
                            <Link className="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg" to="/">Dashboard</Link>
                            <Link className="px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" to="/roadmaps">Roadmaps</Link>
                            <Link className="px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" to="/events">Events</Link>
                            <Link className="px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" to="/community">Community</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-outlined text-slate-400 text-lg">search</span>
                            </span>
                            <input
                                className="pl-10 pr-12 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary placeholder-slate-400 w-64 transition-all"
                                placeholder="Search modules, events..."
                                type="text"
                            />
                            <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded">⌘K</kbd>
                            </span>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        >
                            <span className="material-icons-outlined">
                                {darkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                            <span className="material-icons-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <div className="w-9 h-9 rounded-full bg-orange-200 border-2 border-white dark:border-slate-700 overflow-hidden cursor-pointer">
                            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOLS3a-gjhMOkoFWpUq0itSKGleUe9wj-QX3zKRuv9x0UGZlE9cuvAxYIcXBdusQEjS2_Lh_OYu3DRrMhMYuZzD6DwXVzEMOQm59L2j4sTFafCZe8_3QEeueWvF7zLRGnmgsIG0BLeZ72JGU_ZMGlaG81uv6Cxz7pqWuXhjRsJuh8Qe5Ztrc_F2BbDXVlk8qqngGPPX_d9FDRzL_jqc07os3g6En_gvRijaO2arZ1nY2xMPHoG_Vr1SS9U2FNP0B1SlQ-nFibQHYE" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
