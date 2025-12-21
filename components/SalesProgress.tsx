import React from 'react';
import { SALES_PROGRESS_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const SalesProgress = () => {
    return (
        <div className="w-full flex items-center gap-4 mb-8">

            {/* The Gray Track Container */}
            <div className="flex-1 bg-[#F5F5F4] rounded-full p-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
                {/* Data Items - Elongated White Pills */}
                {SALES_PROGRESS_DATA.map((data, idx) => (
                    <div key={idx} className="bg-white rounded-full p-2 pr-8 flex items-center gap-4 min-w-[350px] shadow-sm shrink-0">
                        <img src={data.user.avatar} alt={data.user.name} className="w-10 h-10 rounded-full object-cover" />
                        <span className="text-base font-bold text-gray-900">{data.amount}</span>
                        <span className="ml-auto text-sm font-bold text-gray-400">{data.percentage}%</span>
                    </div>
                ))}

                {/* The Black Circle C Item - Transparent Background */}
                <div className="flex items-center gap-4 min-w-[200px] px-4 shrink-0">
                    <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                        C
                    </div>
                    <span className="text-base font-bold text-gray-900">$45,386</span>
                    <span className="ml-auto text-sm font-bold text-gray-400">8.58%</span>
                </div>
            </div>

            {/* Details Button - Outside the gray track */}
            <button className="bg-[#111111] text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-black transition-colors shadow-lg shrink-0 h-[60px]">
                Details
            </button>
        </div>
    );
};

export default SalesProgress;
