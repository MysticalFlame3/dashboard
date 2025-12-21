export interface NavItem {
  icon: any;
  label: string;
  active?: boolean;
  notificationCount?: number;
  hasSubmenu?: boolean;
  submenu?: string[];
  isOpen?: boolean;
}

export interface User {
  name: string;
  avatar: string;
}

export interface SalesData {
  user: User;
  amount: string;
  percentage: number;
}

export interface PlatformStat {
  name: string;
  icon: string;
  amount: string;
  percentage: string;
  color: string;
}

export interface ChartData {
  name: string;
  value: number;
  value2?: number;
}
