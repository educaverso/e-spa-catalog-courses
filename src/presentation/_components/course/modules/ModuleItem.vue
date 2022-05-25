<script setup lang="ts">
import icons from "@/presentation/_components/_shared/icons";
import { RouterLink } from "vue-router";
import type ModuleItemProps from "./ModuleItemProps";

defineProps<{
  item: ModuleItemProps;
}>();
</script>

<template>
  <RouterLink :to="item.to">
    <div class="ev-item-module d-flex gap-2 align-center justify-space-between">
      <div class="d-flex align-center gap-2">
        <icons class="ev-item-module__icon" :name="item.icon" />
        <div>{{ item.title }}</div>
      </div>
      <div class="d-flex align-center gap-4">
        <span class="ev-item-module__time">{{ item.duration }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.ev-item-module {

  &__icon {
    font-size: large;
    color: var(--theme-dark-label);
  }

  &__time {
    font-size: small;
    color: var(--theme-dark-label);
  }
}
</style>
