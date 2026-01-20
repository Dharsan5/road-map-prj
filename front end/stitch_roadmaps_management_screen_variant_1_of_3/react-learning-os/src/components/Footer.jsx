export default function Footer() {
    return (
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
    );
}
