import React from 'react';
import { Search, SlidersHorizontal, Download, Share2, Plus, Menu } from 'lucide-react';
import { AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const Header = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Top Row: Search & Profile Actions */}
      <div className="flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="w-full bg-white rounded-full py-3.5 pl-12 pr-4 text-[13px] font-medium text-gray-700 placeholder:text-gray-300 focus:outline-none shadow-search"
          />
        </div>

        {/* Top Right Actions */}
        <div className="flex items-center gap-4">
          {/* Profile Toggle Pill */}
          <div className="bg-white rounded-full p-1 pl-4 pr-1 flex items-center gap-4 shadow-avatar-pill cursor-pointer hover:shadow-md transition-shadow h-12 border border-border-subtle">
            <Menu size={18} className="text-gray-600" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&h=100&q=80" alt="Landscape" className="w-10 h-10 rounded-full object-cover" />
          </div>
          {/* Red Plus Button */}
          <button className="w-12 h-12 bg-[#E93C68] rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 hover:bg-[#d62f5b] hover:scale-105 transition-all">
            <Plus size={24} />
          </button>
        </div>
      </div>

      {/* Second Row: Team Members & Page Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
        {/* Left: Team Members */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Add Member Button */}
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-button-elevated text-gray-400 hover:text-gray-600 border border-border-subtle hover:border-gray-200 transition-all">
            <Plus size={20} />
          </button>

          {/* Member Pills */}
          {[
            { name: 'Armin A.', img: AVATAR_1 },
            { name: 'Eren Y.', img: AVATAR_2 },
            { name: 'Mikasa A.', img: AVATAR_3 }
          ].map((user, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white pl-1 pr-4 py-1 rounded-full shadow-avatar-pill cursor-pointer hover:shadow-md transition-shadow border border-border-subtle">
              <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm font-bold text-gray-700">{user.name}</span>
            </div>
          ))}

          {/* C Logo Button */}
          <button className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center shadow-sm text-white font-bold text-lg hover:bg-black transition-colors">
            C
          </button>
        </div>

        {/* Right: Page Actions */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Download size={18} />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Third Row: Title & Timeframe */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4">
        <h1 className="text-4xl md:text-[3.5rem] font-bold text-[#D1D5DB] tracking-tight leading-none">New report</h1>

        <div className="flex items-center gap-4">
          {/* Toggle Switch */}
          <div className="flex items-center gap-3 bg-white/50 p-1 rounded-full pr-3 backdrop-blur-sm md:bg-transparent md:p-0">
            <div className="w-11 h-6 bg-[#1F2937] rounded-full flex items-center p-1 cursor-pointer transition-colors hover:bg-black">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm transform translate-x-0"></div>
            </div>
            <span className="text-sm font-bold text-gray-700">Timeframe</span>
          </div>

          {/* Date Dropdown */}
          <button className="bg-[#E5E7EB] hover:bg-gray-300 text-gray-900 text-sm font-bold px-5 py-2.5 rounded-full cursor-pointer transition-colors flex items-center gap-2">
            Sep 1 – Nov 30, 2023
            <SlidersHorizontal size={14} className="rotate-90 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;