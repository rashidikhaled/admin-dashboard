import api from './index';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export const usersApi = {
  getUsers: (page = 1, limit = 10) => api.get(`/users?_page=${page}&_limit=${limit}`),

  getUser: (id: number) => api.get(`/users/${id}`),

  createUser: (user: Omit<User, 'id'>) => api.post('/users', user),

  updateUser: (id: number, user: Partial<User>) => api.put(`/users/${id}`, user),

  deleteUser: (id: number) => api.delete(`/users/${id}`),
};
