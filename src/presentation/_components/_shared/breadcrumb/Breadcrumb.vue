<script setup lang="ts">
import icons from "@/presentation/_components/_shared/icons";
import { RouterLink } from "vue-router";

export interface BreadcrumbInterface {
  to: string;
  value: string;
}


defineProps<{
  items: BreadcrumbInterface[];
}>();
</script>

<template>
  <div class="ev-breadcrumb d-flex">
    <div v-for="(item, index) in items" :key="index">
      <icons v-if="index !== 0" name="chevron-right" />
      <RouterLink :to="item.to">{{ item.value }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.ev-breadcrumb {
  color: var(--theme-dark-label);
  font-size: 0.875rem;;
}
</style>
