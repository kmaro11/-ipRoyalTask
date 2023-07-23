<script setup lang="ts">
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import chatIcon from "@/assets/icons/chat.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import userIcon from "@/assets/icons/user.png";
</script>
<template>
  <div class="header-menu">
    <img :src="notificationIcon" alt="notification" />
    <img :src="chatIcon" alt="chat" />
    <div class="header-menu__user-wrap">
      <img :src="userIcon" alt="user" class="header-menu__user-icon" />
      <span class="header-menu__user-name">Admirra John</span>
      <img :src="arrowDownIcon" alt="arrow-down" />
    </div>
  </div>
</template>
<style>
.header-menu {
  gap: 30px;
}

.header-menu,
.header-menu__user-wrap {
  display: flex;
  align-items: center;
}

.header-menu__user-wrap {
  gap: 12px;
  color: var(--black-color);
  font-weight: 500;
}

.header-menu__user-icon {
  border-radius: 100%;
}

@media (max-width: 640px) {
  .header-menu {
    gap: 16px;
  }
  .header-menu__user-name {
    display: none;
  }
}
</style>
