<script setup lang="ts">
import icons from "@/presentation/components/_shared/icons";
import { RouterLink } from "vue-router";
import type ModuleProps from "./ModuleProps";

defineProps<{
  item: ModuleProps;
}>();
</script>

<template>
  <div class="ev-module mb-2 pt-2 pb-2 pl-3 pr-3">
    <RouterLink :to="item.to" class="d-flex align-center title">
      <div :class="['d-flex gap-1', { checked: item.done }]">
        <icons name="checkbox-marked-circle-outline" />
        <div>{{ item.title }}</div>
      </div>
      <div>
        <icons class="down" name="chevron-down" />
      </div>
    </RouterLink>
    <div>
      {{ item.qtyLessons }} aula<span v-if="item.qtyLessons > 1">s</span>
      <icons name="circle-small" />
      {{ item.qtyChallenge }} desafio<span v-if="item.qtyChallenge > 1">s</span>
    </div>
  </div>
</template>

<style lang="scss">
.ev-module {
  background-color: var(--theme-dark-panel);
  border-radius: 1rem;

  .down {
    color: var(--theme-dark-foreground);
  }

  .checked {
    color: var(--theme-dark-success);
  }

  .muted {
    color: var(--color-muted);
  }

  .title {
    line-height: 1.75;
    white-space: normal;
    font-size: 1rem;
    font-family: "Source Sans Pro", sans-serif;
    justify-content: space-between;
    color: var(--theme-dark-primary);
  }
  .gap-1 {
    gap: 10px;
  }
}
</style>
