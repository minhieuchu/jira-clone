import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import ProjectBoard from '@/views/ProjectBoard.vue';

export const ROUTE_NAMES = {
  projectBoard: "ProjectBoard",
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/project/board",
    name: ROUTE_NAMES.projectBoard,
    component: ProjectBoard,
  },
  { path: "/:pathMatch(.*)*", redirect: { name: ROUTE_NAMES.projectBoard } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
