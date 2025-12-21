import React from 'react';
import { ChevronUp, ArrowUpRight, Instagram, Dribbble, Chrome, ShoppingBag, Star } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid, XAxis } from 'recharts';
import { SALES_DYNAMIC_DATA, AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const SalesLeaderboard = () => {
    return (
        <div className="h-full flex flex-col relative w-full overflow-hidden">

            {/* Header Labels - Grid Layout */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_0.6fr_1fr_0.2fr] xl:grid-cols-[1.8fr_1.2fr_1.2fr_0.8fr_1.4fr_0.4fr] gap-2 items-center text-[10px] xl:text-[11px] font-bold text-gray-400 mb-2 px-4 border-x border-transparent">
                <span className="pl-2">Sales</span>
                <span className="text-left">Revenue</span>
                <span className="text-center">Leads</span>
                <span className="text-center">KPI</span>
                <span className="text-left pl-2">W/L</span>
                <span></span>
            </div>

            {/* Row 1: Armin A. */}
            <div className="bg-white rounded-full py-2 px-4 shadow-card-secondary border border-transparent grid grid-cols-[1.5fr_1fr_1fr_0.6fr_1fr_0.2fr] xl:grid-cols-[1.8fr_1.2fr_1.2fr_0.8fr_1.4fr_0.4fr] gap-2 items-center hover:shadow-md transition-shadow cursor-pointer mb-6 relative z-10">
                <div className="flex items-center gap-3 min-w-0">
                    <img src={AVATAR_1} className="w-8 h-8 xl:w-10 xl:h-10 rounded-full object-cover shrink-0" />
                    <span className="font-bold text-sm text-gray-800 truncate">Armin A.</span>
                </div>

                <span className="font-bold text-[13px] text-gray-900 text-left truncate">$209,633</span>

                <div className="flex justify-center gap-1">
                    <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center shrink-0">41</span>
                    <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-7 h-5 rounded-full flex items-center justify-center shrink-0">118</span>
                </div>

                <span className="font-bold text-xs text-gray-800 text-center">0.84</span>

                <div className="flex items-center gap-1 pl-2">
                    <span className="text-gray-600 font-bold text-[11px] w-7 text-right">31%</span>
                    <span className="bg-[#111111] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">12</span>
                    <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">29</span>
                </div>

                <div></div>
            </div>

            {/* The Pink Card Container */}
            <div className="bg-gradient-to-b from-[#FFF0F5] to-[#FFF5F7] rounded-[2.5rem] py-6 flex-1 flex flex-col gap-6 relative">

                {/* Row 2: Mikasa A. */}
                <div className="flex flex-col gap-3 px-2">
                    <div className="py-2 px-2 border border-transparent grid grid-cols-[1.5fr_1fr_1fr_0.6fr_1fr_0.2fr] xl:grid-cols-[1.8fr_1.2fr_1.2fr_0.8fr_1.4fr_0.4fr] gap-2 items-center cursor-pointer">
                        <div className="flex items-center gap-3 min-w-0">
                            <img src={AVATAR_3} className="w-8 h-8 xl:w-10 xl:h-10 rounded-full object-cover shrink-0" />
                            <span className="font-bold text-sm text-gray-800 truncate">Mikasa A.</span>
                        </div>

                        <span className="font-bold text-[13px] text-gray-900 text-left truncate">$156,841</span>

                        <div className="flex justify-center gap-1">
                            <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center shrink-0">54</span>
                            <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-7 h-5 rounded-full flex items-center justify-center shrink-0">103</span>
                        </div>

                        <span className="font-bold text-xs text-gray-800 text-center">0.89</span>

                        <div className="flex items-center gap-1 pl-2">
                            <span className="text-gray-600 font-bold text-[11px] w-7 text-right">39%</span>
                            <span className="bg-[#111111] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">21</span>
                            <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">33</span>
                        </div>

                        {/* Red Button */}
                        <div className="flex justify-end">
                            <div className="w-8 h-8 bg-[#E93C68] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform shrink-0">
                                <ChevronUp size={20} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 px-4">
                        <div className="bg-white px-3 py-1.5 rounded-full shadow-pill flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-[11px] font-bold text-gray-700">Top sales</span>
                            <span className="text-xs">💪</span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-full shadow-pill flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-[11px] font-bold text-gray-700">Sales streak</span>
                            <span className="text-xs">🔥</span>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-full shadow-pill flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-[11px] font-bold text-gray-700">Top review</span>
                            <span className="text-xs">👍</span>
                        </div>
                    </div>
                </div>

                {/* Work with platforms Section */}
                <div className="mt-2 px-6">
                    <div className="flex justify-between items-center mb-4 px-2">
                        <span className="font-bold text-sm text-gray-800">Work with platforms</span>
                        <div className="flex gap-2">
                            <span className="bg-[#E93C68] text-white text-[11px] font-bold px-3 py-1.5 rounded-2xl flex items-center gap-0.5 shadow-md shadow-pink-200/50">
                                <ChevronUp size={12} strokeWidth={3} /> 3
                            </span>
                            <span className="bg-[#E93C68] text-white text-[11px] font-bold px-3 py-1.5 rounded-2xl shadow-md shadow-pink-200/50">
                                $156,841
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 h-auto xl:h-[180px]">
                        {/* Dribbble (Large Left) */}
                        <div className="xl:col-span-6 bg-white p-5 rounded-[1.5rem] shadow-card-primary relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                            <div className="flex items-center gap-2">
                                <Dribbble size={20} className="text-[#E93C68]" />
                                <span className="font-bold text-xs text-gray-700">Dribbble</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-gray-900 tracking-tight">45.3%</span>
                                <span className="text-3xl font-bold text-gray-300">$71,048</span>
                            </div>
                            <div className="absolute top-0 right-0 bottom-0 w-24 opacity-[0.08] bg-[repeating-linear-gradient(-45deg,#E93C68,#E93C68_10px,transparent_10px,transparent_20px)] pointer-events-none"></div>
                        </div>

                        {/* Right Column Grid */}
                        <div className="xl:col-span-6 grid grid-rows-3 gap-3">
                            {/* Instagram (Top Right) */}
                            <div className="row-span-2 grid grid-cols-2 gap-3 min-w-0">
                                <div className="bg-white p-2.5 rounded-[1.5rem] shadow-card-primary flex flex-col justify-between overflow-hidden min-w-0 max-w-full">
                                    <div className="flex items-center gap-2">
                                        <Instagram size={18} className="text-orange-500 shrink-0" />
                                        <span className="font-bold text-[10px] text-gray-700 truncate">Instagram</span>
                                    </div>
                                    <div className="mt-auto flex flex-col xl:flex-row xl:items-baseline gap-0.5 xl:gap-2 min-w-0 max-w-full">
                                        <div className="text-lg xl:text-xl font-bold text-gray-900 leading-none tracking-tight">28.1%</div>
                                        <div className="text-lg xl:text-xl font-bold text-gray-400 tracking-tight truncate whitespace-nowrap">$44,072</div>
                                    </div>
                                </div>

                                {/* Google & Dots */}
                                <div className="grid grid-rows-2 gap-3">
                                    <div className="bg-white px-3 py-3 rounded-[1.2rem] shadow-card-primary flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(-45deg,#E93C68,#E93C68_5px,transparent_5px,transparent_10px)] pointer-events-none"></div>
                                        <div className="flex items-center gap-1.5 relative z-10">
                                            <Chrome size={14} className="text-blue-500 shrink-0" />
                                            <span className="text-[11px] font-bold text-gray-800">Google</span>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-baseline gap-0.5 relative z-10 mt-1">
                                            <span className="text-xs font-bold text-gray-900">14.1%</span>
                                            <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">$22k</span>
                                        </div>
                                    </div>
                                    <div className="bg-white px-3 py-3 rounded-[1.2rem] shadow-card-primary flex items-center gap-2">
                                        <div className="flex -space-x-1 shrink-0">
                                            <div className="w-3 h-3 bg-black rounded-full border border-white"></div>
                                            <div className="w-3 h-3 bg-gray-300 rounded-full border border-white"></div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:items-baseline gap-0.5 min-w-0">
                                            <span className="text-xs font-bold text-gray-800 leading-none">5.4%</span>
                                            <span className="text-[10px] font-bold text-gray-400 font-medium truncate">$8k</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other (Bottom Wide) */}
                            <div className="row-span-1 bg-white px-4 py-2 rounded-[1.2rem] shadow-card-primary flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <ShoppingBag size={14} className="text-gray-600" />
                                    <span className="text-[11px] font-bold text-gray-700">Other</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-gray-900">7.1%</span>
                                    <span className="text-[10px] font-bold text-gray-300">$11k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sales Dynamic Chart */}
                <div className="flex-1 min-h-[160px] flex flex-col justify-end relative mt-8 px-6">
                    <div className="flex justify-between items-center mb-2 px-2 w-full">
                        <span className="font-bold text-sm text-gray-800">Sales dynamic</span>
                        <ArrowUpRight size={14} className="text-gray-400" />
                    </div>

                    <div className="h-32 w-full mb-4 -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={SALES_DYNAMIC_DATA} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#E93C68" stopOpacity={0.05} />
                                        <stop offset="95%" stopColor="#E93C68" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={true} horizontal={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    orientation="top"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: '#D1D5DB', fontWeight: 600 }}
                                    interval={0}
                                />
                                <Tooltip cursor={false} content={<></>} />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#E93C68"
                                    strokeWidth={3.5}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                    activeDot={{ r: 5, fill: '#E93C68', stroke: 'white', strokeWidth: 2 }}
                                    dot={{ r: 0 }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value2"
                                    stroke="#FF9EAA"
                                    strokeWidth={1.5}
                                    strokeDasharray="3 3"
                                    fill="transparent"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Custom Timeline Track - Grid Aligned */}
                    <div className="relative mt-4 mb-2 px-4">
                        {/* Gradient Background Line */}
                        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1.5 bg-[linear-gradient(90deg,#E93C68_0%,#F97316_30%,#FACC15_60%,#4ADE80_100%)] rounded-full opacity-80"></div>

                        {/* Flex Container for Markers - Grid-Like Spacing */}
                        {/* We use the same grid columns to align the markers */}
                        <div className="grid grid-cols-[1.5fr_1fr_1fr_0.6fr_1fr_0.2fr] xl:grid-cols-[1.8fr_1.2fr_1.2fr_0.8fr_1.4fr_0.4fr] gap-2 items-center w-full z-10 relative">
                            {/* Empty Left */}
                            <div></div>

                            {/* Revenue Marker (Blue) */}
                            <div className="flex justify-start pl-1">
                                <div className="w-5 h-5 bg-[#2563EB] rounded-md flex items-center justify-center border-[3px] border-white shadow-sm z-10 cursor-pointer hover:scale-110 transition-transform relative">
                                    <span className="text-white font-bold text-[9px] tracking-tighter leading-none">Be</span>
                                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E93C68] rounded-full border border-white flex items-center justify-center z-20">
                                        <ChevronUp size={8} className="text-white" strokeWidth={4} />
                                    </div>
                                </div>
                            </div>

                            {/* Leads Marker (Pink) */}
                            <div className="flex justify-center">
                                <div className="w-5 h-5 bg-[#E93C68] rounded-full flex items-center justify-center border-[3px] border-white shadow-sm z-10 cursor-pointer hover:scale-110 transition-transform relative">
                                    <Dribbble size={10} className="text-white" />
                                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#111111] rounded-full border border-white flex items-center justify-center z-20">
                                        <div className="rotate-180"><ChevronUp size={8} className="text-white" strokeWidth={4} /></div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty KPI */}
                            <div></div>

                            {/* W/L Marker (Star) */}
                            <div className="flex justify-end pr-2">
                                <div className="w-5 h-5 rounded-full border-[3px] border-white shadow-sm z-10 relative overflow-visible cursor-pointer hover:scale-110 transition-transform">
                                    <img src={AVATAR_2} className="w-full h-full rounded-full object-cover" />
                                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E93C68] rounded-full border border-white flex items-center justify-center z-20">
                                        <Star size={5} fill="white" className="text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Empty End */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 3: Eren Y. - Grid Layout */}
            <div className="bg-white rounded-full py-2 px-4 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] border border-gray-100/50 grid grid-cols-[1.5fr_1fr_1fr_0.6fr_1fr_0.2fr] xl:grid-cols-[1.8fr_1.2fr_1.2fr_0.8fr_1.4fr_0.4fr] gap-2 items-center hover:shadow-md transition-shadow cursor-pointer mt-6 relative z-10 w-full box-border min-w-0">
                <div className="flex items-center gap-3 min-w-0">
                    <img src={AVATAR_2} className="w-8 h-8 xl:w-10 xl:h-10 rounded-full object-cover shrink-0" />
                    <span className="font-bold text-sm text-gray-800 truncate whitespace-nowrap">Eren Y.</span>
                </div>

                <span className="font-bold text-[13px] text-gray-900 text-left truncate whitespace-nowrap">$117,115</span>

                <div className="flex justify-center gap-1 min-w-0">
                    <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center shrink-0">22</span>
                    <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-7 h-5 rounded-full flex items-center justify-center shrink-0">84</span>
                </div>

                <span className="font-bold text-xs text-gray-800 text-center truncate whitespace-nowrap">0.79</span>

                <div className="flex items-center gap-1 pl-2 min-w-0">
                    <span className="text-gray-600 font-bold text-[11px] w-7 text-right truncate whitespace-nowrap">32%</span>
                    <span className="bg-[#111111] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">7</span>
                    <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">15</span>
                </div>

                <div></div>
            </div>
        </div >
    );
};

export default SalesLeaderboard;