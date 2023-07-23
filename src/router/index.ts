import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Dashboard from "@/views/DashboardView.vue";
import Layout from "@/layouts/AppLayout.vue";

export enum IndexRoutes {
  App = "App",
  Dashboard = "Dashboard",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: IndexRoutes.App,
    component: Layout,
    redirect: { name: IndexRoutes.Dashboard },
    children: [
      {
        path: "/dashboard",
        name: IndexRoutes.Dashboard,
        meta: {
          routeName: IndexRoutes.Dashboard,
        },
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
});

export default router;
