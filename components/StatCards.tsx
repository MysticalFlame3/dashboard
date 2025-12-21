import React from 'react';
import { TrendingUp, ArrowRight, ChevronRight, ArrowDown, ChevronDown, Star, ChevronsUp, ChevronsDown } from 'lucide-react';
import { AVATAR_3 } from '../constants';

const StatCards = () => {
    return (
        <div className="mb-8 w-full">
            {/* Container: Flex row to align Revenue and Cards side-by-side on large screens */}
            <div className="flex flex-col xl:flex-row xl:items-start gap-6 w-full">

                {/* Revenue Section */}
                <div className="flex flex-col justify-start shrink-0 xl:w-auto w-full pt-1">
                    <h2 className="text-base font-bold text-gray-800 mb-1">Revenue</h2>

                    {/* Main Content Row: Big Number + Pills */}
                    <div className="flex items-center gap-3 mb-1">
                        <div className="flex items-baseline text-[#111111] tracking-tighter leading-none">
                            <span className="text-[2.5rem] font-extrabold">$528,976</span>
                            <span className="text-[2.5rem] font-bold text-gray-300">.82</span>
                        </div>

                        <div className="flex items-center gap-2 transform translate-y-1">
                            <span className="bg-[#E93C68] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm shadow-pink-200">
                                <div className="bg-white/20 rounded-full p-[1px]">
                                    <TrendingUp size={8} strokeWidth={3} />
                                </div>
                                7.9%
                            </span>
                            <span className="bg-[#E93C68] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm shadow-pink-200 flex items-baseline gap-0.5">
                                $27,335<span className="opacity-70">.09</span>
                            </span>
                        </div>
                    </div>

                    {/* Footer Row: Tightly packed text matching image constraint */}
                    <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                        <span className="text-gray-500 text-[11px] font-bold">vs prev.</span>
                        <span className="text-gray-900 text-[11px] font-bold">$501,641.73</span>
                        <span className="text-gray-400 text-[11px] font-bold flex items-center gap-1">
                            Jun 1 - Aug 31, 2023 <ChevronDown size={12} className="text-gray-400" />
                        </span>
                    </div>
                </div>

                {/* Cards Scroll Container */}
                <div className="flex-1 flex items-stretch xl:justify-end gap-3 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 w-full xl:w-auto no-scrollbar min-w-0">

                    {/* Top Sales - Stacked Card */}
                    <div className="relative group min-w-[140px] w-full max-w-[180px]">
                        {/* Ghost Layer - Background */}
                        <div className="absolute top-2 left-2.5 w-full h-full bg-[#F2F2F2] rounded-[1.5rem] -z-10 shadow-[0_16px_32px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] border border-transparent"></div>

                        {/* Main Card - Foreground */}
                        <div className="relative z-10 bg-white rounded-[1.5rem] p-4 h-full flex flex-col justify-between cursor-pointer border border-gray-100 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5">
                            <div className="flex justify-between items-start">
                                <span className="text-[11px] font-bold text-gray-500">Top sales</span>
                            </div>
                            <div className="mt-2 mb-3">
                                <span className="text-2xl font-bold text-gray-900">72</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <img src={AVATAR_3} alt="Mikasa" className="w-5 h-5 rounded-full object-cover" />
                                    <span className="text-[11px] font-bold text-gray-700">Mikasa</span>
                                </div>
                                <button className="w-6 h-6 bg-[#F5F5F4] rounded-full flex items-center justify-center text-gray-600 transition-colors shadow-pill group-hover:bg-white">
                                    <ChevronRight size={12} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Best Deal - Stacked Card */}
                    <div className="relative group min-w-[140px] w-full max-w-[180px]">
                        {/* Ghost Layer - Background */}
                        <div className="absolute top-2 left-2.5 w-full h-full bg-[#F2F2F2] rounded-[1.5rem] -z-10 shadow-[0_16px_32px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04)] border border-transparent"></div>

                        {/* Main Card - Foreground */}
                        <div className="relative z-10 bg-[#111111] bg-gradient-to-br from-[#111] to-[#222] rounded-[1.5rem] p-4 h-full flex flex-col justify-between text-white cursor-pointer overflow-hidden transition-transform hover:-translate-y-0.5 border border-[#222] shadow-[0_2px_8px_0_rgba(0,0,0,0.2)]">
                            <div className="flex justify-between items-start z-10">
                                <span className="text-[11px] font-bold text-gray-400">Best deal</span>
                                <Star size={12} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                            </div>
                            <div className="mt-2 mb-3 z-10">
                                <span className="text-2xl font-bold">$42,300</span>
                            </div>
                            <div className="flex items-center justify-between z-10">
                                <span className="text-[11px] font-bold text-gray-400">Rolf Inc.</span>
                                <button className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black transition-colors shadow-pill group-hover:bg-gray-200">
                                    <ChevronRight size={12} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Deals - Vertical Card */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-card-secondary min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                        <span className="text-[11px] font-bold text-gray-800">Deals</span>
                        <span className="bg-gray-300 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-pill">256</span>
                        <div className="text-[10px] font-bold text-gray-700 flex items-center gap-0.5">
                            <ChevronsDown size={12} strokeWidth={3} /> 5
                        </div>
                    </div>

                    {/* Value - Vertical Card (Pink Border) */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-card-secondary min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 relative hover:shadow-md transition-shadow cursor-pointer border border-[#E93C68]">
                        <span className="text-[11px] font-bold text-gray-800">Value</span>
                        <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-pill">528k</span>
                        <div className="text-[10px] font-bold text-gray-700 flex items-center gap-0.5">
                            <ChevronsUp size={12} strokeWidth={3} /> 7.9%
                        </div>
                    </div>

                    {/* Win Rate - Vertical Card */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-card-secondary min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
                        <span className="text-[11px] font-bold text-gray-800">Win rate</span>
                        <span className="bg-gray-300 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-pill">44%</span>
                        <div className="text-[10px] font-bold text-gray-700 flex items-center gap-0.5">
                            <ChevronsUp size={12} strokeWidth={3} /> 1.2%
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatCards;