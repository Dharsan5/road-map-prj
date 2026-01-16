export default function AboutLobbora() {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full max-w-5xl px-4 sm:px-8 pt-16 pb-12 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary mb-6">
                    <span className="material-symbols-outlined text-sm">info</span>
                    <span>Our Story</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                    About LOBBORA
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    The Operating System for your Learning Journey. We bring order to the chaos of modern knowledge management.
                </p>
            </section>

            {/* Content Stack */}
            <div className="w-full max-w-4xl px-4 sm:px-8 pb-24 flex flex-col gap-8">
                {/* Card 1: What is LOBBORA? */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is LOBBORA?</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                LOBBORA is a comprehensive ecosystem designed for managing knowledge in the digital age. We provide the essential tools to organize, track, and master your learning journey amidst a cluttered digital world. Think of it as the central nervous system for everything you learn, read, and want to achieve.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2: Why We Built LOBBORA */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="size-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-purple-600 text-3xl">lightbulb</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why We Built LOBBORA</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">We identified critical gaps in the modern learning landscape that were hindering true progress.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Combat Information Overload:</strong> Too much content, not enough context. We filter the noise.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Need for Structure:</strong> Learning requires a path, not just a library. We provide the map.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Fragmented Tools:</strong> Notes here, videos there. We unify your resources into one OS.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3: Our Mission */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="size-12 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-green-600 text-3xl">target</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Simplify Education:</strong> Remove the friction from the learning process so you can focus on absorbing information.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Empower Self-Learners:</strong> Give autodidacts the enterprise-grade tools usually reserved for universities.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">arrow_forward</span>
                                    <span className="text-gray-700 dark:text-gray-200"><strong>Provide Deep Analytics:</strong> Help you understand how you learn best through data and insights.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 4: Who It Is For */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="size-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-orange-600 text-3xl">groups</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Who It Is For</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                                    <span className="material-symbols-outlined text-primary">school</span>
                                    <span className="font-medium text-gray-800 dark:text-gray-200">Students</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                                    <span className="material-symbols-outlined text-primary">business_center</span>
                                    <span className="font-medium text-gray-800 dark:text-gray-200">Professionals</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                                    <span className="font-medium text-gray-800 dark:text-gray-200">Lifelong Learners</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-lg bg-background-light dark:bg-background-dark/50">
                                    <span className="material-symbols-outlined text-primary">domain</span>
                                    <span className="font-medium text-gray-800 dark:text-gray-200">Institutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-white dark:bg-slate-800 py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlhcq1atHj7QUugW0CXndhPqm-uopEDl3G-5mohypDSZm6gWuEILvw_pUwjyd-t5F4DqWqB_Jg7AlzAYpDgEDiMSFAJU957aRhsXyQ8pt36mJ-7hbvMHdUgehUwQzieSQwlxAi2BnyQtjfD6cVV0fdJyaUY8QLYdKz2W0ugNTUsLkkG6LiUU2K3EYO7zEp5fNAaHYgOyQR3mKIoajsKhGFHkZii-tMxwXfWQ9rdkKrxXsxXveXcFYAUOmULY7LzXUH-IaTyMrSewU"
                                alt="Students studying together around a table with laptops"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-left">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to organize your mind?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            Join thousands of learners who have upgraded their operating system. Stop gathering information and start mastering it.
                        </p>
                        <button className="bg-primary hover:bg-blue-600 text-white font-bold h-12 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all hover:scale-105">
                            Start Learning Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
