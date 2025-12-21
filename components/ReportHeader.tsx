import React from 'react';
import { SlidersHorizontal, Download, Upload, Plus } from 'lucide-react';
import { AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const ReportHeader = () => {
    return (
        <div className="flex flex-col gap-6 mb-8">
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
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <Download size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <Upload size={18} />
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

export default ReportHeader;
