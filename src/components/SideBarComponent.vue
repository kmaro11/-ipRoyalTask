<script lang="ts" setup>
import logo from "@/assets/icons/logo.svg";
import calendar from "@/assets/icons/ic_calendar.svg";
import dashboard from "@/assets/icons/ic_dashboard.svg";
import department from "@/assets/icons/ic_department.svg";
import employee from "@/assets/icons/ic_employee.svg";
import recruitment from "@/assets/icons/ic_recruitment.svg";
import settings from "@/assets/icons/ic_settings.svg";
import support from "@/assets/icons/ic_support.svg";
import { IndexRoutes } from "@/router";
import { useRoute } from "vue-router";

const menu = [
  {
    label: "MAIN MENU",
    tabs: [
      {
        link: IndexRoutes.Dashboard,
        name: "Dashboard",
        icon: dashboard,
      },
      {
        link: IndexRoutes.Dashboard,
        name: "Recruitment",
        icon: recruitment,
      },
      {
        link: IndexRoutes.Dashboard,
        name: "Schedule",
        icon: calendar,
      },
      {
        link: IndexRoutes.Dashboard,
        name: "Employee",
        icon: employee,
      },
      {
        link: IndexRoutes.Dashboard,
        name: "Department",
        icon: department,
      },
    ],
  },
  {
    label: "OTHER",
    tabs: [
      {
        link: IndexRoutes.Dashboard,
        name: "Support",
        icon: support,
      },
      {
        link: IndexRoutes.Dashboard,
        name: "Settings",
        icon: settings,
      },
    ],
  },
];
const route = useRoute();

function activeTab(tab: string): boolean {
  return route.name === tab;
}
</script>
<template>
  <div class="sidebar">
    <div class="sidebar__logo-wrap">
      <img :src="logo" alt="logo" class="sidebar__logo" />
    </div>
    <div v-for="(menuItem, index) in menu" :key="index" class="sidebar__block">
      <p class="sidebar__label">{{ menuItem.label }}</p>
      <router-link
        v-for="(tab, index) in menuItem.tabs"
        :key="index"
        :to="{ name: tab.link }"
        class="sidebar__link"
        :class="{ active: activeTab(tab.name) }"
      >
        <img :src="tab.icon" :alt="tab.name" class="sidebar__link-icon" />
        <div class="sidebar__link-name">{{ tab.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<style lang="css" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  max-width: 242px;
  width: 100%;
  padding: 20px 30px 0;
  background-color: var(--background-color);
  flex-shrink: 0;
}

.sidebar__logo-wrap {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.sidebar__logo {
  max-width: 108px;
  width: 100%;
}

.sidebar__logo-wrap,
.sidebar__block {
  margin-bottom: 39px;
}

.sidebar__block {
  display: flex;
  flex-direction: column;
}

.sidebar__block:last-of-type {
  margin-bottom: 0;
}

.sidebar__label {
  color: var(--primary-subtitle-color);
}

.sidebar__link {
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 24px;
}

.sidebar__link.active .sidebar__link-name {
  color: var(--main-color);
  font-weight: 500;
}

.sidebar__link-icon {
  display: flex;
  align-items: center;
}

.sidebar__link-name {
  color: var(--primary-subtitle-color);
  font-weight: 400;
}
@media (max-width: 768px) {
  .sidebar__link-name {
    display: none;
  }
  .sidebar {
    max-width: 90px;
    padding: 40px 0 0;
  }
  .sidebar__block {
    align-items: center;
  }
  .sidebar__label {
    font-size: 10px;
    line-height: 18px;
  }
}
@media (max-width: 640px) {
  .sidebar {
    display: none;
  }
}
</style>
