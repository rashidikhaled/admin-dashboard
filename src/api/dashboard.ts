import api from './index';

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface RecentActivity {
  id: number;
  user: string;
  action: string;
  timestamp: string;
}

export const dashboardApi = {
  getStats: () => api.get<DashboardStats>('/stats'),
  getRecentActivities: () => api.get<RecentActivity[]>('/dashboard/activities'),
};
