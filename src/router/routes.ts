import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: { title: 'Dashboard' },
      },
      {
        path: 'users',
        component: () => import('pages/Users.vue'),
        meta: { title: 'Users Management' },
      },
      {
        path: 'profile',
        component: () => import('pages/Profile.vue'),
        meta: { title: 'Profile' },
      },
    ],
  },
];

export default routes;
