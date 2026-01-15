export default function TopicProjectIdeas() {
    const projects = [
        { title: "Build a Real-time Chat App", difficulty: "Intermediate", tech: ["React", "Socket.io", "Node.js"] },
        { title: "ML Image Classifier", difficulty: "Advanced", tech: ["Python", "TensorFlow", "Flask"] },
        { title: "CI/CD Pipeline Automation", difficulty: "Advanced", tech: ["Docker", "GitHub Actions", "Kubernetes"] },
        { title: "Personal Portfolio Website", difficulty: "Beginner", tech: ["HTML", "CSS", "JavaScript"] }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Project Ideas by Topic</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-card border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                                    project.difficulty === 'Intermediate' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                                        'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                }`}>
                                {project.difficulty}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <button className="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
