<script setup lang="ts">
import ChartComponent from "@/components/ChartComponent.vue";
import { ref } from "vue";
import type { IChart } from "@/types";
import talentChart from "@/assets/icons/talent-chart.png";
import employeeChart from "@/assets/icons/employees-chart.png";

const charts = ref<IChart[]>([
  {
    name: "Total Employees",
    total: 216,
    women: 96,
    men: 120,
    variation: "+5%",
    chart: employeeChart,
  },
  {
    name: "Talent Request",
    total: 16,
    women: 10,
    men: 6,
    variation: "+2%",
    chart: talentChart,
  },
]);
</script>
<template>
  <div class="charts">
    <ChartComponent
      v-for="(chart, index) in charts"
      :key="index"
      :item="chart"
    />
  </div>
</template>
<style lang="css" scoped>
.charts {
  display: flex;
  gap: 16px;
}
@media (max-width: 640px) {
  .charts {
    flex-direction: column;
  }
}
</style>
