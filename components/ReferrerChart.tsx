import React from 'react';
import { Filter, ChevronDown, Dribbble, Instagram, Chrome, ShoppingBag, BarChart2 } from 'lucide-react';

const ReferrerChart = () => {
    return (
        <div className="bg-[#F5F5F4] rounded-[2rem] p-6 h-full flex flex-col justify-between border-[4px] border-white shadow-none">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-gray-800">
                    {/* Chart Icon rotated */}
                    <div className="rotate-90">
                        <BarChart2 size={20} className="text-gray-700" />
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
                <button className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-button-elevated flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    Filters <Filter size={12} className="rotate-180" />
                </button>
            </div>

            {/* Chart Area */}
            <div className="flex-1 flex items-end justify-between gap-3 px-1 min-h-[200px] mb-6">
                {/* Define Stripes Pattern */}
                <svg className="absolute w-0 h-0">
                    <defs>
                        <pattern id="diagonalHatchGray" patternUnits="userSpaceOnUse" width="8" height="8">
                            <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#E5E7EB" strokeWidth="2" />
                        </pattern>
                    </defs>
                </svg>

                {/* Bar 1: Behance (Striped) */}
                <div className="w-full h-[55%] flex flex-col relative group cursor-pointer">
                    <div className="flex-1 rounded-[1.25rem] bg-white relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {/* Stripes Overlay */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #F3F4F6 5px, #F3F4F6 10px)' }}></div>

                        {/* Floating Logo */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="font-bold text-lg text-blue-600">Bē</span>
                        </div>
                    </div>
                </div>

                {/* Bar 2: Dribbble (Solid White, Tallest) */}
                <div className="w-full h-[85%] flex flex-col relative group cursor-pointer">
                    <div className="flex-1 rounded-[1.25rem] bg-white relative shadow-sm hover:shadow-md transition-shadow">
                        {/* Floating Logo */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2">
                            <Dribbble size={24} className="text-[#E93C68]" />
                        </div>
                    </div>
                </div>

                {/* Bar 3: Google (Solid White, Medium) */}
                <div className="w-full h-[45%] flex flex-col relative group cursor-pointer">
                    <div className="flex-1 rounded-[1.25rem] bg-white relative shadow-sm hover:shadow-md transition-shadow">
                        {/* Floating Logo */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2">
                            <Chrome size={22} className="text-green-500" />
                        </div>
                    </div>
                </div>

                {/* Bar 4: Instagram (Solid White, Small) */}
                <div className="w-full h-[30%] flex flex-col relative group cursor-pointer">
                    <div className="flex-1 rounded-[1.25rem] bg-white relative shadow-sm hover:shadow-md transition-shadow">
                        {/* Floating Logo */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2">
                            <Instagram size={22} className="text-orange-500" />
                        </div>
                    </div>
                </div>

                {/* Bar 5: Other (Striped, Tall) */}
                <div className="w-full h-[70%] flex flex-col relative group cursor-pointer">
                    <div className="flex-1 rounded-[1.25rem] bg-white relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {/* Stripes Overlay */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #F3F4F6 5px, #F3F4F6 10px)' }}></div>

                        {/* Floating Logo */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                            <ShoppingBag size={22} className="text-gray-800" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Title */}
            <div>
                <div className="text-gray-400 font-bold text-[13px] mb-0.5">Deals amount</div>
                <div className="text-gray-800 font-bold text-sm flex items-center gap-1 cursor-pointer hover:text-black">
                    by referrer category <ChevronDown size={14} className="text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default ReferrerChart;