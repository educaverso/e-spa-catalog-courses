<script setup lang="ts">
import icons from "@/presentation/components/_shared/icons";
import { RouterLink } from "vue-router";
import type { BreadcrumbProps } from "./BreadcrumbProps";

defineProps<{
  items: BreadcrumbProps[];
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
}
</style>
