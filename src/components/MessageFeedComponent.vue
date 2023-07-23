<script lang="ts" setup>
import { fetchData } from "@/utils/http";
import { ref, watch } from "vue";
import type { IPhone } from "@/types";
import FeedItemComponent from "@/components/FeedItemComponent.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";

const phones = ref<IPhone[] | null>(null);
const options = ["Title", "Rating", "Price"];
const sort = ref<string>("Title");

defineProps<{
  title: string;
  feedActionName: string;
  hideRefresh: boolean;
}>();

const getData = async () => {
  await fetchData("products/category/smartphones")
    .then((res) => {
      phones.value = [...res.products];
    })
    .catch((err) => {
      console.log(err);
    });
};

const sortPhones = () => {
  return phones?.value?.sort((a, b) => {
    switch (sort.value) {
      case "Title":
        return a.title - b.title;
      case "Rating":
        return b.rating - a.rating;
      case "Price":
        return b.price - a.price;
      default:
        return a.title - b.title;
    }
  });
};

watch(
  () => sort.value,
  () => {
    sortPhones();
  },
  { deep: true }
);

getData();
</script>
<template>
  <div class="messages">
    <div class="messages__header">
      <h2 class="messages__header-title">{{ title }}</h2>
      <div class="messages__header-sort">
        <base-button v-if="!hideRefresh" size="small" @click="getData">
          Refresh
        </base-button>
        <base-select v-model="sort" :options="options" @select="sortPhones" />
      </div>
    </div>
    <div class="messages__feed" v-if="phones && phones.length">
      <feed-item-component
        v-for="(phone, index) in phones"
        :key="index"
        :item="phone"
      />
    </div>
    <div class="messages__feed-action">{{ feedActionName }}</div>
  </div>
</template>
<style lang="css" scoped>
.messages {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--bordr-color);
  background: var(--white);
  overflow: hidden;
}

.messages__header {
  padding: 16px 22px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}

.messages__header-sort {
  display: flex;
  align-items: center;
  gap: 10px;
}

.messages__feed {
  display: flex;
  flex-direction: column;
  padding: 0 22px;
  gap: 8px;
  max-height: 250px;
  overflow-y: auto;
}

.messages__feed-action {
  background-color: var(--white);
  cursor: pointer;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--main-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px;
  border-top: 1px solid var(--bordr-color);
}
</style>
