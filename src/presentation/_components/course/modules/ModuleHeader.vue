<script setup lang="ts">
import icons from "@/presentation/_components/_shared/icons";
import { RouterLink } from "vue-router";
import type ModuleProps from "./ModuleProps";

// defineProps<{
//   item: ModuleProps;
// }>();
</script>

<template>
  <div class="ev-module-header">
    <RouterLink to="/">
      <div
        class="d-flex align-center justify-space-between ev-module-header__title"
      >
        <div
          :class="[
            'd-flex align-center gap-2',
            { 'ev-module-header--checked': true },
          ]"
        >
          <icons name="check-circle-outline" />
          <span class="">Apresentação</span>
        </div>
        <div>
          <icons class="down" name="chevron-down" />
        </div>
      </div>
    </RouterLink>
    <div
      class="d-flex align-center justify-space-between ev-module-header__info"
    >
      <div class="d-flex align-center gap-1">
        <div>{{ 4 }} aula<span v-if="4 > 1">s</span></div>
        <icons name="circle-small" />
        <div>{{ 2 }} desafio<span v-if="2 > 1">s</span></div>
      </div>
      <div class="d-flex align-center gap-4">
        <span>40:23 </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-module-header {

  &--checked {
    color: var(--theme-dark-secondary);
  }

  &__title {
    font-size: large;
  }

  &__icon {
    font-size: large;
    color: var(--theme-dark-label);
  }

  &__info {
    color: var(--theme-dark-label);
    font-size: small;
  }

  &__content {
    flex-direction: column;
  }
}
</style>
