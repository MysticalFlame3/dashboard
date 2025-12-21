import React from 'react';
import { 
  History, 
  Star, 
  MoreHorizontal, 
  Plus, 
  Link as LinkIcon, 
  Settings, 
  MessageCircle,
  LayoutGrid,
  FileText,
  ChevronDown,
  ChevronUp,
  Command,
  Leaf,
  RefreshCw,
  File
} from 'lucide-react';
import { NAV_ITEMS, REPORT_SUBMENU } from '../constants';

const Sidebar = () => {
  return (
    <div className="flex h-screen sticky top-0 hidden md:flex shrink-0">
      {/* Left Icon Rail */}
      <div className="w-[80px] bg-[#F5F5F4] flex flex-col items-center py-6 gap-6 border-transparent">
        {/* Logo */}
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
          C
        </div>

        {/* Rail Icons */}
        <div className="flex flex-col gap-5 mt-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all cursor-pointer">
                <RefreshCw size={20} />
            </div>
            
            {/* TG Red Circle */}
            <div className="w-10 h-10 rounded-full bg-[#E93C68] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-pink-200 hover:scale-105 transition-transform cursor-pointer">
                tg
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all cursor-pointer">
                <FileText size={20} />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all cursor-pointer">
                <Command size={20} />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all cursor-pointer">
                <Leaf size={20} />
            </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-col gap-4">
             <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-transform">
                <MessageCircle size={20} className="text-gray-600" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#E93C68] border-2 border-[#F5F5F4] rounded-full"></div>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-transform">
                <Settings size={20} className="text-gray-600" />
            </div>
        </div>
      </div>

      {/* Secondary Navigation Menu */}
      <div className="w-60 bg-[#F5F5F4] flex flex-col py-6 pr-4 overflow-y-auto">
        {/* Header - Codename */}
        <div className="flex items-center gap-1 mb-8 pl-2">
            <span className="font-bold text-lg text-gray-800">Codename.com</span>
            <ChevronDown size={16} className="text-gray-500 mt-1" />
        </div>

        {/* Quick Links */}
        <div className="space-y-4 mb-6 text-sm font-medium text-gray-500 pl-2">
            <div className="flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors">
            <Star size={18} /> <span>Starred</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors">
            <History size={18} /> <span>Recent</span>
            </div>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1">
            <div className="font-semibold text-gray-800 mb-2 pl-2">Sales list</div>
            <div className="font-semibold text-gray-800 mb-2 pl-2">Goals</div>
            
            {/* Dashboard Section */}
            <div className="group mt-3">
                <div className="flex items-center justify-between font-semibold text-gray-800 cursor-pointer mb-2 pl-2">
                    <span>Dashboard</span>
                    <Plus size={16} className="text-gray-400" />
                </div>
                
                <div className="pl-5 border-l-2 border-gray-200 ml-3 space-y-3 mt-2">
                    <div className="text-gray-700 font-medium">Codename</div>
                    
                    {/* Shared with me */}
                    <div className="space-y-2">
                    <div className="flex items-center justify-between text-gray-500 text-sm cursor-pointer">
                        <span>Shared with me</span>
                        <ChevronUp size={14} />
                    </div>
                    <div className="pl-2 space-y-3 text-sm text-gray-600 font-medium">
                        <div className="hover:text-gray-900 cursor-pointer">Cargo2go</div>
                        <div className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
                        <span>Cloudz3r</span>
                        <span className="bg-[#E93C68] text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
                        </div>
                        <div className="hover:text-gray-900 cursor-pointer">Idioma</div>
                        <div className="hover:text-gray-900 cursor-pointer">Syllables</div>
                        <div className="hover:text-gray-900 cursor-pointer">x-0b</div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Reports Section */}
            <div className="mt-6">
                <div className="flex items-center justify-between font-semibold text-gray-800 cursor-pointer mb-2 pl-2">
                    <span>Reports</span>
                    <Plus size={16} className="text-gray-400" />
                </div>
                <div className="pl-5 border-l-2 border-gray-200 ml-3 space-y-3 mt-2">
                    <div className="flex items-center justify-between text-gray-500 text-sm cursor-pointer">
                    <span>Share with me</span>
                    <ChevronUp size={14} />
                    </div>
                    <div className="pl-2 space-y-2 text-sm text-gray-600 font-medium">
                        <div className="hover:text-gray-900 cursor-pointer">Deals by user</div>
                        <div className="hover:text-gray-900 cursor-pointer">Deal duration</div>
                    </div>

                    {/* My Reports */}
                    <div className="flex items-center justify-between text-gray-700 font-medium text-sm cursor-pointer mt-4">
                    <span>My reports</span>
                    <ChevronUp size={14} />
                    </div>
                    <div className="pl-2 space-y-3 text-sm font-medium">
                        {REPORT_SUBMENU.map((item, idx) => (
                        <div key={idx} className={`flex items-center justify-between cursor-pointer ${item.active ? 'text-[#E93C68]' : 'text-gray-600 hover:text-gray-900'}`}>
                            <span>{item.label}</span>
                            {item.notification && (
                            <span className="bg-[#E93C68] text-white text-[10px] px-1.5 py-0.5 rounded-full">{item.notification}</span>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 flex items-center gap-2 cursor-pointer hover:text-gray-800 pl-2">
                <LinkIcon size={14} /> Manage folders
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
