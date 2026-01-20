import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function LearningPathDashboard() {
    const navigate = useNavigate();
    const { pathId } = useParams();

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-300 min-h-screen flex flex-col font-display selection:bg-primary/20">
            {/* MAIN */}
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* BREADCRUMB */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        <button onClick={() => navigate('/')} className="hover:text-primary">Home</button> /
                        <button onClick={() => navigate('/roadmaps')} className="hover:text-primary"> Roadmaps</button> /{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Full Stack Developer
                        </span>
                    </div>
                    <span className="text-xs bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full">
                        Last active: 2 hours ago
                    </span>
                </div>

                {/* ACTIVE TRACK */}
                <section className="bg-white dark:bg-surface-dark rounded-[2rem] p-10 shadow-soft border border-gray-100 dark:border-gray-800 mb-12 relative overflow-hidden">
                    <h2 className="text-4xl font-extrabold mb-4 text-gradient">
                        Full Stack Developer
                    </h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark max-w-xl mb-6">
                        Master the MERN stack and modern web architecture. Build scalable
                        applications from scratch to deployment.
                    </p>

                    <div className="flex gap-3 flex-wrap">
                        {["Frontend + Backend", "Intermediate", "Project-Based"].map(
                            (tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            )
                        )}
                    </div>
                </section>

                {/* MODULES */}
                <section>
                    <h3 className="text-2xl font-bold mb-6">Learning Modules</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "HTML5 Semantic Structure", done: true },
                            { title: "Advanced CSS & Layouts", done: true },
                            { title: "JavaScript ES6+", progress: 60 },
                            { title: "React & State Management", locked: true },
                            { title: "Node.js & Express", locked: true },
                            { title: "Database Design", locked: true },
                        ].map((m) => (
                            <article
                                key={m.title}
                                className={`rounded-[1.25rem] p-6 border flex flex-col transition-all ${m.locked
                                        ? "bg-gray-50/80 dark:bg-surface-dark/40 opacity-80"
                                        : "bg-white dark:bg-surface-dark shadow-sm hover:shadow-xl hover:-translate-y-1"
                                    }`}
                            >
                                <h4 className="text-xl font-bold mb-3">{m.title}</h4>
                                <p className="text-sm text-text-muted-light dark:text-text-muted-dark flex-1">
                                    Module description goes here.
                                </p>

                                {m.progress && (
                                    <div className="mt-6">
                                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary"
                                                style={{ width: `${m.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {m.done && (
                                    <span className="mt-4 text-xs font-bold text-green-600">
                                        ✓ Completed
                                    </span>
                                )}

                                {m.locked && (
                                    <span className="mt-4 text-xs font-bold text-gray-400">
                                        🔒 Locked
                                    </span>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
