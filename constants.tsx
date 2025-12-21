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
  { name: 'W1', value: 4000, value2: 2400 },
  { name: 'W2', value: 3000, value2: 1398 },
  { name: 'W3', value: 2000, value2: 4800 },
  { name: 'W4', value: 2780, value2: 3908 },
  { name: 'W5', value: 1890, value2: 4800 },
  { name: 'W6', value: 2390, value2: 3800 },
  { name: 'W7', value: 3490, value2: 4300 },
  { name: 'W8', value: 2000, value2: 2400 },
  { name: 'W9', value: 2780, value2: 3908 },
  { name: 'W10', value: 1890, value2: 4800 },
  { name: 'W11', value: 3490, value2: 4300 },
  { name: 'W12', value: 3900, value2: 4800 },
];

export const MONTHLY_REV_DATA: ChartData[] = [
  { name: 'Sep', value: 6901, value2: 4000 },
  { name: 'Oct', value: 11035, value2: 6000 },
  { name: 'Nov', value: 9288, value2: 7500 },
];
