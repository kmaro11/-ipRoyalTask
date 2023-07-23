<script lang="ts" setup>
import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.min.css";
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
  options: Array,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | undefined): void;
  (e: "select", value: string): void;
}>();

const select = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>
<template>
  <vue-select
    v-if="options"
    v-model="select"
    :options="options"
    close-on-select
  />
</template>
