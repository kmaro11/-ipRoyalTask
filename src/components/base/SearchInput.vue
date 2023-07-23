<script lang="ts" setup>
import { computed } from "vue";
import searchIcon from "@/assets/icons/search.svg";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: string | undefined): void;
}>();

const search = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>
<template>
  <div class="search">
    <input
      v-model="search"
      type="text"
      class="search__input"
      placeholder="Search"
    />
    <img :src="searchIcon" alt="search-icon" class="search__icon" />
  </div>
</template>
<style lang="css" scoped>
.search {
  display: flex;
  position: relative;
  width: 100%;
}
.search__input {
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  background: var(--background-color);
  width: 100%;
}

.search__input,
.search__input:focus,
.search__input:focus-visible,
.search__input:active {
  border: 1px solid #e0e0e0;
  outline: none;
}

.search__input,
.search__input::placeholder {
  font-size: var(--default-font-size);
  color: #b3b3b3;
}

.search__icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
