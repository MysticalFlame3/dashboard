import React from 'react';
import { AlignLeft, Filter, ChevronDown, Dribbble, Instagram, Chrome } from 'lucide-react';

const PlatformList = () => {
    // Static data to match screenshot exactly
    const platforms = [
        { name: "Dribbble", icon: <Dribbble size={20} className="text-[#E93C68]" />, amount: "$227,459", pct: "43%" },
        { name: "Instagram", icon: <Instagram size={20} className="text-[#E93C68]" />, amount: "$142,823", pct: "27%" },
        { name: "Behance", icon: <span className="font-bold text-lg text-blue-600">Bē</span>, amount: "$89,935", pct: "11%" },
        { name: "Google", icon: <Chrome size={20} className="text-green-500" />, amount: "$37,028", pct: "7%" },
    ];

    return (
        <div className="bg-[#F5F5F4] rounded-[2rem] p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                    <AlignLeft size={20} />
                    <ChevronDown size={14} className="text-gray-400" />
                </div>
                <button className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
                    Filters <Filter size={12} className="rotate-180" />
                </button>
            </div>

            {/* List */}
            <div className="space-y-3 flex-1">
                {platforms.map((p, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center">
                                {p.icon}
                            </div>
                            <span className="font-bold text-gray-600 text-sm">{p.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-extrabold text-gray-900 text-sm">{p.amount}</span>
                            <span className="bg-[#F3F4F6] text-gray-600 text-[11px] font-bold px-2 py-1 rounded-full">{p.pct}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformList;
