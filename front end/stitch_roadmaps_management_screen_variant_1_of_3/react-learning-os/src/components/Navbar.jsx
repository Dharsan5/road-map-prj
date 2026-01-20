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
        <nav className="sticky top-0 z-50 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <span className="material-icons-round text-primary">school</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                            Learning OS
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-light dark:text-muted-dark">
                        <Link to="/" className="hover:text-primary transition-colors">
                            Dashboard
                        </Link>
                        <Link to="/roadmaps" className="text-primary">
                            Roadmaps
                        </Link>
                        <Link to="/tech-feed" className="hover:text-primary transition-colors">
                            Daily Feed
                        </Link>
                        <Link to="/events" className="hover:text-primary transition-colors">
                            Events
                        </Link>
                        <Link to="/community" className="hover:text-primary transition-colors">
                            Community
                        </Link>
                    </div>

                    {/* Right Side - Dark Mode Toggle + Profile */}
                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <span className="material-icons-round text-yellow-500">light_mode</span>
                            ) : (
                                <span className="material-icons-round text-slate-700">dark_mode</span>
                            )}
                        </button>

                        {/* Profile Button */}
                        <Link
                            to="/profile"
                            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-primary/30"
                        >
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
