import React from 'react';
import { ChevronUp, ArrowUpRight, Instagram, Dribbble, Chrome, ShoppingBag } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { SALES_DYNAMIC_DATA, AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const SalesLeaderboard = () => {
  return (
    <div className="h-full flex flex-col relative">
        
        {/* Header Labels - Outside the pink card */}
        <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 px-6 mb-2 pl-8">
            <span className="w-32">Sales</span>
            <div className="flex items-center justify-end flex-1 gap-2 pr-4">
                <span className="w-20 text-left">Revenue</span>
                <span className="w-20 text-center">Leads</span>
                <span className="w-10 text-center">KPI</span>
                <span className="w-24 text-left pl-3">W/L</span>
                <span className="w-8"></span> 
            </div>
        </div>

        {/* Row 1: Armin A. - Outside pink card, floating white pill */}
        <div className="bg-white rounded-full p-2 pl-3 pr-2 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer mb-6 mx-1">
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
        <div className="bg-gradient-to-b from-[#FFF0F5] to-[#FFF5F7] rounded-[2.5rem] p-6 flex-1 flex flex-col gap-6 relative">
            
            {/* Row 2: Mikasa A. */}
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-full p-2 pl-3 pr-2 shadow-[0_4px_15px_-3px_rgba(233,60,104,0.15)] flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer">
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
                <div className="flex flex-wrap gap-2 pl-4">
                    <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-700">Top sales</span>
                        <span className="text-xs">💪</span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-700">Sales streak</span>
                        <span className="text-xs">🔥</span>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-[11px] font-bold text-gray-700">Top review</span>
                        <span className="text-xs">👍</span>
                    </div>
                </div>
            </div>

            {/* Work with platforms Section */}
            <div className="mt-2">
                 <div className="flex justify-between items-center mb-4 px-2">
                    <span className="font-bold text-sm text-gray-800">Work with platforms</span>
                    <div className="flex gap-2">
                        <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-md shadow-pink-200">
                            <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-white"></div> 3
                        </span>
                        <span className="bg-[#E93C68] text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-md shadow-pink-200">
                            $156,841
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-3 h-[180px]">
                    {/* Dribbble (Large Left) - Span 5 */}
                    <div className="col-span-5 bg-white p-5 rounded-[1.5rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <Dribbble size={20} className="text-[#E93C68]" />
                            <span className="font-bold text-xs text-gray-700">Dribbble</span>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 tracking-tight">45.3%</div>
                            <div className="text-sm font-bold text-gray-300">$71,048</div>
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 w-16 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#000,#000_10px,transparent_10px,transparent_20px)]"></div>
                    </div>

                    {/* Right Column Grid - Span 7 */}
                    <div className="col-span-7 grid grid-rows-3 gap-3">
                        {/* Instagram (Top Right) */}
                        <div className="row-span-2 grid grid-cols-2 gap-3">
                            <div className="bg-white p-4 rounded-[1.5rem] shadow-sm flex flex-col justify-between">
                                <div className="flex items-center gap-2">
                                    <Instagram size={18} className="text-orange-500" />
                                    <span className="font-bold text-[10px] text-gray-700">Instagram</span>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-gray-900">28.1%</div>
                                    <div className="text-[10px] font-bold text-gray-300">$44,072</div>
                                </div>
                            </div>

                            {/* Google & Dots */}
                            <div className="grid grid-rows-2 gap-3">
                                <div className="bg-white px-3 py-2 rounded-[1.2rem] shadow-sm flex flex-col justify-center">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <Chrome size={12} className="text-blue-500" /> 
                                        <span className="text-[10px] font-bold text-gray-700">Google</span>
                                    </div>
                                    <div className="flex items-baseline justify-between">
                                        <span className="text-[11px] font-bold text-gray-900">14.1%</span>
                                        <span className="text-[9px] font-bold text-gray-300">$22k</span>
                                    </div>
                                </div>
                                <div className="bg-white px-3 py-2 rounded-[1.2rem] shadow-sm flex flex-col justify-center">
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <div className="flex -space-x-1">
                                            <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                                            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-700">5.4%</span>
                                    </div>
                                    <div className="flex justify-end">
                                        <span className="text-[9px] font-bold text-gray-300">$8k</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other (Bottom Wide) */}
                        <div className="row-span-1 bg-white px-4 py-2 rounded-[1.2rem] shadow-sm flex items-center justify-between">
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
            <div className="flex-1 min-h-[160px] flex flex-col justify-end relative mt-2">
                <div className="flex justify-between items-center mb-2 px-2 absolute top-0 w-full">
                    <span className="font-bold text-sm text-gray-800">Sales dynamic</span>
                    <ArrowUpRight size={14} className="text-gray-400" />
                </div>

                <div className="h-28 w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={SALES_DYNAMIC_DATA}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#E93C68" stopOpacity={0.05}/>
                                <stop offset="95%" stopColor="#E93C68" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip cursor={false} content={<></>} />
                            <Area type="monotone" dataKey="value" stroke="#E93C68" strokeWidth={2.5} fillOpacity={1} fill="url(#colorValue)" />
                            <Area type="monotone" dataKey="value2" stroke="#FFC0CB" strokeWidth={2} strokeDasharray="4 4" fill="transparent" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Custom Timeline Track */}
                <div className="relative h-1.5 w-full bg-gradient-to-r from-[#E93C68] via-[#E93C68] to-[#86EFAC] rounded-full mx-1">
                     <div className="absolute -top-3 left-[28%] -translate-x-1/2 flex flex-col items-center gap-1">
                          <div className="w-5 h-5 bg-[#2563EB] rounded-md flex items-center justify-center border-[2px] border-white shadow-sm z-10">
                              <span className="text-white font-bold text-[8px]">Be</span>
                          </div>
                          <div className="w-2 h-2 bg-[#E93C68] rounded-full ring-2 ring-white"></div>
                     </div>

                     <div className="absolute -top-3 left-[52%] -translate-x-1/2 flex flex-col items-center gap-1">
                          <div className="w-5 h-5 bg-[#E93C68] rounded-full flex items-center justify-center border-[2px] border-white shadow-sm z-10">
                              <Dribbble size={10} className="text-white" />
                          </div>
                          <div className="w-2 h-2 bg-[#111111] rounded-full ring-2 ring-white"></div>
                     </div>

                     <div className="absolute -top-3 left-[85%] -translate-x-1/2 flex flex-col items-center gap-1">
                          <div className="w-5 h-5 rounded-full border-[2px] border-white shadow-sm z-10 relative">
                              <img src={AVATAR_2} className="w-full h-full rounded-full" />
                              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#E93C68] rounded-full border border-white flex items-center justify-center">
                                  <span className="text-[4px] text-white">★</span>
                              </div>
                          </div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full ring-2 ring-white"></div>
                     </div>
                </div>
            </div>

            {/* Footer Row: Eren Y. */}
            <div className="bg-white rounded-full p-2 pl-3 pr-2 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer mt-auto">
                <div className="flex items-center gap-3 w-32 shrink-0">
                    <img src={AVATAR_2} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Eren Y.</span>
                </div>
                
                <div className="flex items-center justify-end flex-1 gap-2">
                    <span className="w-20 font-bold text-sm text-gray-900 text-left">$117,115</span>
                    <div className="w-20 flex justify-center gap-1">
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">22</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-8 h-5 rounded-full flex items-center justify-center">84</span>
                    </div>
                    <span className="w-10 font-bold text-xs text-gray-800 text-center">0.79</span>
                    <div className="w-24 flex items-center gap-1.5 pl-3">
                        <span className="text-gray-600 font-bold text-[11px] w-8">32%</span>
                        <span className="bg-[#111111] text-white text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">7</span>
                        <span className="bg-[#F3F4F6] text-gray-500 text-[10px] font-bold w-6 h-5 rounded-full flex items-center justify-center">15</span>
                    </div>
                     <div className="w-8 h-8 ml-1"></div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default SalesLeaderboard;