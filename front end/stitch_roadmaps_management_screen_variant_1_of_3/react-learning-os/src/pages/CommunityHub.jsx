import { useState } from 'react';

export default function CommunityHub() {
    const [activeTab, setActiveTab] = useState('trending');

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans antialiased min-h-screen flex flex-col transition-colors duration-200">
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Community Hub</h1>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark">Connect with peers, share knowledge, and grow together.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">
                            <span className="material-icons-outlined text-lg">filter_list</span>
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition shadow-lg shadow-primary/20">
                            <span className="material-icons-round text-lg">add</span>
                            New Post
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Create Post Card */}
                        <div className="bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-soft border border-border-light dark:border-border-dark">
                            <div className="flex gap-4">
                                <img
                                    alt="Current user"
                                    className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7JwvCo5bqqrIocBlw5QOXZpqAsa5geLcusKleh-DZcpSRkNxHlD3jDubxSEmq36B8sbwtsewZ3tIY8Fdak_KYgLNHwUF0wtZ20UT6Io0_oCDEMyAcHCfJxe6AUHJ1b8IWfLdlN-IEKg0DLpChOPQ0o_ptQgQcoZYJTormT8dnjn-5ahN5wBJzmrtkT4noVraCZTu1TnW8fYexyAn_tzwnuV8CZO4L0S0_pi-GUZ8ffJ9G1tseP6TRB8sQ7GdUVB9GTVkYkefWzvU"
                                />
                                <div className="flex-grow">
                                    <input
                                        className="w-full bg-gray-50 dark:bg-gray-900 border-border-light dark:border-border-dark rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition mb-3"
                                        placeholder="Share your knowledge or ask a doubt..."
                                        type="text"
                                    />
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 text-text-secondary-light dark:text-text-secondary-dark">
                                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition">
                                                <span className="material-icons-outlined text-lg">image</span>
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition">
                                                <span className="material-icons-outlined text-lg">code</span>
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition">
                                                <span className="material-icons-outlined text-lg">link</span>
                                            </button>
                                        </div>
                                        <button className="px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-md text-sm font-medium transition">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-border-light dark:border-border-dark">
                            <nav className="-mb-px flex space-x-6 overflow-x-auto no-scrollbar">
                                <button
                                    onClick={() => setActiveTab('trending')}
                                    className={`border-b-2 ${activeTab === 'trending' ? 'border-primary text-primary' : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'} whitespace-nowrap pb-3 px-1 text-sm font-medium`}
                                >
                                    Trending
                                </button>
                                <button
                                    onClick={() => setActiveTab('newest')}
                                    className={`border-b-2 ${activeTab === 'newest' ? 'border-primary text-primary' : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'} whitespace-nowrap pb-3 px-1 text-sm font-medium`}
                                >
                                    Newest
                                </button>
                                <button
                                    onClick={() => setActiveTab('unanswered')}
                                    className={`border-b-2 ${activeTab === 'unanswered' ? 'border-primary text-primary' : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'} whitespace-nowrap pb-3 px-1 text-sm font-medium`}
                                >
                                    Unanswered
                                </button>
                                <button
                                    onClick={() => setActiveTab('saved')}
                                    className={`border-b-2 ${activeTab === 'saved' ? 'border-primary text-primary' : 'border-transparent text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'} whitespace-nowrap pb-3 px-1 text-sm font-medium`}
                                >
                                    Saved
                                </button>
                            </nav>
                        </div>

                        {/* Post 1 */}
                        <article className="bg-card-light dark:bg-card-dark rounded-xl p-5 shadow-soft border border-border-light dark:border-border-dark flex gap-4 transition hover:shadow-md">
                            <div className="flex flex-col items-center gap-1 pt-1 min-w-[2rem]">
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition">
                                    <span className="material-icons-round">arrow_upward</span>
                                </button>
                                <span className="font-bold text-gray-900 dark:text-white text-sm">42</span>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition">
                                    <span className="material-icons-round">arrow_downward</span>
                                </button>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">@alex_dev</span>
                                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">• 2 hours ago</span>
                                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium border border-red-200 dark:border-red-800">Help Needed</span>
                                    <button className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                        <span className="material-icons-outlined text-lg">more_horiz</span>
                                    </button>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                                    Best practices for React Server Components state management?
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4 leading-relaxed">
                                    I'm migrating a large dashboard to Next.js 14 and struggling to decide where to keep global state when mixing server and client components. Should I stick to Zustand or rely more on URL params?
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark text-xs border border-border-light dark:border-border-dark">#reactjs</span>
                                    <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark text-xs border border-border-light dark:border-border-dark">#nextjs</span>
                                    <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark text-xs border border-border-light dark:border-border-dark">#frontend</span>
                                </div>
                                <div className="flex items-center gap-6 border-t border-border-light dark:border-border-dark pt-3">
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">chat_bubble_outline</span>
                                        12 Comments
                                    </button>
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">share</span>
                                        Share
                                    </button>
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">bookmark_border</span>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Post 2 with Image */}
                        <article className="bg-card-light dark:bg-card-dark rounded-xl p-5 shadow-soft border border-border-light dark:border-border-dark flex gap-4 transition hover:shadow-md">
                            <div className="flex flex-col items-center gap-1 pt-1 min-w-[2rem]">
                                <button className="text-primary hover:text-primary-hover transition">
                                    <span className="material-icons-round">arrow_upward</span>
                                </button>
                                <span className="font-bold text-gray-900 dark:text-white text-sm">128</span>
                                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition">
                                    <span className="material-icons-round">arrow_downward</span>
                                </button>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">@sarah_systems</span>
                                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">• 5 hours ago</span>
                                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-800">Discussion</span>
                                    <button className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                        <span className="material-icons-outlined text-lg">more_horiz</span>
                                    </button>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                                    The hidden costs of Microservices nobody talks about
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-4 leading-relaxed">
                                    We recently moved from a monolith to microservices and our infra costs tripled. While scalability is great, the overhead of observability, networking, and team coordination is massive.
                                </p>
                                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 group cursor-pointer">
                                    <img
                                        alt="Network visualization abstract pattern"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJzIrC1PSH9VBHQbh7NZHKp6DJXXUSJj7_GkRxp2leeSTnTAgkd-BToNCkuuWp6SKs7x026Xe1AaWzryCkXFJ3Egyw3m3v9z9-eMQ0sUZOJofE47wFoSlbpd8ua8QXclCKL8OYXpKZBPoxmJPmCHhC0hZJVVNfsBZuxjLHRC4W_EWmB3nMWt3xI-f6oz-svh9Qmo_z1pxoENDas4y8_AvOibxx0HvfeGvHgGfObFTo7Kq3VBbuW1TEKP307ztsbybH-n_0lp78i38"
                                    />
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium">
                                        Read full case study
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 border-t border-border-light dark:border-border-dark pt-3">
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">chat_bubble_outline</span>
                                        45 Comments
                                    </button>
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">share</span>
                                        Share
                                    </button>
                                    <button className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark text-sm hover:text-primary transition group">
                                        <span className="material-icons-outlined text-lg group-hover:scale-110 transition">bookmark_border</span>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Peer Teaching */}
                        <div className="bg-card-light dark:bg-card-dark rounded-xl p-5 shadow-soft border border-border-light dark:border-border-dark">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-round text-primary text-xl">school</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Peer Teaching</h3>
                                </div>
                                <a className="text-xs font-semibold text-primary hover:underline" href="#">View All</a>
                            </div>
                            <div className="space-y-4">
                                {/* Mentor 1 */}
                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <img
                                            alt="Elena R."
                                            className="h-10 w-10 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0P8hVgwZAUYE80PQwDUY95nmCgQb8vcfz3Jg2naqWOz9LGayjNYk6yhVNBpWAtd00Xll7gsZBmsRvzN6dGepo6sCoHsVmqfYsdKhXcLqWhw41Day5q6OzIBD1lJE1hlxfX2e4BmxvRUut787C3ppqYCjWCHVQY3rNfklRyx4l0Q6-UL7AfA70o9vWUt-N-m_RGYj4Tsmmfu8tCEgBpIsCxS8mnM_3Y0twO-3cQS155p0_vC-4r-XB3kFi30RPI0HtQ8w_QdIDOI8"
                                        />
                                        <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Elena R.</h4>
                                                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-0.5">Python & ML Expert</p>
                                                <div className="flex items-center gap-1 text-xs text-yellow-500">
                                                    <span className="material-icons-round text-[14px]">star</span>
                                                    <span className="font-medium text-gray-600 dark:text-gray-300">4.9</span>
                                                    <span className="text-gray-400">(120 sessions)</span>
                                                </div>
                                            </div>
                                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">Free</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mentor 2 */}
                                <div className="flex items-start gap-3">
                                    <div className="relative">
                                        <img
                                            alt="Marcus J."
                                            className="h-10 w-10 rounded-full object-cover border border-gray-100 dark:border-gray-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMYYr84j4JGTkkTiQOKPAnfiDEvrEqQ6sZnsvM-v-8-Ho948lMqzkwA0EKN9eIcZvQJG_fLTL3ZDAIL4JixCfJRlti57jMusSoK7z9K_eIim6pFfVfhWNUpyyMqRPCgqM9LzTLes0X8NH93A8nTi6fkf8EefvRyWMJNmUgfmaAuQsCyHjs1X0_lT4hHGIror73ByEKq_Tn9pJ2NNwE237q3IeTQmIXPWzqZJytklIZG5pnUsf5yaAEq1K5j5Om1vLAca2H-tpTg4s"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Marcus J.</h4>
                                                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-0.5">System Design Mentor</p>
                                                <div className="flex items-center gap-1 text-xs text-yellow-500">
                                                    <span className="material-icons-round text-[14px]">star</span>
                                                    <span className="font-medium text-gray-600 dark:text-gray-300">5.0</span>
                                                    <span className="text-gray-400">(42 sessions)</span>
                                                </div>
                                            </div>
                                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold px-2 py-0.5 rounded-full">$15/hr</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-5 py-2 border border-primary border-dashed rounded-lg text-primary text-sm font-medium hover:bg-primary/5 transition flex items-center justify-center gap-1">
                                <span className="material-icons-round text-base">add</span>
                                Become a Mentor
                            </button>
                        </div>

                        {/* Study Groups */}
                        <div className="bg-card-light dark:bg-card-dark rounded-xl p-5 shadow-soft border border-border-light dark:border-border-dark">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons-round text-primary text-xl">groups</span>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Study Groups</h3>
                                </div>
                                <a className="text-xs font-semibold text-primary hover:underline" href="#">Find More</a>
                            </div>
                            <div className="space-y-4">
                                {/* Group 1 */}
                                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-border-light dark:border-border-dark">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Rustacean Builders</h4>
                                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                    </div>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">Advanced borrow-checking concepts</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            <img alt="Member" className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkXfJpMyzpfVxglcGBeQ6FbOa3KcuYztST5ZfCFOJ24zKL166jWEOPjMKHcGq6djx7MXZ7Pt6O6QahMvFzECew06in-upRGXoqmfdjy8NjMGo8-PS2SfSFFdpYSzUCUxfDr4x7R4I0j7FIjCniWY6QBq6VTdFuFAo-GVQ52QvLC1lSA_Z4iP3vwJxSQVCw2zxQBR6VBtws1dHAVwI1SwSABl4QNd5u4hIV3a1LuH3AOmLrAmEu3l2jPIPBMsX4LsGre7af3EK189A" />
                                            <img alt="Member" className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGvcjqPuTigtdNoU8qFXEyBUALOSetEMS7c0xApXyakSEYthOYh4i7bcqUZgBXtZPYuSngyGLvG-nss8icAm-kDBJumpHVFKs0ur4gbL_-T8sG-dBlkyNKQsGtoMYg-8K8aGcKp8dGDNoHkvzzIqwWQAJSm3Cy9Z7jqqfs5JRaHDULDlpW0f5mHd6-tumv3IrUGHN4VHQRpRK6ox9IdmsIiESFXaAyyb1BlirNyy1Z4nOCWaYf4mlVz_oRNcKg2awb4WooZZgS-O8" />
                                            <div className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-600 dark:text-gray-300">+4</div>
                                        </div>
                                        <button className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-md hover:bg-primary-hover flex items-center gap-1 transition">
                                            <span className="material-icons-round text-[14px]">login</span>
                                            Join
                                        </button>
                                    </div>
                                </div>

                                {/* Group 2 */}
                                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-border-light dark:border-border-dark">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">LeetCode Grind 75</h4>
                                    </div>
                                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">Solving medium graphs</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            <img alt="Member" className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDajDDkz4jXCvf9Uze8w88FYrXl-f0SiJGSweqnvZ7JbTUdxjAe4qyW6AeZHZAnWHTndB0btVC190N28DhnlgEg4lHp5KU5AIJUfrLgADB0-rtfo4h-4ZVHjr2quBrqsVH4RdxmJbMDyXk4UQpIGRsWUXkonHolOuplpAAUr_nRGTs8TtSFdT3BtuKM5KWolSX5fBAIvsA5_tV6TFk1ebMclY64IEarOcv-_GMv2ASBEMAuuEDDgbAWUETCgPVT6eVrfrunpmb6NYs" />
                                            <div className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-600 dark:text-gray-300">+12</div>
                                        </div>
                                        <button className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/60 flex items-center gap-1 transition">
                                            <span className="material-icons-round text-[14px]">keyboard_return</span>
                                            Enter
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-lg shadow-gray-900/20 dark:shadow-white/10">
                                Create New Group
                            </button>
                        </div>

                        {/* Trending Topics */}
                        <div className="bg-card-light dark:bg-card-dark rounded-xl p-5 shadow-soft border border-border-light dark:border-border-dark">
                            <h3 className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider mb-3">Trending Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                <a className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition" href="#">#SystemDesign</a>
                                <a className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition" href="#">#AI_Engineering</a>
                                <a className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition" href="#">#CareerAdvice</a>
                                <a className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition" href="#">#Web3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-12 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">© 2024 Learning OS Inc. Community Guidelines apply.</p>
                    <div className="flex gap-6">
                        <a className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-900 dark:hover:text-white" href="#">Code of Conduct</a>
                        <a className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-900 dark:hover:text-white" href="#">Privacy</a>
                        <a className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-gray-900 dark:hover:text-white" href="#">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
