<script lang="ts" setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SideBarComponent from "@/components/SideBarComponent.vue";
</script>
<template>
  <div class="layout">
    <side-bar-component />
    <div class="layout layout-view">
      <header-component />
      <div class="layout-container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style>
.layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
.layout-view {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
}
.layout-container {
  max-width: 1240px;
  width: auto;
}
</style>
