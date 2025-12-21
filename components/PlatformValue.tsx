import React from 'react';
import { ChevronDown, Dribbble } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, LabelList } from 'recharts';
import { MONTHLY_REV_DATA, AVATAR_1, AVATAR_2, AVATAR_3 } from '../constants';

const renderCustomAvatar = (props: any, avatars: string[]) => {
    const { x, y, width, height, index } = props;
    const avatar = avatars[index];

    return (
        <g>
            <defs>
                <clipPath id={`clip-avatar-${index}-${x}`}>
                    <circle cx={x + width / 2} cy={y + height - 12} r={10} />
                </clipPath>
            </defs>
            {/* White border circle background */}
            <circle cx={x + width / 2} cy={y + height - 12} r={11} fill="white" />
            <image
                x={x + width / 2 - 10}
                y={y + height - 22}
                width={20}
                height={20}
                href={avatar}
                clipPath={`url(#clip-avatar-${index}-${x})`}
                preserveAspectRatio="xMidYMid slice"
            />
        </g>
    );
};

// Custom Label for the floating price tag
const renderCustomLabel = (props: any) => {
    const { x, y, width, value } = props;
    // Only show label for mapping index 0 (Sep), 1 (Oct), 2 (Nov) - but we want all of them?
    // The design shows labels for the first bar of each group.

    return (
        <g>
            <rect
                x={x + width / 2 - 25}
                y={y - 25}
                width={50}
                height={20}
                rx={4}
                fill="#E93C68"
                filter="drop-shadow(0px 2px 3px rgba(233, 60, 104, 0.3))"
            />
            <text
                x={x + width / 2}
                y={y - 11}
                fill="white"
                textAnchor="middle"
                fontSize={10}
                fontWeight="bold"
                dominantBaseline="middle"
            >
                ${value.toLocaleString()}
            </text>
            {/* Triangle pointing down */}
            <path
                d={`M${x + width / 2 - 4} ${y - 6} L${x + width / 2} ${y - 2} L${x + width / 2 + 4} ${y - 6} Z`}
                fill="#E93C68"
            />
        </g>
    );
};

const PlatformValue = () => {
    const avatars1 = [AVATAR_1, AVATAR_3, AVATAR_2];
    const avatars2 = [AVATAR_2, AVATAR_1, AVATAR_3];
    const avatars3 = [AVATAR_1, AVATAR_2, AVATAR_1];

    return (
        <div className="bg-[#F5F5F4] rounded-[2rem] p-5 border-[4px] border-white shadow-none h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-[#E93C68] bg-white shadow-sm">
                        <Dribbble size={20} />
                    </div>
                    <div className="leading-tight">
                        <div className="text-xs text-gray-400 font-bold">Platform value</div>
                        <div className="text-sm font-bold text-gray-900 flex items-center gap-1">
                            Dribbble <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
                {/* Toggle - White Container */}
                <div className="flex bg-white rounded-xl p-1.5 gap-1 items-center shadow-none border border-transparent">
                    <button className="bg-[#111111] text-white text-[11px] font-bold px-4 py-2 rounded-lg shadow-md">Revenue</button>
                    <button className="bg-transparent text-gray-900 text-[11px] font-bold px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">Leads</button>
                    <button className="bg-transparent text-gray-900 text-[11px] font-bold px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">W/L</button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-1 gap-4 items-stretch">
                {/* Left Red Panel */}
                <div className="w-[180px] bg-[#E93C68] rounded-tl-none rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-none p-0 text-white flex shrink-0 shadow-xl shadow-pink-500/20 overflow-hidden relative">
                    {/* Rotated Text Container - Aligned Left */}
                    <div className="w-12 h-full flex flex-col justify-center items-center py-6 absolute left-0 top-0 bottom-0">
                        <div className="transform -rotate-180 [writing-mode:vertical-rl] text-white/50 text-[11px] font-bold tracking-[0.2em] whitespace-nowrap uppercase">
                            Average monthly
                        </div>
                    </div>

                    {/* Main Content Info - Pushed Right */}
                    <div className="flex-1 flex flex-col justify-center gap-8 py-10 pl-6 pr-6 ml-6">
                        <div>
                            <div className="text-white/80 text-[11px] font-bold mb-1.5">Revenue</div>
                            <div className="text-[1.5rem] font-bold tracking-tight leading-none">$18,552</div>
                        </div>
                        <div>
                            <div className="text-white/80 text-[11px] font-bold mb-1.5">Leads</div>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-[1.5rem] font-bold leading-none">373</span>
                                <span className="text-[11px] text-white/60 font-semibold">97/276</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-white/80 text-[11px] font-bold mb-1.5">Win/lose</div>
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-[1.5rem] font-bold leading-none">16%</span>
                                <span className="text-[11px] text-white/60 font-semibold">51/318</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Chart Area */}
                <div className="flex-1 relative overflow-hidden">
                    <div className="h-full min-h-[250px] w-full text-xs">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={MONTHLY_REV_DATA} barGap={12} barCategoryGap="20%" margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
                                <defs>
                                    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                                        <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#E5E7EB" strokeWidth="1.5" />
                                    </pattern>
                                </defs>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#9CA3AF', fontWeight: 600 }}
                                    dy={10}
                                />
                                <YAxis
                                    orientation="right"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 10, fill: '#D1D5DB', fontWeight: 600 }}
                                    tickCount={5}
                                />
                                {/* Bar 1: Striped */}
                                <Bar
                                    dataKey="value"
                                    fill="url(#diagonalHatch)"
                                    radius={[6, 6, 6, 6]}
                                    maxBarSize={32}
                                >
                                    <LabelList dataKey="value" content={renderCustomLabel} />
                                    <LabelList content={(props) => renderCustomAvatar(props, avatars1)} />
                                </Bar>

                                {/* Bar 2: Solid Light Gray */}
                                <Bar
                                    dataKey="value2"
                                    fill="#E5E7EB"
                                    radius={[6, 6, 6, 6]}
                                    maxBarSize={32}
                                >
                                    <LabelList content={(props) => renderCustomAvatar(props, avatars2)} />
                                </Bar>

                                {/* Bar 3: Solid Gray */}
                                <Bar
                                    dataKey="value3"
                                    fill="#E5E7EB"
                                    radius={[6, 6, 6, 6]}
                                    maxBarSize={32}
                                >
                                    <LabelList content={(props) => renderCustomAvatar(props, avatars3)} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformValue;
