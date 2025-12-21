import React from 'react';
import { Search, Plus, Menu } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="flex items-center justify-between gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                </div>
                <input
                    type="text"
                    placeholder='Try searching "insights"'
                    className="w-full bg-white rounded-full py-3.5 pl-12 pr-4 text-[13px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none shadow-search"
                />
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-4">
                {/* Profile Toggle Pill */}
                <div className="bg-white rounded-full p-1 pl-4 pr-1 flex items-center gap-4 shadow-avatar-pill cursor-pointer hover:shadow-md transition-shadow h-12">
                    <Menu size={18} className="text-gray-600" />
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&h=100&q=80" alt="Landscape" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                </div>
                {/* Red Plus Button */}
                <button className="w-12 h-12 bg-[#E93C68] rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-[#d62f5b] hover:scale-105 transition-all">
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
};

export default TopBar;
