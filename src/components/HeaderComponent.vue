<script setup lang="ts">
import SearchInput from "@/components/base/SearchInput.vue";
import searchIcon from "@/assets/icons/search.svg";
import burgerIcon from "@/assets/icons/burger.svg";
import { ref } from "vue";
import HeaderMenuComponent from "@/components/HeaderMenuComponent.vue";

const search = ref("");
</script>
<template>
  <div class="header">
    <div class="header__container">
      <div class="header__mobile">
        <img :src="burgerIcon" alt="burger-icon" />
        <img :src="searchIcon" alt="search-icon" />
      </div>
      <div class="header__search-block">
        <search-input v-model="search" />
      </div>

      <header-menu-component />
    </div>
  </div>
</template>
<style scoped lang="css">
.header {
  padding-left: var(--layout-padding);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--bordr-color);
  padding: 23px var(--layout-padding) 23px 0;
}

.header__search-block {
  display: flex;
  max-width: 343px;
  width: 100%;
}
.header__mobile {
  display: none;
}

@media (max-width: 768px) {
  .header {
    padding: 0;
  }

  .header__container {
    padding: 10px 20px;
  }

  .header__search-block {
    display: none;
  }

  .header__mobile {
    display: flex;
    gap: 20px;
  }
}
</style>
