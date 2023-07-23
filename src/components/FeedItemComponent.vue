<script setup lang="ts">
import type { IPhone } from "@/types";

defineProps<{
  item: IPhone | null;
}>();
</script>
<template>
  <div class="feed-item" v-if="item">
    <div class="feed-item__info">
      <p class="feed-item__info-title">{{ item.title }}</p>
      <div class="feed-item__info-price-block">
        <p class="feed-item__info-price">Price: ${{ item.price }}</p>
        <p class="feed-item__info-rating">Rating: {{ item.rating }}</p>
      </div>
    </div>
    <p class="feed-item__left-description">{{ item.description }}</p>
  </div>
</template>
<style lang="css" scoped>
.feed-item {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid var(--bordr-color);
  background: var(--background-color);
}
.feed-item__info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.feed-item__info-price,
.feed-item__info-rating,
.feed-item__info-title {
  color: var(--secondary-title-color);
}

.feed-item__left-description {
  color: var(--primary-subtitle-color);
}

.feed-item__info-price-block {
  display: flex;
  gap: 16px;
}
</style>
