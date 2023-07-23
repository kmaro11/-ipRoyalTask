<template>
  <div class="recent-activity">
    <div class="recent-activity__title">
      <h2>Recently Activity</h2>
    </div>
    <div class="recent-activity__text-block">
      <div class="recent-activity__text-wrapper">
        <p class="recent-activity__text small">10.40 AM, Fri 10 Sept 2021</p>
        <h2 class="recent-activity__text title">Recently Activity</h2>
        <p class="recent-activity__text normal">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div class="recent-activity__footer">
        <p>Today you makes 12 Activity</p>
        <base-button size="normal">See All Activity</base-button>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.recent-activity {
  max-width: 427px;
  width: auto;
  border-radius: 10px;
  background: var(--tertiary-color);
  color: var(--white);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.recent-activity__title {
  padding: 10px 10px 10px 24px;
  border-radius: 10px 10px 0 0;
  background: #1b204a;
}

.recent-activity__text-block {
  padding: 26px 24px;
}

.recent-activity__text-wrapper {
  max-width: 340px;
  width: auto;
}

.recent-activity__text.small {
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  opacity: 0.6;
  margin-bottom: 6px;
}

.recent-activity__text.title {
  margin-bottom: 6px;
}

.recent-activity__text.normal {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.6;
  margin-bottom: 28px;
}

.recent-activity__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

@media (max-width: 768px) {
  .recent-activity {
    max-width: unset;
    width: 40%;
    flex-shrink: 0;
  }
  .recent-activity__footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .recent-activity__footer .button {
    max-width: 146px;
    width: auto;
  }

  .recent-activity__text-block {
    padding: 20px 20px 24px;
  }

  .recent-activity__title {
    padding: 10px 10px 10px 20px;
  }
}
@media (max-width: 640px) {
  .recent-activity {
    width: auto;
  }
}
</style>
<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
</script>
