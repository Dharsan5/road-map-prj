export default function Footer() {
    return (
        <footer className="mt-auto border-t border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div>
                    © 2024 Learning OS Inc. Intelligent Systems.
                </div>
                <div className="flex gap-6">
                    <a className="hover:text-primary transition-colors" href="#">Privacy Neural</a>
                    <a className="hover:text-primary transition-colors" href="#">Data Nodes</a>
                    <a className="hover:text-primary transition-colors" href="#">Support</a>
                </div>
            </div>
        </footer>
    );
}
