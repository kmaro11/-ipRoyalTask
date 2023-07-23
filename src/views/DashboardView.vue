<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import RecentActivityComponent from "@/components/RecentActivityComponent.vue";
import ChartsComponent from "@/components/ChartsComponent.vue";
import MessageFeedComponent from "@/components/MessageFeedComponent.vue";
import OverviewBlocksComponent from "@/components/OverviewBlocksComponent.vue";

const route = useRoute();

const metaTitle = computed(() => {
  return route.meta.routeName;
});
</script>
<template>
  <div class="dashboard">
    <h1>{{ metaTitle }}</h1>
    <div class="dashboard__blocks">
      <div class="dashboard__block-left">
        <overview-blocks-component />
        <charts-component />
        <message-feed-component
          title="Phones"
          feed-action-name="See All Phones"
          :hide-refresh="false"
        />
      </div>
      <div class="dashboard__block-right">
        <recent-activity-component />
        <message-feed-component
          title="Upcoming Schedule"
          feed-action-name="Creat a New Schedule"
          hide-refresh
        />
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.dashboard {
  padding: 21px var(--layout-padding);
}

.dashboard h1 {
  color: var(--black-color);
}

.dashboard__blocks {
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 30px;
}

.dashboard__block-right,
.dashboard__block-left {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
}

.dashboard__block-right {
  max-width: 427px;
  width: 100%;
}
@media (max-width: 640px) {
  .dashboard {
    padding: 20px 20px;
  }
}

@media (max-width: 768px) {
  .dashboard__blocks {
    flex-direction: column;
  }
  .dashboard__block-right {
    max-width: unset;
    flex-direction: row;
  }
}
@media (max-width: 640px) {
  .dashboard__block-right {
    flex-direction: column;
  }
}
</style>
