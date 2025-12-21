import React from 'react';
import { TrendingUp, ArrowRight, ChevronRight, ArrowDown, ChevronDown, Star } from 'lucide-react';
import { AVATAR_3 } from '../constants';

const StatCards = () => {
    return (
        <div className="mb-8 w-full">
            {/* Container: Flex row to align Revenue and Cards side-by-side on large screens */}
            <div className="flex flex-col xl:flex-row xl:items-start gap-6 w-full">

                {/* Revenue Section */}
                <div className="flex flex-col justify-start shrink-0 xl:w-auto w-full pt-1">
                    <h2 className="text-sm font-bold text-gray-800 mb-1">Revenue</h2>

                    {/* Number Row - Big Number + Badges inline */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <div className="flex items-baseline text-[#111111] tracking-tighter leading-none">
                            <span className="text-[3.25rem] font-extrabold">$528,976</span>
                            <span className="text-[2.5rem] font-bold text-gray-300">.82</span>
                        </div>

                        <div className="flex items-center gap-2 transform translate-y-1">
                            <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-0.5 shadow-sm shadow-pink-200">
                                <div className="bg-white/20 rounded-full p-[1px]">
                                    <TrendingUp size={8} strokeWidth={3} />
                                </div>
                                7.9%
                            </span>
                            <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm shadow-pink-200">
                                $27,335.09
                            </span>
                        </div>
                    </div>

                    {/* Footer Text */}
                    <div className="text-gray-500 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer hover:text-gray-700 whitespace-nowrap mt-1">
                        vs prev. <span className="text-gray-900">$501,641.73</span>
                        <span className="text-gray-400">Jun 1 - Aug 31, 2023</span>
                        <ChevronDown size={12} className="text-gray-400" />
                    </div>
                </div>

                {/* Cards Scroll Container */}
                <div className="flex-1 flex items-stretch xl:justify-end gap-3 overflow-x-auto xl:overflow-visible pb-2 xl:pb-0 w-full xl:w-auto no-scrollbar">

                    {/* Top Sales - White Card */}
                    <div className="bg-white rounded-[1.25rem] p-4 shadow-sm min-w-[140px] w-full max-w-[180px] flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all">
                        <div className="flex justify-between items-start">
                            <span className="text-[11px] font-bold text-gray-400">Top sales</span>
                        </div>
                        <div className="mt-2 mb-3">
                            <span className="text-2xl font-bold text-gray-900">72</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <img src={AVATAR_3} alt="Mikasa" className="w-5 h-5 rounded-full object-cover" />
                                <span className="text-[11px] font-bold text-gray-700">Mikasa</span>
                            </div>
                            <button className="w-6 h-6 bg-[#F5F5F4] rounded-full flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                                <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Best Deal - Black Card */}
                    <div className="bg-[#111111] rounded-[1.25rem] p-4 shadow-sm min-w-[140px] w-full max-w-[180px] flex flex-col justify-between text-white group cursor-pointer hover:shadow-xl transition-all relative overflow-hidden">
                        <div className="flex justify-between items-start z-10">
                            <span className="text-[11px] font-bold text-gray-400">Best deal</span>
                            <Star size={12} className="text-gray-600 group-hover:text-yellow-400 transition-colors" />
                        </div>
                        <div className="mt-2 mb-3 z-10">
                            <span className="text-2xl font-bold">$42,300</span>
                        </div>
                        <div className="flex items-center justify-between z-10">
                            <span className="text-[11px] font-bold text-gray-400">Rolf Inc.</span>
                            <button className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black group-hover:bg-gray-200 transition-colors">
                                <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Deals - Vertical Card */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-sm min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-800">Deals</span>
                        <span className="bg-[#F5F5F4] text-gray-600 text-[10px] font-bold px-2.5 py-1 rounded-full">256</span>
                        <div className="text-[10px] font-bold text-gray-400 flex items-center gap-0.5">
                            <ArrowDown size={10} /> 5
                        </div>
                    </div>

                    {/* Value - Vertical Card (Pink) */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-sm min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 border border-pink-100 relative hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-800">Value</span>
                        <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm shadow-pink-200">528k</span>
                        <div className="text-[10px] font-bold text-gray-500 flex items-center gap-0.5">
                            <TrendingUp size={10} /> 7.9%
                        </div>
                    </div>

                    {/* Win Rate - Vertical Card */}
                    <div className="bg-white rounded-[1.25rem] p-2.5 shadow-sm min-w-[90px] w-full max-w-[110px] flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-800">Win rate</span>
                        <span className="bg-[#F5F5F4] text-gray-600 text-[10px] font-bold px-2.5 py-1 rounded-full">44%</span>
                        <div className="text-[10px] font-bold text-gray-500 flex items-center gap-0.5">
                            <TrendingUp size={10} /> 1.2%
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatCards;