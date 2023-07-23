<script setup lang="ts">
import { ref } from "vue";
import type { IOverviewBlock } from "@/types";
import OverviewBlockComponent from "@/components/OverviewBlockComponent.vue";
const infoBlocks = ref<IOverviewBlock[]>([
  {
    title: "Available Position",
    number: 24,
    text: "4 Urgently needed",
    backgroundColor: "#FFEFE7",
    textColor: "#FF5151",
  },
  {
    title: "Job Open",
    number: 10,
    text: "4 Active hiring",
    backgroundColor: "#E8F0FB",
    textColor: "#3786F1",
  },
  {
    title: "New Employees",
    number: 24,
    text: "4 Department",
    backgroundColor: "#FDEBF9",
    textColor: "#EE61CF",
  },
]);
</script>
<template>
  <div class="overview-wrap">
    <overview-block-component
      v-for="(info, index) in infoBlocks"
      :key="index"
      :item="info"
    />
  </div>
</template>
<style>
.overview-wrap {
  display: flex;
  flex-grow: 1;
  gap: 14px;
}
@media (max-width: 640px) {
  .overview-wrap {
    flex-direction: column;
  }
}
</style>
