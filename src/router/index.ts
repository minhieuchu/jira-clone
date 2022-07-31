import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ProjectBoard from '@/views/ProjectBoard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ProjectBoard",
    component: ProjectBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
