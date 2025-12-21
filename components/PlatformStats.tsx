import React from 'react';
import { AlignLeft, Filter, ChevronDown, Dribbble, Instagram, Chrome } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { MONTHLY_REV_DATA, AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const PlatformStats = () => {
  // Static data to match screenshot exactly
  const platforms = [
      { name: "Dribbble", icon: <Dribbble size={20} className="text-[#E93C68]" />, amount: "$227,459", pct: "43%" },
      { name: "Instagram", icon: <Instagram size={20} className="text-[#E93C68]" />, amount: "$142,823", pct: "27%" },
      { name: "Behance", icon: <span className="font-bold text-lg text-blue-600">Bē</span>, amount: "$89,935", pct: "11%" },
      { name: "Google", icon: <Chrome size={20} className="text-green-500" />, amount: "$37,028", pct: "7%" },
  ];

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Top Card: Platform List */}
      <div className="bg-[#F5F5F4] rounded-[2rem] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-gray-700">
                <AlignLeft size={20} />
                <ChevronDown size={14} className="text-gray-400" />
            </div>
            <button className="bg-[#E5E7EB] px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm flex items-center gap-2 hover:bg-gray-300 transition-colors">
                Filters <Filter size={12} className="rotate-180"/>
            </button>
        </div>

        {/* List */}
        <div className="space-y-3">
            {platforms.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            {p.icon}
                        </div>
                        <span className="font-bold text-gray-500 text-sm">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-extrabold text-gray-900 text-sm">{p.amount}</span>
                        <span className="bg-[#F3F4F6] text-gray-600 text-[11px] font-bold px-2 py-1 rounded-full">{p.pct}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Bottom Card: Red Panel & Chart */}
      <div className="bg-white rounded-[2rem] p-5 shadow-sm flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-[#E93C68]">
                    <Dribbble size={20} />
                </div>
                <div>
                    <div className="text-xs text-gray-400 font-bold">Platform value</div>
                    <div className="text-sm font-bold text-gray-900 flex items-center gap-1">
                        Dribbble <ChevronDown size={14} />
                    </div>
                </div>
            </div>
            <div className="flex bg-[#F5F5F4] rounded-lg p-1 gap-1">
                <button className="bg-[#111111] text-white text-[11px] font-bold px-3 py-1.5 rounded-md shadow-sm">Revenue</button>
                <button className="text-gray-500 text-[11px] font-bold px-3 py-1.5 hover:text-gray-900">Leads</button>
                <button className="text-gray-500 text-[11px] font-bold px-3 py-1.5 hover:text-gray-900">W/L</button>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 gap-4">
            {/* Left Red Panel */}
            <div className="w-[140px] bg-[#D6336C] rounded-[1.5rem] p-4 text-white flex flex-col justify-center relative overflow-hidden shrink-0">
                {/* Rotated Text */}
                <div className="absolute top-1/2 -left-8 transform -rotate-90 text-white/30 text-[10px] font-bold tracking-widest whitespace-nowrap uppercase">Average monthly</div>
                
                <div className="space-y-6 relative z-10 pl-4">
                    <div>
                        <div className="text-white/60 text-[11px] font-medium mb-1">Revenue</div>
                        <div className="text-lg font-bold tracking-tight">$18,552</div>
                    </div>
                    <div>
                        <div className="text-white/60 text-[11px] font-medium mb-1">Leads</div>
                        <div className="text-lg font-bold flex items-baseline gap-1">
                            373 <span className="text-[10px] text-white/40 font-medium">97/276</span>
                        </div>
                    </div>
                    <div>
                        <div className="text-white/60 text-[11px] font-medium mb-1">Win/lose</div>
                        <div className="text-lg font-bold flex items-baseline gap-1">
                            16% <span className="text-[10px] text-white/40 font-medium">51/318</span>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Shape */}
                <svg className="absolute -bottom-1 -right-1 w-16 h-16 text-white" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 100 L100 100 L100 50 Q100 100 50 100 Z" />
                </svg>
            </div>

            {/* Right Chart Area */}
            <div className="flex-1 relative pt-2">
                 <div className="h-[220px] w-full text-xs">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={MONTHLY_REV_DATA} barSize={32} barGap={0}>
                            <defs>
                                <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                                    <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#E5E7EB" strokeWidth="1.5" />
                                </pattern>
                            </defs>
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fontSize: 11, fill: '#9CA3AF', fontWeight: 600}}
                                dy={10}
                            />
                            <YAxis 
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                tick={{fontSize: 10, fill: '#D1D5DB', fontWeight: 600}}
                                tickCount={5}
                            />
                            {/* Background Bar (Light Gray) */}
                             <Bar 
                                dataKey="value2" 
                                fill="#F3F4F6" 
                                radius={[6, 6, 6, 6]} 
                                stackId="a"
                            />
                            {/* Foreground Bar (Striped) */}
                            <Bar 
                                dataKey="value" 
                                fill="url(#diagonalHatch)" 
                                radius={[6, 6, 6, 6]} 
                                stackId="a"
                            />
                        </BarChart>
                     </ResponsiveContainer>
                     
                     {/* Floating Labels & Avatars */}
                     {/* Sep */}
                     <div className="absolute top-[48%] left-[12%] transform -translate-x-1/2">
                         <span className="bg-[#E93C68] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm">$6,901</span>
                     </div>
                     <div className="absolute bottom-[28px] left-[15%] transform -translate-x-1/2 flex -space-x-1.5">
                        <img src={AVATAR_1} className="w-5 h-5 rounded-full border-[1.5px] border-white z-30" />
                        <img src={AVATAR_2} className="w-5 h-5 rounded-full border-[1.5px] border-white z-20" />
                        <div className="w-5 h-5 rounded-full border-[1.5px] border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold z-10">+1</div>
                     </div>

                     {/* Oct */}
                     <div className="absolute top-[20%] left-[45%] transform -translate-x-1/2">
                         <span className="bg-[#E93C68] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm">$11,035</span>
                     </div>
                     <div className="absolute bottom-[28px] left-[48%] transform -translate-x-1/2 flex -space-x-1.5">
                        <img src={AVATAR_3} className="w-5 h-5 rounded-full border-[1.5px] border-white z-30" />
                        <img src={AVATAR_1} className="w-5 h-5 rounded-full border-[1.5px] border-white z-20" />
                        <img src={AVATAR_2} className="w-5 h-5 rounded-full border-[1.5px] border-white z-10" />
                     </div>

                     {/* Nov */}
                     <div className="absolute top-[32%] left-[78%] transform -translate-x-1/2">
                         <span className="bg-[#E93C68] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm">$9,288</span>
                     </div>
                      <div className="absolute bottom-[28px] left-[81%] transform -translate-x-1/2 flex -space-x-1.5">
                        <img src={AVATAR_2} className="w-5 h-5 rounded-full border-[1.5px] border-white z-30" />
                        <img src={AVATAR_3} className="w-5 h-5 rounded-full border-[1.5px] border-white z-20" />
                     </div>

                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;