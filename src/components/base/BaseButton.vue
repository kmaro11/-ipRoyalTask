<script setup lang="ts">
type ButtonSizeVariants = "small" | "normal" | "large";

defineProps<{
  size: ButtonSizeVariants;
}>();
</script>
<template>
  <button class="button" :class="size"><slot /></button>
</template>
<style>
.button {
  border-radius: 4px;
  border: unset;
  outline: unset;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
  color: var(--white);
  cursor: pointer;
}
.button.small {
  height: 28px;
  font-size: 12px;
  font-weight: 500;
}
.button.normal {
  height: 38px;
  font-size: 14px;
  font-weight: 500;
}
.button.large {
  height: 47px;
  font-size: 16px;
  font-weight: 500;
}
</style>
