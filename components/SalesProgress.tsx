import React from 'react';
import { SALES_PROGRESS_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const SalesProgress = () => {
  return (
    <div className="w-full bg-white rounded-full p-2 pl-4 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8 overflow-x-auto no-scrollbar">
            {SALES_PROGRESS_DATA.map((data, idx) => (
                <div key={idx} className="flex items-center gap-3 min-w-[200px]">
                    <img src={data.user.avatar} alt={data.user.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{data.amount}</span>
                        {/* Fake Progress Bar visual */}
                        <div className="w-full md:w-32 h-1 bg-gray-100 rounded-full mt-1 relative overflow-hidden">
                             {/* Only show bar for first item to match design vaguely or just omit for cleanliness as design is text heavy here */}
                        </div>
                    </div>
                    <span className="ml-auto text-xs font-medium text-gray-400">{data.percentage}%</span>
                </div>
            ))}
            
            {/* The Black Circle C */}
            <div className="flex items-center gap-3 min-w-[150px]">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                    C
                </div>
                 <div className="flex flex-col">
                     <span className="text-sm font-bold text-gray-900">$45,386</span>
                </div>
                 <span className="ml-auto text-xs font-medium text-gray-400">8.58%</span>
            </div>
        </div>

        <button className="bg-[#111111] text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-black transition-colors shrink-0">
            Details
        </button>
    </div>
  );
};

export default SalesProgress;
