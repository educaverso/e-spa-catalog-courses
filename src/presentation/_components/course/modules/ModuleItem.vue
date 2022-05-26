<script setup lang="ts">
import icons from "@/presentation/_components/_shared/icons";
import { RouterLink } from "vue-router";

export interface ModuleItemInterface {
  to: string;
  title: string;
  duration: string;
  icon: string;
  done: boolean;
}

defineProps<{
  item: ModuleItemInterface;
}>();
</script>

<template>
  <RouterLink :to="item.to">
    <div class="d-flex gap-2 align-center justify-space-between ev-item-module">
      <div class="d-flex align-center gap-2">
        <icons
          :class="[
            item.done ? 'ev-item-module--done' : 'ev-item-module__icon',
          ]"
          :name="item.icon"
        />
        <span>{{ item.title }}</span>
      </div>
      <div class="d-flex align-center gap-4">
        <span class="ev-item-module__time">{{ item.duration }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.ev-item-module {
  font-weight: 600;

  &__icon {
    color: var(--theme-dark-label);
  }

  &--done {
    color: var(--theme-dark-success);
  }

  &__time {
    font-size: x-small;
    color: var(--theme-dark-label);
  }
}
</style>
