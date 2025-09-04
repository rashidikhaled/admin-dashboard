import api from './index';

export interface LoginCredentials {
  email: string;
  password: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
export const authApi = {
  login: (credential: LoginCredentials) => api.post('/auth/login', credential),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get<User>('/auth/profile'),
  refreshToken: () => api.post('/auth/refres'),
};
