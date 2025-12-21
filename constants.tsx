import {
  LayoutGrid,
  FileText,
  Settings,
  MessageCircle,
  Briefcase,
  PieChart,
  FolderOpen,
  Instagram,
  Dribbble,
  Chrome,
  MoreHorizontal
} from 'lucide-react';
import { NavItem, SalesData, PlatformStat, ChartData } from './types';

// Avatars (using picsum as placeholders, but ideally would be specific faces)
export const AVATAR_1 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80"; // Armin
export const AVATAR_2 = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100&q=80"; // Eren
export const AVATAR_3 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"; // Mikasa

export const NAV_ITEMS: NavItem[] = [
  { icon: LayoutGrid, label: "Dashboard", hasSubmenu: true, isOpen: true },
  { icon: FileText, label: "Reports", hasSubmenu: true, isOpen: true },
];

export const REPORT_SUBMENU = [
  { label: "Emails received", active: false },
  { label: "Deal duration", active: false },
  { label: "New report", active: true },
  { label: "Analytics", active: false, notification: 7 },
];

export const SALES_PROGRESS_DATA: SalesData[] = [
  { user: { name: "Armin A.", avatar: AVATAR_1 }, amount: "$209,633", percentage: 39.63 },
  { user: { name: "Mikasa A.", avatar: AVATAR_3 }, amount: "$156,841", percentage: 29.65 },
  { user: { name: "Eren Y.", avatar: AVATAR_2 }, amount: "$117,115", percentage: 22.14 },
];

export const PLATFORM_STATS: PlatformStat[] = [
  { name: "Dribbble", icon: "dribbble", amount: "$227,459", percentage: "43%", color: "text-pink-500" },
  { name: "Instagram", icon: "instagram", amount: "$142,823", percentage: "27%", color: "text-orange-500" },
  { name: "Behance", icon: "behance", amount: "$89,935", percentage: "11%", color: "text-blue-600" },
  { name: "Google", icon: "google", amount: "$37,028", percentage: "7%", color: "text-green-500" },
];

export const REFERRER_DATA: ChartData[] = [
  { name: 'Be', value: 5500 },
  { name: 'Dr', value: 9200 },
  { name: 'Go', value: 6800 },
  { name: 'In', value: 4500 },
  { name: 'Ot', value: 8900 },
];

export const SALES_DYNAMIC_DATA: ChartData[] = [
  // W1 (Start)
  { name: 'W 1', value: 1500, value2: 2400 },
  { name: '', value: 1300, value2: 2800 },
  { name: '', value: 1400, value2: 3400 },
  { name: '', value: 1600, value2: 4200 }, // Dash peak 1
  { name: '', value: 1900, value2: 4000 },
  { name: '', value: 1800, value2: 3600 },

  // W3 (Red rising, Dash dropping)
  { name: 'W 3', value: 2400, value2: 3200 },
  { name: '', value: 3200, value2: 2800 },
  { name: '', value: 4500, value2: 2600 }, // Red shoots up
  { name: '', value: 5800, value2: 2500 }, // Red Peak 1
  { name: '', value: 6200, value2: 2800 },
  { name: '', value: 5400, value2: 3200 }, // Red small dip

  // W5 (Red secondary peak, then CRASH)
  { name: 'W 5', value: 5800, value2: 3500 },
  { name: '', value: 4800, value2: 3600 },
  { name: '', value: 3600, value2: 3500 },
  { name: '', value: 2400, value2: 3400 }, // Freefall
  { name: '', value: 1200, value2: 3300 }, // Deep valley

  // W7 (Bottom, then recovery)
  { name: 'W 7', value: 800, value2: 3200 }, // Lowest Point
  { name: '', value: 1600, value2: 3100 },
  { name: '', value: 2400, value2: 3200 },
  { name: '', value: 2800, value2: 3600 },
  { name: '', value: 2900, value2: 4000 }, // Crossing
  { name: '', value: 3400, value2: 4200 },

  // W9 (Steady climb)
  { name: 'W 9', value: 4200, value2: 4000 },
  { name: '', value: 4800, value2: 3400 },
  { name: '', value: 5800, value2: 3000 },
  { name: '', value: 6400, value2: 2600 },

  // W11 (Final ascent)
  { name: 'W 11', value: 7200, value2: 2800 },
  { name: '', value: 7600, value2: 3000 },
  { name: '', value: 7400, value2: 3400 }, // Small jaggedness
  { name: '', value: 8000, value2: 4000 }, // Top
];

export const MONTHLY_REV_DATA: ChartData[] = [
  { name: 'Sep', value: 6901, value2: 4000, value3: 3000 },
  { name: 'Oct', value: 11035, value2: 6000, value3: 3500 },
  { name: 'Nov', value: 9288, value2: 7500, value3: 8500 },
];
