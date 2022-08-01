import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainPage from '@/views/MainPage.vue';
import ProjectBoard from '@/views/ProjectBoard.vue';

export const ROUTE_NAMES = {
  projectBoard: "ProjectBoard",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/project",
    name: "MainPage",
    component: MainPage,
    children: [
      {
        path: "board",
        name: "ProjectBoard",
        component: ProjectBoard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
