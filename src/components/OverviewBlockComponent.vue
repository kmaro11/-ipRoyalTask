<script setup lang="ts">
import type { IOverviewBlock } from "@/types";

defineProps<{
  item: IOverviewBlock;
}>();
</script>
<template>
  <div
    class="overview-item"
    :style="`background-color: ${item.backgroundColor}`"
  >
    <h2 class="overview-item__title">{{ item.title }}</h2>
    <p class="overview-item__number">{{ item.number }}</p>
    <p class="overview-item__text" :style="`color: ${item.textColor}`">
      {{ item.text }}
    </p>
  </div>
</template>
<style>
.overview-item {
  width: 33%;
  padding: 12px;
  border-radius: var(--default-border-radius);
}
.overview-item__title {
  margin-bottom: 16px;
}
.overview-item__number {
  font-size: 36px;
  font-weight: 500;
  line-height: 28px;
  color: var(--black-color);
  margin-bottom: 16px;
}
@media (max-width: 640px) {
  .overview-item {
    width: auto;
  }
}
</style>
