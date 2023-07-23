<script setup lang="ts">
import type { IChart } from "@/types";

defineProps<{
  item: IChart;
}>();
</script>
<template>
  <div class="chart">
    <div class="chart__left">
      <h2 class="chart__left-name">{{ item.name }}</h2>
      <p class="chart__left-total">{{ item.total }}</p>
      <p class="chart__left-text">{{ item.men }} man</p>
      <p class="chart__left-text">{{ item.women }} women</p>
    </div>
    <div class="chart__right">
      <img :src="item.chart" alt="chart" class="chart__right-image" />
      <div class="chart__right-text">{{ item.variation }} Past month</div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.chart {
  width: 50%;
  border-radius: var(--default-border-radius);
  padding: 20px;
  border: 1px solid var(--bordr-color);
  display: flex;
  justify-content: space-between;
}

.chart__left-name {
  margin-bottom: 20px;
}

.chart__left-total {
  color: var(--black-color);
  font-size: 48px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 32px;
}

.chart__left-text {
  display: flex;
  gap: 4px;
  color: var(--primary-subtitle-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}

.chart__right-image {
  max-width: 115px;
  width: 100%;
  margin-bottom: 20px;
}

.chart__right-text {
  border-radius: 4px;
  background-color: #ffefe7;
  color: var(--secondary-title-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  padding: 0 10px;
}

@media (max-width: 640px) {
  .chart {
    width: auto;
  }
}
</style>
