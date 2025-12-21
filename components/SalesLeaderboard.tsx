import React from 'react';
import { ChevronUp, ArrowUpRight, Instagram, Dribbble, Chrome, ShoppingBag, Star } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid, XAxis } from 'recharts';
import { SALES_DYNAMIC_DATA, AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const SalesLeaderboard = () => {
    return (
        <div className="h-full flex flex-col relative">

            {/* Header Labels - Aligned with the 'Armin' row below */}
            <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 mb-2 p-2 pl-3 pr-2 border-x border-transparent">
                <span className="w-32 pl-10">Sales</span> {/* Added pl-10 to align text with Name after Avatar space */}
                <div className="flex items-center justify-end flex-1 gap-2">
                    <span className="w-20 text-left">Revenue</span>
                    <span className="w-20 text-center">Leads</span>
                    <span className="w-10 text-center">KPI</span>
                    <span className="w-24 text-left pl-3">W/L</span>
                    <span className="w-8"></span>
                </div>
            </div>

            {/* Row 1: Armin A. - Outside pink card, floating white pill */}
            <div className="bg-white rounded-full p-2 pl-3 pr-2 shadow-card-secondary flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer mb-6">
                <div className="flex items-center gap-3 w-32 shrink-0">
                    <img src={AVATAR_1} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Armin A.</span>
                </div>

                <div className="flex items-center justify-end flex-1 gap-2">
                    <span className="w-20 font-bold text-sm text-gray-900 text-left">$209,633</span>

                    <div className="w-20 flex justify-center gap-1">
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-7 h-5 rounded-full flex items-center justify-center">41</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-9 h-5 rounded-full flex items-center justify-center">118</span>
                    </div>

                    <span className="w-10 font-bold text-xs text-gray-800 text-center">0.84</span>

                    <div className="w-24 flex items-center gap-1.5 pl-3">
                        <span className="text-gray-600 font-bold text-[11px] w-8">31%</span>
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">12</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">29</span>
                    </div>

                    {/* Spacer to align with button column */}
                    <div className="w-8 h-8 ml-1"></div>
                </div>
            </div>

            {/* The Pink Card Container - Starts from Mikasa */}
            <div className="bg-gradient-to-b from-[#FFF0F5] to-[#FFF5F7] rounded-[2.5rem] py-6 flex-1 flex flex-col gap-6 relative">

                {/* Row 2: Mikasa A. */}
                <div className="flex flex-col gap-3">
                    <div className="p-2 pl-3 pr-2 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3 w-32 shrink-0">
                            <img src={AVATAR_3} className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Mikasa A.</span>
                        </div>

                        <div className="flex items-center justify-end flex-1 gap-2">
                            <span className="w-20 font-bold text-sm text-gray-900 text-left">$156,841</span>

                            <div className="w-20 flex justify-center gap-1">
                                <span className="bg-[#111111] text-white text-[10px] font-bold w-7 h-5 rounded-full flex items-center justify-center">54</span>
                                <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-9 h-5 rounded-full flex items-center justify-center">103</span>
                            </div>

                            <span className="w-10 font-bold text-xs text-gray-800 text-center">0.89</span>

                            <div className="w-24 flex items-center gap-1.5 pl-3">
                                <span className="text-gray-600 font-bold text-[11px] w-8">39%</span>
                                <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">21</span>
                                <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">33</span>
                            </div>

                            {/* Red Button with Straight Up Arrow */}
                            <div className="w-8 h-8 bg-[#E93C68] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform ml-1 shrink-0">
                                <ChevronUp size={20} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pl-4 px-6">
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

                    <div className="grid grid-cols-12 gap-3 h-[180px]">
                        {/* Dribbble (Large Left) - Span 6 */}
                        <div className="col-span-6 bg-white p-5 rounded-[1.5rem] shadow-card-primary relative overflow-hidden flex flex-col justify-between">
                            <div className="flex items-center gap-2">
                                <Dribbble size={20} className="text-[#E93C68]" />
                                <span className="font-bold text-xs text-gray-700">Dribbble</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-gray-900 tracking-tight">45.3%</span>
                                <span className="text-xl font-bold text-gray-300">$71,048</span>
                            </div>
                            <div className="absolute top-0 right-0 bottom-0 w-24 opacity-[0.08] bg-[repeating-linear-gradient(-45deg,#E93C68,#E93C68_10px,transparent_10px,transparent_20px)] pointer-events-none"></div>
                        </div>

                        {/* Right Column Grid - Span 6 */}
                        <div className="col-span-6 grid grid-rows-3 gap-3">
                            {/* Instagram (Top Right) */}
                            <div className="row-span-2 grid grid-cols-2 gap-3">
                                <div className="bg-white p-4 rounded-[1.5rem] shadow-card-primary flex flex-col justify-between">
                                    <div className="flex items-center gap-2">
                                        <Instagram size={18} className="text-orange-500" />
                                        <span className="font-bold text-[10px] text-gray-700">Instagram</span>
                                    </div>
                                    <div className="mt-auto flex items-baseline gap-1">
                                        <div className="text-lg font-bold text-gray-900 leading-none tracking-tighter">28.1%</div>
                                        <div className="text-lg font-bold text-gray-400 tracking-tighter">$44,072</div>
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
                                        <div className="flex items-baseline gap-1 relative z-10 mt-1">
                                            <span className="text-[13px] font-bold text-gray-900">14.1%</span>
                                            <span className="text-[11px] font-bold text-gray-400 whitespace-nowrap">$22,114</span>
                                        </div>
                                    </div>
                                    <div className="bg-white px-3 py-3 rounded-[1.2rem] shadow-card-primary flex items-center gap-2">
                                        <div className="flex -space-x-1 shrink-0">
                                            <div className="w-3 h-3 bg-black rounded-full border border-white"></div>
                                            <div className="w-3 h-3 bg-gray-300 rounded-full border border-white"></div>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[13px] font-bold text-gray-800 leading-none">5.4%</span>
                                            <span className="text-[11px] font-bold text-gray-400 font-medium">$8,469</span>
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
                                    <span className="text-[10px] font-bold text-gray-300">$11,135</span>
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

                    {/* Custom Timeline Track - Flexbox Aligned to Columns */}
                    <div className="relative mt-4 mb-2 pl-3 pr-2">
                        {/* Gradient Background Line */}
                        <div className="absolute top-1/2 left-2 right-2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#E93C68] to-[#4ADE80] rounded-full opacity-80"></div>

                        {/* Flex Container for Markers - Mirrors Footer Structure exactly */}
                        <div className="relative flex items-center justify-between w-full z-10">
                            {/* Left Spacer (matches Avatar+Name column) */}
                            <div className="w-32 shrink-0"></div>

                            {/* Right Columns Group */}
                            <div className="flex items-center justify-end flex-1 gap-2">
                                {/* Revenue Column Marker (Be - Blue) - ALIGNED LEFT with Text */}
                                <div className="w-20 flex justify-start relative pl-1">
                                    <div className="w-5 h-5 bg-[#2563EB] rounded-md flex items-center justify-center border-[3px] border-white shadow-sm z-10 cursor-pointer hover:scale-110 transition-transform relative">
                                        <span className="text-white font-bold text-[9px] tracking-tighter loading-none">Be</span>
                                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E93C68] rounded-full border border-white flex items-center justify-center z-20">
                                            <ChevronUp size={8} className="text-white" strokeWidth={4} />
                                        </div>
                                    </div>
                                </div>

                                {/* Leads Column Marker (Dribbble - Pink) - ALIGNED CENTER with Pills */}
                                <div className="w-20 flex justify-center relative">
                                    <div className="w-5 h-5 bg-[#E93C68] rounded-full flex items-center justify-center border-[3px] border-white shadow-sm z-10 cursor-pointer hover:scale-110 transition-transform relative">
                                        <Dribbble size={10} className="text-white" />
                                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#111111] rounded-full border border-white flex items-center justify-center z-20">
                                            <div className="rotate-180"><ChevronUp size={8} className="text-white" strokeWidth={4} /></div>
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Column Spacer - Empty */}
                                <div className="w-10"></div>

                                {/* W/L Column Marker (Avatar - Star) */}
                                <div className="w-24 flex justify-end relative pr-4">
                                    <div className="w-5 h-5 rounded-full border-[3px] border-white shadow-sm z-10 relative overflow-visible cursor-pointer hover:scale-110 transition-transform">
                                        <img src={AVATAR_2} className="w-full h-full rounded-full object-cover" />
                                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E93C68] rounded-full border border-white flex items-center justify-center z-20">
                                            <Star size={5} fill="white" className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Edge Spacer */}
                                <div className="w-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 3: Eren Y. - Outside pink card, bottom separate row */}
            <div className="bg-white rounded-full p-2 pl-3 pr-2 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] border border-gray-100/50 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer mt-6">
                <div className="flex items-center gap-3 w-32 shrink-0">
                    <img src={AVATAR_2} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Eren Y.</span>
                </div>

                <div className="flex items-center justify-end flex-1 gap-2">
                    <span className="w-20 font-bold text-sm text-gray-900 text-left pl-1">$117,115</span>
                    <div className="w-20 flex justify-end gap-1 pr-8">
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">22</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-8 h-5 rounded-full flex items-center justify-center">84</span>
                    </div>
                    <div className="w-32 flex items-center justify-between px-4">
                        <span className="font-bold text-xs text-gray-800">0.79</span>
                        <span className="text-gray-600 font-bold text-[11px]">32%</span>
                    </div>
                    <div className="w-24 flex items-center justify-end gap-1.5 pr-4">
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">7</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">15</span>
                    </div>
                    <div className="w-8 h-8 ml-1"></div>
                </div>
            </div>
        </div >
    );
};

export default SalesLeaderboard;